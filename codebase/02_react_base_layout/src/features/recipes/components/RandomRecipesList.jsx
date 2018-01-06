import React from "react"

import RecipeCard from "./RecipeCard"

export default function RandomRecipesList() {
  return (
    <fieldset className="z-depth-1 yellow lighten-4">
      <h4>Random recipes</h4>
      <div className="row">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </fieldset>
  )
}