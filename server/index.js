require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const db = require('./db.js').Recipes;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));



app.post('/ingredients', (req, res) => {
  let stats;
  console.log('this is title', req.body.title)
  axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`, {
    title: req.body.title,
    ingr: req.body.ingr
  }).then((healthStats) => {
    stats = healthStats.data;
  }).then(() => {
    db.create(
      {
        ingredients: req.body.ingr,
        calories: stats.calories,
        title: req.body.title
      }
    ).then(() => {
      res.json(stats)
    })
  })
})


app.get('/history', (req, res) => {
  let title = req.query.title;
  console.log('this is paras', req.query);
  console.log('this is title', title)
  db.findOne({title}).then((ingredients) => {
    if(ingredients === null ) {
      res.send("1");
    } else {
      res.send(ingredients)
    }
    })
})

app.listen(8080);
console.log('Listening at http://localhost:8080');
