const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

dotenv.config();
mongoose.connect(process.env.MONGO_URL); //const mongoUrl = 'mongodb+srv://mbs:<password>.yyt41.mongodb.net/?retryWrites=true&w=majority&appName=Chat'
jwtSecret = process.env.JWT_SECRET; //JWT_SECRET="ASDFASDSFASFSAFASDF"

const app = express();

app.get('/test', (req,res)=>{
  res.json('test ok');
  
});

app.post('/register', async (req, res) =>{
  const {username, password} = req.body;
  const createdUser = await User.create({username,password});
  jwt.sign({userID:createdUser._id});
});

app.listen(4040);