const express = require("express")
const errorHandler = require("./middleware/errorMiddleware")
const colors = require("colors")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8000

// mongoDB connection
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("hello")
})

app.use("/api/users", require("./routes/userRoutes"))

// declaration of the custom error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
