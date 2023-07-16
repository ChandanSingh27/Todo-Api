const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv/config')
const app = express()

//middlewares code here
app.use(bodyParser.json())
app.use(cookieParser())




//router route code here

module.exports = app