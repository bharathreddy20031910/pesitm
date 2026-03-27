const User = require('../models/UserSchema')
const {verifyToken} = require('../Middleware/authmiddleware')


const create =  async(req , res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user) 
    } catch (error) {
        res.status(400).json(error)
    }
}

const get = async (req,res)=>{
try {
    const user = await User.find()
     res.status(200).json(user) 
} catch (error) {
     res.status(400).json(error)
}
}

const put = async(req,res)=>{
try {
    const user = await User.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(user) 
} catch (error) {
    res.status(400).json(error) 
}
}

const delete1 = async(req,res)=>{
try {
    const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
} catch (error) {
    res.status(400).json(error)
}
}

const getOne = async (req,res)=>{
try {
    const user = await User.findById(req.params.id)
     res.status(200).json(user) 
} catch (error) {
     res.status(400).json(error)
}
}

module.exports ={create ,get ,put,delete1, getOne}