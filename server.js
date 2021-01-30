const { json } = require("express")
const express=require("express")
const app=express()
const cors =require("cors")
//2-connect database
const connectDB=require("./config/connectDB")
connectDB()
//3-middleware
app.use(express.json())
app.use(cors())
//4- routes
app.use("/contacts",require("./routes/contact"))
//1-Create port
const port =process.env.Port || 5000
app.listen(port, error=>
    error ? console.log("error") : console.log(`Serveur is running on port ${port}`))