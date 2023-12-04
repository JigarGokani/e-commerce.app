const express = require("express")
const app = express();

app.use(express.json())

// middleware
const errorMiddleware = require("./middleware/error")
const product = require("./routes/productroute")

app.use("/api/v1",product);

app.use(errorMiddleware);

module.exports = app