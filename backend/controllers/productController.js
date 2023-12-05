const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
// importing try/catch middlware
const CatchAsyncErrors = require("../middleware/CatchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures")


// Create Product --ADMIN
exports.createProduct = CatchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product,
        message:"Product Created Successfully!"
    })
});


// Get all products
exports.productData = CatchAsyncErrors(async(req,res)=>{

    const apiFeature = new ApiFeatures(Product.find(),req.query).search();

    const products = await apiFeature.query;

    res.status(201).json({
        success:true,
        products,
        message:"All Prouducts fetched successfully!"
    })
});


// Update Product --ADMIN

exports.updateProduct = CatchAsyncErrors(async(req,res,next) =>{
    let product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product not found",404))
        }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json({
        success:true,
        product,
        message:"Product Update Successfully!"
    })

})

// Get Product Details
exports.getProductDetails = CatchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id)

    if(!product){
       return next(new ErrorHandler("Product not found",404))
        }
    
        res.status(200).json({
            success:true,
            product,
            message:"Product data fetched!"
    
        })
});

// Delete Product 

exports.deleteProduct = CatchAsyncErrors(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product not found",404))
    }

    await product.deleteOne()
    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully!"

    })

});