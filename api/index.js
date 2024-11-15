const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

app.get('/test', (req,res)=>{
  res.send('hello from backend!');
  
});

app.post('/register', async (req, res) =>{
  const {username, password} = req.body;
  const createdUser = await User.create({username,password});
  jwt.sign({userId:createdUser._id}),jwtSecret,(err,token)=>{
    if (err) throw err;
    res.cookie('token', token).status(201).json('ok');
  };
});

app.listen(4040, ()=>{
  console.log('api running on localhost:4040');
});