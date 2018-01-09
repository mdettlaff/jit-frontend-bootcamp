import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"
import SingleRecipe from "./SingleRecipe"
import { fetchRecipesList, selectRecipeId } from "services/recipes/actions"

const getNRandom = (data, n) => {
  if (!data) {
    return []
  }

  return data.slice().sort(() => 0.5 - Math.random()).slice(0, n)
}

class RecipesContainer extends React.PureComponent {
  getInternals() {
    const { recipesList, selectedRecipeId } = this.props

    if (selectedRecipeId !== undefined) {
      const recipe = recipesList.find((recipe) => recipe.id === selectedRecipeId)

      if (recipe) {
        return <SingleRecipe recipe={recipe} onBackButtonClick={() => this.props.selectRecipeId(undefined)} />
      }
    }

    return [
      <RandomRecipesList randomRecipes={getNRandom(recipesList, 3)} key="randomRecipes" />,
      <RecipesTable recipesList={recipesList} onRecipeSelected={this.props.selectRecipeId} key="recipesList" />,
    ]
  }

  componentDidMount() {
    this.props.fetchRecipesList()
  }

  render() {
    return (
      <div className="wrapper">
        {this.getInternals()}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    recipesList: store.recipesState.recipesList,
    selectedRecipeId: store.recipesState.selectedRecipeId,
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
  selectedRecipeId: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)