const mongoose = require("mongoose"),
  Recipe = mongoose.model("Recipes")

exports.listAll = function (req, res) {
  Recipe.find({}, function (err, recipe) {
    if (err)
      res.send(err)
    res.json(recipe)
  })
}

exports.createRecipe = function (req, res) {
  const newRecipe = new Recipe(req.body);
  newRecipe.save(function (err, recipe) {
    if (err)
      res.send(err)
    res.json(recipe)
  })
}

exports.readOne = function (req, res) {
  Recipe.findById(req.params.recipeId, function (err, recipe) {
    if (err)
      res.send(err)
    res.json(recipe)
  })
}

exports.updateRecipe = function (req, res) {
  Recipe.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true }, function (err, recipe) {
    if (err)
      res.send(err)
    res.json(recipe)
  })
}

exports.deleteRecipe = function (req, res) {
  Recipe.remove({
    _id: req.params.recipeId
  }, function (err, recipe) {
    if (err)
      res.send(err)
    res.json({ message: 'Recipe successfully deleted' })
  })
}