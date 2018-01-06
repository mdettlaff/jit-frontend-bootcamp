module.exports = function (app) {
  const recipes = require('../controllers/recipesController')

  // todoList Routes
  app.route('/recipes')
    .get(recipes.listAll)
    .post(recipes.createRecipe)

  app.route('/recipes/:recipeId')
    .get(recipes.readOne)
    .put(recipes.updateRecipe)
    .delete(recipes.deleteRecipe)
};