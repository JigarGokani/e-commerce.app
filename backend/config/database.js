const mongoose = require("mongoose")

const dbConnect=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true

    }).then((data)=>{
    console.log(`MongoDB is connected at host ${data.connection.host}`)
    })
}

module.exports = dbConnect;
