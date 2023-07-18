const UserModel = require('../models/userModel.js')
const {ErrorHandler} = require('../middlewares/error.js')
const sendCookie = require('../utils/sendCookie.js')


const registerUser = async (req,res,next) => {
        const {email} = req.body
        let user = await UserModel.findOne({email})
        if(user) return next(new ErrorHandler("User already exist",404))
        user = await UserModel.create(req.body)
        sendCookie(req,res,user,"User Created Successfully",201)
        
}

const loginUser = async (req,res,next) => {
        const {email,password} = req.body
        let user = await UserModel.findOne({email}).select('+password')
        if(!user) return next(new ErrorHandler("Invalid email and password",400))
        const isMatch = user.password === password
        if(!isMatch) return next(new ErrorHandler("Invalid email and password",400))
        sendCookie(req,res,user,`welcome back, ${user.name}`)
}

const logoutUser = async (req,res) => {
        const {token} = req.cookies
        if(!token) return next(new ErrorHandler("login first",400))
        res.status(200).cookie("token","",{
                expires: new Date(Date.now())
        }).json({
                success: true,
                message: "Logout Successfully"
        })
}

const findUserById = (req,res) => {
        res.status(200).json({
                success: true,
                details: req.user
        })
}

module.exports = {registerUser,loginUser,logoutUser,findUserById}