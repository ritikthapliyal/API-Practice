const Bootcamp = require('../Models/Bootcamp')


//@desc     Get all bootcamps
//@route    GET - /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req,res, next) => {
    res.status(200).json({
        success: true,
        msg : "Show all bootcamps"
    })
}


//@desc     Get single bootcamp
//@route    GET - /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req,res, next) => {
    res.status(200).json({
        success: true,
        msg : `show bootcamp ${req.params.id}`
    })
}


//@desc     Create a bootcamp
//@route    POST - /api/v1/bootcamps
//@access   Private
exports.createBootcamp = async (req,res, next) => {

    // console.log(req.body)
    try{   
        const bootcamp = await Bootcamp.create(req.body)

        res.status(201).json({
            success: true,
            data : bootcamp
        })
    }
    catch(error){
        res.status(400).json({sucess:false})
    }

}


//@desc     Update bootcamp
//@route    PUT - /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req,res, next) => {
    res.status(200).json({
        success: true,
        msg : `update bootcamp ${req.params.id}`
    })
}


//@desc     Delete Bootcamp
//@route    DELETE - /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req,res, next) => {
    res.status(200).json({
        success: true,
        msg : `delete bootcamp ${req.params.id}`
    })
}