const ErrorResponse = require("../utils/errorResponse")
const User = require('../Models/Users')



//@desc     Register user
//@route    POST - /api/v1/auth/register
//@access   Public
exports.register = async (req,res, next) => {

    const {name,email,password,role} = req.body

    const user = await User.create({
        name,email,password,role
    })

   
    sendCookieResponse(user,200,res)
}


//@desc     login user
//@route    POST - /api/v1/auth/login
//@access   Public
exports.login = async (req,res, next) => {

    const {email,password} = req.body

    //validate email and password
    if(!email || !password){
        return next(new ErrorResponse("Please provide an Email and Password",400))
    }

    //check for user
    const user = await User.findOne({email}).select('+password')

    if(!user){
        return next(new ErrorResponse("Invalid Credentials",401)) 
    }

    //check if password matches
    const isMatch = await user.matchPassword(password)

    if(!isMatch){
        return next(new ErrorResponse("Incorrect Password",401))
    }

    sendCookieResponse(user,200,res)


}





//get token from model, also create cookie and send response.
const sendCookieResponse = (user,statusCode, res)=>{
    
    //create token
    const token = user.getSignedJwtToken()

    const options = {
        expires : new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

    res.status(statusCode).cookie('token',token, options).json({
        success: true,
        token
    })
}