const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouters = require('../routes/usersRoutes.js') 
const taskRouter = require('../routes/tasksRoutes.js')
const {errorMiddleware} = require('../middlewares/error.js')
require('dotenv/config')
const app = express()
const apiPrefixString = process.env.API_VERSION
//middlewares code here
app.use(bodyParser.json())
app.use(cookieParser())




//router route code here
app.use(`${apiPrefixString}/users`,userRouters)
app.use(`${apiPrefixString}/tasks`,taskRouter)

app.get(`${apiPrefixString}`,(req,res)=>{
        res.send("hi its working")
})


//error handler or error middleware this line always write last of middleware use
app.use(errorMiddleware)
module.exports = app
