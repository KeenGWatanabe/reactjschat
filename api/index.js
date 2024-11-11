const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL);
//const mongoUrl = 'mongodb+srv://mbs:<password>.yyt41.mongodb.net/?retryWrites=true&w=majority&appName=Chat'

const app = express();

app.get('/test', (req,res)=>{
  res.json('test ok');
  console.log(process.env.MONGO_URL);
});

app.post('/register', (req, res) =>{

});

app.listen(4040);