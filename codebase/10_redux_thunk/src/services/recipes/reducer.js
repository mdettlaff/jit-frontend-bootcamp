import { Recipes } from "../actionTypes"

const initialState = {
  recipesList: [],
  recipesRequestInProgress: false,
  ingredientsRequestInProgress: false,
  requestError: undefined,
  selectedRecipeId: undefined,
  selectedIngredients: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Recipes.FETCH_RECIPES_LIST:
      return { ...state, recipesRequestInProgress: true, requestError: undefined, recipesList: [] }
    case Recipes.FETCH_RECIPES_LIST_SUCCESS:
      return { ...state, recipesRequestInProgress: false, recipesList: action.recipes }
    case Recipes.FETCH_RECIPES_LIST_ERROR:
      return { ...state, recipesRequestInProgress: false, requestError: action.error }
    case Recipes.SELECT_RECIPE_ID:
      return { ...state, selectedRecipeId: action.recipeId }
    case Recipes.GET_INGREDIENTS:
      return { ...state, ingredientsRequestInProgress: true, requestError: undefined, selectedIngredients: [] }
    case Recipes.GET_INGREDIENTS_SUCCESS:
      return { ...state, ingredientsRequestInProgress: false, selectedIngredients: action.ingredients }
    case Recipes.GET_INGREDIENTS_ERROR:
      return { ...state, ingredientsRequestInProgress: false, requestError: action.error }
  }

  return state
}

export default reducer
