const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
    
    // log to console for developer
    // console.log(err.stack)
    console.log(err)
    
    let error = {...err}
    err.message = err.message


    //Mongoose bad ObjectId
    if(err.name === 'CastError'){
        const message = `Bootcamp not found with id of ${err.value}`    
        error = new ErrorResponse(message,404)
    }

    //Mongoose duplicate key
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message,400)
    }
    

    //Mongoose duplicate key
    if(err.code === 11000){
        const message = "Duplicate field value entered"
        error = new ErrorResponse(message,400)
    }


    res.status(error.statusCode || 500)
       .json({
        success: false,
        error: error.message || 'server error'
    })
}

module.exports = errorHandler