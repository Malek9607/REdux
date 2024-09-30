

//require express 
const express=require("express")
const connect = require("./config/connectDB")
//create instance
const app=express()
//middleware
app.use(express.json())

const cors=require("cors"); 
const corsOptions ={ origin:'*', credentials:true, //access-control-allow-credentials:true
 optionSuccessStatus:200, } 
 app.use(cors(corsOptions))

require('dotenv').config()
//connect to DB
connect()

app.listen(process.env.PORT,(error)=>{
    error?console.log(error):console.log(`server is running on PORT ${process.env.PORT}`)
})

app.use("/api/user",require("./Routes/user"))