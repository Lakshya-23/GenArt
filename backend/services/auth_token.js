
const jwt = require('jsonwebtoken')

function createToken(id,email,res){
    const payload = {
        _id:id,
        email
    }

    const token  = jwt.sign(payload,process.env.JSON_SECRET,{
        expiresIn:'7d',
    })

    res.cookie('uid',token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,          //prevent XSS cross site scripting attacks
        sameSite:process.env.NODE_ENV === "production" ? "None" : "Lax",      //CSRF attacks cross-site request forgery attack
        secure: process.env.NODE_ENV === 'production',
    })

    return token 
}

module.exports={
    createToken
}