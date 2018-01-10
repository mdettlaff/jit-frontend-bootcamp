import { Recipes } from "../actionTypes"
import { recipesApi } from "api/recipes"

const fetchRecipesList = () => {
  return {
    type: Recipes.FETCH_RECIPES_LIST,
  }
}

const fetchRecipesListSuccess = (recipes) => {
  return {
    type: Recipes.FETCH_RECIPES_LIST_SUCCESS,
    recipes,
  }
}

const fetchRecipesListError = (error) => {
  return {
    type: Recipes.FETCH_RECIPES_LIST_ERROR,
    error,
  }
}

const selectRecipeId = (recipeId) => {
  return {
    type: Recipes.SELECT_RECIPE_ID,
    recipeId,
  }
}

const getIngredients = () => {
  return {
    type: Recipes.GET_INGREDIENTS,
  }
}

const getIngredientsForRecipeSuccess = (ingredients) => {
  return {
    type: Recipes.GET_INGREDIENTS_SUCCESS,
    ingredients,
  }
}

const getIngredientsForRecipeError = (error) => {
  return {
    type: Recipes.GET_INGREDIENTS_ERROR,
    error,
  }
}

const fetchRecipesListAsync = () => {
  return (dispatch) => {
    dispatch(fetchRecipesList())

    return recipesApi.fetchAllRecipes().then(
      (data) => dispatch(fetchRecipesListSuccess(data)),
      (error) => dispatch(fetchRecipesListError(error))
    )
  }
}

const getIngredientsForRecipeAsync = (recipeId) => {
  return (dispatch) => {
    dispatch(getIngredients())

    return recipesApi.getIngredientsForRecipe(recipeId).then(
      (data) => dispatch(getIngredientsForRecipeSuccess(data.ingredients)),
      (error) => dispatch(getIngredientsForRecipeError(error))
    )
  }
}

export {
  fetchRecipesListAsync,
  selectRecipeId,
  getIngredientsForRecipeAsync,
}