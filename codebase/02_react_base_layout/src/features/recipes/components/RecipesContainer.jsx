import React from "react"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"

export default function RecipesContainer() {
  return (
    <div className="wrapper">
      <RandomRecipesList />
      <RecipesTable />
    </div>
  )
}