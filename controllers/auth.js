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

    const token = user.getSignedJwtToken()


    res.status(200).json({
        success: true,
        token
    })
}


//@desc     login user
//@route    POST - /api/v1/auth/login
//@access   Public
exports.login = async (req,res, next) => {

    const {name,email,password,role} = req.body


    //validate email and password
    if(!email || !password){
        return next(new ErrorResponse("Please provide an Email and Password",400))
    }

    //check for user
    const user = await User.findone({email}).select('password')

    if(!user){
        return next(new ErrorResponse("Invalid Credentials",401)) 
    }


    const token = user.getSignedJwtToken()


    res.status(200).json({
        success: true,
        token
    })
}
