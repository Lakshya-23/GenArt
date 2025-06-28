const User = require('../models/users')
const bcrypt  = require('bcrypt')
const {createToken} = require('../services/auth_token')

async function signup(req,res){
    const {name,email,password} = req.body;
    try {

        if(!email||!name||!password) 
            return res.status(400).json({mssg:"All fields are required"})
        else if(password.length<6) 
            return res.status(400).json({mssg:"Invalid Password Length"})

        const dupilicateUser  = await User.findOne({email});
        if(dupilicateUser) return res.status(400).json({mssg:"user already exist"})

        const salt  = await bcrypt.genSalt(10);
        const hassedPass = await bcrypt.hash(password,salt)

        const newUsers = await User.create({
            name,
            email,
            password:hassedPass
        })
        
        if(newUsers){
            createToken(newUsers._id,email,res)
            return res.status(201).json({
                _id:newUsers._id,
                name:newUsers.name,
                creditBalance:newUsers.creditBalance
            })
        }else{
            return res.status(400).json({mssg:"Invalid User"})
        }
        
    } catch (error) {
        console.log("Error in SignUp",error.message);
        return res.status(500).json({mssg:"Internal Server Error in SignUp"})

    }
}

async function signin(req,res){
    const {email,password} = req.body;
    try {
        
        if(!email||!password) return res.status(400).json({mssg:"All fields are required"})
        else if(password.length<6) return res.status(400).json({mssg:"Invalid Password Length"})

        const user  = await User.findOne({email})
        if(!user) return res.status(400).json({mssg:"User doesn't exist"})

        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            createToken(user._id,email,res);
            return res.status(200).json({_id:user._id,name:user.name,creditBalance:user.creditBalance})
        }else{
            return res.status(400).json({mssg:"Invalid Credentials"})
        }

    } catch (error) {
        console.log("Error in SignIn",error.message);
        return res.status(500).json({mssg:'Error in SignIn'})
    }
}

async function userCredits(req,res){
    try {
        const {name,creditBalance} = req.user
        return res.status(200).json({user:{name:name},credits:creditBalance})
        
    } catch (error) {
        console.log("Error in userCredits",error.message);
        return res.status(500).json({mssg:'Error in userCredits'})
    }
}

function logout(req,res){
    try {
        res.clearCookie('uid')
        return res.status(200).json({mssg:"Logout Successful"})
    } catch (error) {
        console.log('Error in logout',error.message);
        return res.status(500).json({mssg:'Error in logout'})
    }
}

function checkAuthUser(req,res){
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in CheckAuth",error.message);
        return res.status(500).json({mssg:'Error in CheckAuth'})
    }
}

module.exports={
    signin,
    signup,
    userCredits,
    checkAuthUser,
    logout
}