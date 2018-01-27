import React from "react"
import PropTypes from "prop-types"

import RecipeCard from "./RecipeCard"

const RandomRecipesList = (props) => {
  return (
    <fieldset className="row z-depth-1 yellow lighten-4">
      <h4>Random recipes</h4>
      <div className="row">
        <RecipeCard title="Burg 1" description="something something" imageUrl="http://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1.jpg" />
        <RecipeCard title="Pizza" description="something something 2" imageUrl="http://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1.jpg" />
        <RecipeCard title="Schaboschchaque" description="5432" imageUrl="http://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1.jpg" />
      </div>
    </fieldset>
  )
}

RecipeCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
export default RandomRecipesList