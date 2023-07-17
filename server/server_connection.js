const app = require('./app.js')
const DatabaseConnection = require('./../connection/db_connection.js')

DatabaseConnection()

app.listen(process.env.PORT,()=>{
        console.log("server started");
})