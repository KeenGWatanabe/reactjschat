const express = require('express');

const app = express();

app.get('/test', ()=>{
  res.json('test ok');
});

app.listen(4000);