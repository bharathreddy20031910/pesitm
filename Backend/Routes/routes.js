const route = require('express').Router()
const {create,get , put,delete1, getOne} = require('../controllers/crudcontroller')
const {verifyToken} = require('../Middleware/authmiddleware')
route.post("/user",create)

route.get("/user",get)

route.get("/user/:id", getOne)

route.put("/user/:id", put)

route.delete("/user/:id",delete1)

module.exports= route