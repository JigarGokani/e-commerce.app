const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter Your Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Your Price"],
        maxLength:[8,"Price acnnot exceeded 8 charcters"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Your Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please enter Product Stock"],
        maxLength:[4,"Stocks cannot exceeded 4 digits "],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:1
    },
    reviews:[
        {
            name:{
                type:String,
                required:true

            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }


})

module.exports = mongoose.model("Product",productSchema);