const app = require("./app")
const dotenv = require("dotenv")
const dbConnect = require("./config/database")

dotenv.config({path:"backend/config/config.env"})


dbConnect();

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`)
})