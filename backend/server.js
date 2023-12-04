const app = require("./app")
const dotenv = require("dotenv")
const dbConnect = require("./config/database")

// handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting Down the Server due to Uncaught exception `);
    process.exit(1);

    
})

dotenv.config({path:"backend/config/config.env"})


dbConnect();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`)
})


// Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the Server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    })
})