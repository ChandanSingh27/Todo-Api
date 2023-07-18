const TaskModel = require("../models/taskModel")

const createTask = async (req,res,next) => {
        try {
        const {title,description} = req.body
        const userid = req.user._id
        await TaskModel.create({title,description,userid})
        res.status(201).json({
                success: true,
                message: "Task Created Successfully"
        })
        } catch (error) {
                console.log("error : "+ error)
                res.end()
        }
}

const getAllTask = async(req,res) => {
        const tasks = await TaskModel.find({userid:req.user._id})
        res.status(200).json({
                success:true,
                tasks : tasks
        })
}

const searchTask = async (req,res) => {
        const {key} = req.query
        const searchTerm = new RegExp(key, 'i');
        const searchData = await TaskModel.find({$and:[{userid:req.user._id},{title: searchTerm}]})
        res.status(200).json({
                success: true,
                searchData: searchData
        })
}

module.exports = {createTask,getAllTask,searchTask}