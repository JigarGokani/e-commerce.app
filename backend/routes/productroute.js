const express = require("express")
const { productData,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController")


const router = express.Router()

router.route("/products").get(productData)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)



module.exports = router