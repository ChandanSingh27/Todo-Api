const mongoose = require('mongoose')

const DatabaseConnection = () => {
        mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
                console.log("Database connected successfully")
        }).catch((err) => {
                console.log(`Database error : ${err}`)
        })
}

module.exports = DatabaseConnection