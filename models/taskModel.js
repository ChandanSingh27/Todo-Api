const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
        title: {
                type:String,
        },
        description: String,
        userid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
        },
        createdAt: {
                type: Date,
                default: Date.now,
        }
})

const TaskModel = mongoose.model('Task',TaskSchema)

module.exports = TaskModel 