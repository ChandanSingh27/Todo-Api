const express = require('express')
const isAuthenticated = require('../middlewares/isAuthentication.js')
const {registerUser,loginUser,logoutUser,findUserById} = require('../controllers/usersControllers.js')
const router = express.Router()



router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/logout',logoutUser)

router.get('/my-profile', isAuthenticated ,findUserById)

router.get('/',(req,res)=>{
        res.send("hi i m  users")
})



module.exports = router