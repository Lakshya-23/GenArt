const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

async function ConnectDB(){
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log('Connection Failed');
        console.log(error);
    }
}

module.exports={
    ConnectDB,
}