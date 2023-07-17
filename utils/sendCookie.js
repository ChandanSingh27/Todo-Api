const jwt = require('jsonwebtoken')
const sendCookie = (req,res,user,message,statusCode=200) => {
        const token = jwt.sign({_id: user._id},process.env.PRIVATE_KEY_JWT)
        res.status(statusCode).cookie(
                "token", token,
                {
                httponly: true,
                maxAge: 10*60*1000
        }).json({
                success: true,
                message: message
        })
}

module.exports = sendCookie