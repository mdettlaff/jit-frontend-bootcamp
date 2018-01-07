import React from "react"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"

export default RecipesContainer = (props) => {
  return (
    <div className="wrapper">
      <RandomRecipesList />
      <RecipesTable />
    </div>
  )
}