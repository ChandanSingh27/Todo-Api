const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouters = require('../routes/usersRoutes.js') 
require('dotenv/config')
const app = express()
const apiPrefixString = process.env.API_VERSION
//middlewares code here
app.use(bodyParser.json())
app.use(cookieParser())




//router route code here
app.use(`${apiPrefixString}/users`,userRouters)

app.get(`${apiPrefixString}`,(req,res)=>{
        res.send("hi its working")
})

module.exports = app