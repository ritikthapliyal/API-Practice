const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps')
const connectDB = require('./config/db')

//Load env variables
dotenv.config({
    path : './config/config.env'
})

//Connect to Database
connectDB()

const app = express()

//Body Parser
app.use(express.json())



//mount routers
app.use('/api/v1/bootcamps',bootcamps)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`runnig on port ${PORT}, environment : ${process.env.NODE_ENV}`))



