require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));



app.post('/ingredients', (req, res) => {
  console.log('this is req.body', req.body)
  axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`, {
    title: req.body.title,
    ingr: req.body.ingr
  }).then((healthStats) => {
    res.json(healthStats.data)
  })
})

app.listen(8080);
console.log('Listening at http://localhost:8080');
