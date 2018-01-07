import React from "react"

import RecipesTableEntry from "./RecipesTableEntry"

export default function RecipesTable() {
  return (
    <fieldset className="row z-depth-1 yellow lighten-4">
      <h4>Recipes list</h4>
      <table class="striped">
        <thead>
          <tr>
            <th>Meal name</th>
            <th>Preparation time</th>
            <th>Difficulty level</th>
          </tr>
        </thead>

        <tbody>
          <RecipesTableEntry />
          <RecipesTableEntry />
          <RecipesTableEntry />
          <RecipesTableEntry />
          <RecipesTableEntry />
          <RecipesTableEntry />
        </tbody>
      </table>
    </fieldset>
  )
}