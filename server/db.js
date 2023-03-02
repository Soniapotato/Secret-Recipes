const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

let recipes = mongoose.Schema ({
  ingredients: Array,
  calories: Number,
  title: String,
})

const Recipes = mongoose.model('Recipes', recipes);

module.exports.Recipes = Recipes;