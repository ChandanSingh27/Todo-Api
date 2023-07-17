const UserModel = require('../models/userModel.js')
const { use } = require('../routes/usersRoutes.js')
const sendCookie = require('../utils/sendCookie.js')


const registerUser = async (req,res) => {
        const {email} = req.body
        let user = await UserModel.findOne({email})

        if(user) return res.status(400).json({
                success: false,
                message: "User already exist"
        })

        user = await UserModel.create(req.body)
        sendCookie(req,res,user,"User Created Successfully",201)
        
}

const loginUser = async (req,res) => {
        const {email,password} = req.body
        let user = await UserModel.findOne({email}).select('+password')

        if(!user) return res.status(400).json({
                success: false,
                message: "Invalid email and password"
        })

        const isMatch = user.password === password

        if(!isMatch) return res.status(400).json({
                success: false,
                message: "Imvalid email and password"
        })

        sendCookie(req,res,user,`welcome back, ${user.name}`)
}

const logoutUser = async (req,res) => {
        const {token} = req.cookies

        if(!token) return res.status(400).json({
                success: false,
                message: "login first"
        })

        res.status(200).cookie("token","",{
                expire: new Date(Date.now())
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