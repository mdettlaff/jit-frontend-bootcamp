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

export {
  fetchRecipesList,
  selectRecipeId,
}