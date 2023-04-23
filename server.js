const express = require('express')
const dotenv = require('dotenv')

//Load env variables
dotenv.config({
    path : './config/config.env'
})


const app = express()

app.get('/',(req,res)=>{

    res.status(400).json({
        success: false,
        msg : "bad request"
    })

})

app.get('/api/v1/bootcamps',(req,res)=>{

    res.status(200).json({
        success: true,
        msg : "Show all bootcamps"
    })

})

app.get('/api/v1/bootcamps/:id',(req,res)=>{

    res.status(200).json({
        success: true,
        msg : `show bootcamp ${req.params.id}`
    })

})

app.post('/api/v1/bootcamps',(req,res)=>{

    res.status(200).json({
        success: true,
        msg : "Create new bootcamp"
    })

})

app.put('/api/v1/bootcamps/:id',(req,res)=>{

    res.status(200).json({
        success: true,
        msg : `update bootcamp ${req.params.id}`
    })

})

app.delete('/api/v1/bootcamps/:id',(req,res)=>{

    res.status(200).json({
        success: true,
        msg : `delete bootcamp ${req.params.id}`
    })

})



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`runnig on port ${PORT}, environment : ${process.env.NODE_ENV}`))



