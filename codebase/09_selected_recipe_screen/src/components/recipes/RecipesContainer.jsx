import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"
import { fetchRecipesList, selectRecipeId } from "services/recipes/actions"

const getNRandom = (data, n) => {
  if (!data) {
    return []
  }

  return data.slice().sort(() => 0.5 - Math.random()).slice(0, n)
}

class RecipesContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRecipesList()
  }

  render() {
    const { recipesList } = this.props

    return (
      <div className="wrapper">
        <RandomRecipesList randomRecipes={getNRandom(recipesList, 3)} />
        <RecipesTable recipesList={recipesList} onRecipeSelected={this.props.selectRecipeId} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    recipesList: store.recipesState.recipesList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipesList: fetchRecipesList,
    selectRecipeId: selectRecipeId,
  }, dispatch)
}

RecipesContainer.propTypes = {
  recipesList: PropTypes.array.isRequired,
  fetchRecipesList: PropTypes.func.isRequired,
  selectRecipeId: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)