import "whatwg-fetch"

const API_BASE = "https://5a53282177e1d20012fa067d.mockapi.io/api/v1"
const RECIPES_ENDPOINT = "recipes"
const INGREDIENTS_ENDPOINT = "ingredients"

export const recipesApi = {
  fetchAllRecipes: () => {
    return fetch([API_BASE, RECIPES_ENDPOINT].join("/")).then((response) => response.json())
  },
  getIngredientsForRecipe: (id) => {
    return fetch([API_BASE, INGREDIENTS_ENDPOINT, id].join("/")).then((response) => response.json())
  },
}