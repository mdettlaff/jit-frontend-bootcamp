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
  submitUpdateForRecipe: (id, data) => {
    return fetch([API_BASE, RECIPES_ENDPOINT, id].join("/"), {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify(data),
    }).then((response) => response.json())
  }
}