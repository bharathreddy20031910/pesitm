

const verifyToken = (req,res,next)=>{
    const token = req.query.token || req.headers.token
    if (!token) {
        return res.status(400).json("No Token Provided")
    }
if (token !== "12345") {
    res.status(401).json("Please Provide Valid token")
}
next()
}

const errorHandler = (err,req,res,next)=>{
res.status(err.status || 500).json({
    sucess:"false",
    message:"Error Occured"
})
}

module.exports ={verifyToken, errorHandler}