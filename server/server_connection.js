const app = require('./app.js')
const DatabaseConnection = require('./../connection/db_connection.js')

DatabaseConnection()

app.listen(5050,()=>{
        console.log("server started");
})