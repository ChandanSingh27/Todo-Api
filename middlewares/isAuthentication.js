const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

const isAuthenticated = async (req,res,next) => {
        const {token} = req.cookies

        if(!token) return res.status(400).json({
                success: false,
                message: "login first"
        })

        const id = jwt.verify(token,process.env.PRIVATE_KEY_JWT)
        req.user = await UserModel.findById(id)
        next()

}

module.exports = isAuthenticated