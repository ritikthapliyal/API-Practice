const Bootcamp = require('../Models/Bootcamp')

//@desc     Get single bootcamp
//@route    GET - /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req,res, next) => {
    
    try{
        const bootcamp = await Bootcamp.findById(req.params.id)
        
        if(!bootcamp){
            return res.status(400).json({sucess:false})
        }
        
        
        res.status(200).json({
            success: true,
            data : bootcamp
        })
    }
    catch(err){
        // res.status(400).json({sucess:false})
        // next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404))
        
        next(err)
    }
}


//@desc     Get all bootcamps
//@route    GET - /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req,res, next) => {
    

    // http://localhost:6000/api/v1/bootcamps?name=Devcentral+Bootcamp&jobAssistance=true
    // console.log(req.query) ---> { name: 'Devcentral Bootcamp', jobAssistance: 'true' }


    // http://localhost:6000/api/v1/bootcamps?averageCost[lte]=10000
    // console.log(req.query) ---> { averageCost: { lte: '10000' } }
    

    // let query;

    // // copy request quert(req.query)
    // let reqQuery = {...req.query}


    // //fields to exclude
    // const removeFields = ['select']


    // //loop over removeFields and delete them from reqQuery
    // removeFields.forEach(param => delete reqQuery[param])


    // //create query string
    // let queryStr = JSON.stringify(req.query)
    
    // //create operators ($gt,$gte,$lt,$lte,$in)
    // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)
    // // console.log(req.query) ---> { averageCost: { '$lte': '10000' } }

    // //finding resource
    // query = await Bootcamp.find(JSON.parse(queryStr))

    // //Select fields
    // if(req.query.select)

    try{
        res.status(200).json({
            success: true,
            data : bootcamps
        })
    
    }
    catch(err){
        res.status(400).json({sucess:false})
    }
    
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
    catch(err){
        next(err)
    }

}


//@desc     Update bootcamp
//@route    PUT - /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = async (req,res, next) => {
    
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators: true
        })
        
        // new: true means that the method should return the updated bootcamp object after it has been updated. 
        // By default, findByIdAndUpdate() returns the old bootcamp object before it was updated.
    
        // runValidators: true means that Mongoose will run the validation rules defined in the bootcamp schema before saving the 
        // updated object to the database. If any validation rule fails, the method will throw a validation error.
    
        if(!bootcamp){
            return res.status(400).json({sucess:false})
        }
    
        res.status(200).json({
            success: true,
            data : bootcamp
        })
    }
    catch(err){
        next(err)
    }
    
}


//@desc     Delete Bootcamp
//@route    DELETE - /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = async(req,res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    
        if(!bootcamp){
            return res.status(400).json({sucess:false})
        }
    
        res.status(200).json({
            success: true,
            data : {}
        })
    }
    catch(err){
        next(err)
    }
}