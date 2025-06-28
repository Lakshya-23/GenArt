const express = require('express');
const dotenv = require('dotenv')
const {ConnectDB} = require('./services/connection')
const authRoutes = require('./routes/auth_routes')
const imageRoutes = require('./routes/image_routes')
const cookieParser = require('cookie-parser')
const cors =require('cors')
const app = express();


dotenv.config();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.get('/',(req,res)=>{
    return res.send('Hi from server!');
})
app.use('/api/auth',authRoutes)
app.use('/api/image', imageRoutes)

app.listen(PORT,()=>{
    console.log('Server running on Port',PORT);
    ConnectDB()
})