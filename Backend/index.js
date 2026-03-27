const express = require('express')
const mongoose = require('mongoose')
const { errorHandler} = require('./Middleware/authmiddleware')
const cors = require('cors')
const route = require('./Routes/routes')
const app = express()
require('dotenv').config()
app.use(express.json())


const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:4200' ], // Client URL
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error)})

app.use(route)
app.use(errorHandler)

app.listen(process.env.PORT,()=>{
console.log("Server Is Connected")
})
