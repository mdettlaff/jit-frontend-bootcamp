import { Recipes } from "../actionTypes"

const fetchRecipesList = () => {
  return {
    type: Recipes.FETCH_RECIPES_LIST,
  }
}

const selectRecipeId = (recipeId) => {
  return {
    type: Recipes.SELECT_RECIPE_ID,
    recipeId
  }
}

const getIngredients = (recipeId) => {
  return {
    type: Recipes.GET_INGREDIENTS,
    recipeId
  }
}

export {
  fetchRecipesList,
  selectRecipeId,
  getIngredients,
}