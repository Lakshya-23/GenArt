const jwt = require('jsonwebtoken')
const User  = require('../models/users')

async function protectRoute(req,res,next){
    try {
        const token = req.cookies?.uid
        if(!token){
            return res.status(401).json({mssg:'Not authorized'})
        }
        const decoded  = jwt.verify(token,process.env.JSON_SECRET)

        if(!decoded) return res.status(401).json({mssg:"Invalid Token "})

        const user = await User.findById(decoded._id).select({name:1,creditBalance:1});       //this will return name , creditBalance and _id(by default) only in return 
                                                                                            // 1-> include 0-> exclude
                                                                                            //doing same thing in userCredits function
        if(!user) return res.status(404).json({mssg:"User not Found"})

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute",error.message);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = protectRoute;