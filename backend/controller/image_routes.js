
const Transaction = require('../models/transactions')
const User  = require('../models/users')
const dotenv = require('dotenv')
dotenv.config()


async function generateImage(req,res){
    try {
        const {_id} = req.user
        const {prompt,modelId} = req.body
        const user = await User.findById(_id).select("-password");
        if(!user||!prompt) return res.status(400).json({mssg:"User or prompt not found"})
        
        if(user.creditBalance <= 0 ) return res.status(400).json({mssg:"No credits left"})
     
        const apiKey = process.env.ImgGen_Key;
        const apiUrl = process.env.ImgGen_URL;

        if (!apiKey) {
            console.log("API key is not set. Please set the  environment variable.");
            return res.status(400).json({mssg:"API key is not set"});
        }
        
        const requestBody = {
            model: `${modelId || "provider-3/FLUX.1.1-pro-ultra"}`,
            prompt: `${prompt}`,
            n: 1,
            size: "1024x1024",
            // size: "1792x1024",
            style:'natural',
            quality:'hd',
            response_format: "b64_json"
        };

        console.log("Sending request to generate image...");

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
      
        const result = await response.json();
        const base64image = result?.data?.[0]?.b64_json
        if(!base64image) return res.status(500).json({mssg:"Internal server error Image not generated"})
      
        const resultImg = `data:image/png;base64,${base64image}`
        console.log('image generated successfully');
        await User.findByIdAndUpdate(_id,{creditBalance:user.creditBalance-1})
        return res.status(200).json({mssg:"Image Generated Successfully",creditBalance:user.creditBalance-1,resultimage:resultImg})


    } catch (error) {
        console.log("Error in generateImage",error.message);
        return res.status(500).json({mssg:"Internal server error in generateImage"})
    }
}

async function updateCredits(req,res){
    try {
        const {email} = req.body;
        const user  = await User.findOne({email}).select({creditBalance:1})
        if(!user) return res.status(400).json({mssg:"no user found"})
        await User.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance+100});
        return res.status(200).json({mssg:"Updated Success"})

    } catch (error) {
        console.log("error cannot update balance");
    }
}

async function stripepayment(req,res){
    try {
        const {id,_id:userID} = req.body

        if(!id||!userID) return res.status(400).json({mssg:"missing details"});

        let credits , plan , amount ,date;

        switch (id) {
            case "Basic":
                plan= "Basic"
                credits= 100
                amount = 10
                break;
            case "Advanced":
                plan= "Advanced"
                credits= 500
                amount = 50
                break;
            case "Business":
                plan= "Business"
                credits= 5000
                amount = 250
                break;
        
            default:
                return res.status(400).json({mssg:"Plan not found"})
        }

        const transactionsData = {
            userID,
            plan,
            amount,
            credits,
            payment,
            date:Date.now()
        }
        const newTransaction = await Transaction.create(transactionsData);


    } catch (error) {
        
    }
}

module.exports = {generateImage,updateCredits};