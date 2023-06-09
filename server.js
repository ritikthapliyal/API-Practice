const express = require('express')
const errorHandler = require('./middleware/error')
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps')
const auth = require('./routes/auth')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')

//Load env variables
dotenv.config({
    path : './config/config.env'
})

//Connect to Database
connectDB()

const app = express()

//Body Parser
app.use(express.json())


//cookie parser
app.use(cookieParser())


//mount routers
app.use('/api/v1/bootcamps',bootcamps)
app.use('/api/v1/auth',auth)

//Must be here in order to work
app.use(errorHandler)

const PORT = process.env.PORT || 6000
app.listen(PORT, console.log(`runnig on port ${PORT}, environment : ${process.env.NODE_ENV}`))



