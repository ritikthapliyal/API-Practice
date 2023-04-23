const express = require('express')
const dotenv = require('dotenv')

//Load env variables
dotenv.config({
    path : './config/config.env'
})


const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`runnig on port ${PORT}, environment : ${process.env.NODE_ENV}`))


