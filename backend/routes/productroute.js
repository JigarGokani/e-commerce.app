const express = require("express")
const { productdata } = require("../controllers/productController")


const router = express.Router()

router.route("/product").get(productdata)

module.exports = router