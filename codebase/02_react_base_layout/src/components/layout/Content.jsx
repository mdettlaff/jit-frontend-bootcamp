import React from "react"
import PropTypes from "prop-types"

import RecipesContainer from "../recipes/RecipesContainer"

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container content">
        {
          this.props.currentlyActiveDashboard === "Recipes"
            ? <RecipesContainer />
            : <p>site under construction</p>
        }
      </div>
    )
  }
}

Content.propTypes = {
  currentlyActiveDashboard: PropTypes.oneOf(["Recipes", "About"]).isRequired
}

export default Content