const express = require('express')
const {createTask,getAllTask,searchTask} = require('../controllers/tasksControllers.js')
const isAuthenticated = require('../middlewares/isAuthentication.js')
const router = express.Router()

router.post('/new-task',isAuthenticated,createTask)
router.get('/mytask',isAuthenticated,getAllTask)
router.get('/search',isAuthenticated,searchTask)

module.exports = router