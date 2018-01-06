const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: "Please enter the name of the meal"
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    default: "http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg",
  }
})

module.exports = mongoose.model("Recipes", RecipeSchema)