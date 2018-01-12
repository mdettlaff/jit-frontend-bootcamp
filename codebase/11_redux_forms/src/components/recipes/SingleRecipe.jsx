import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import RecipeDetailsForm from "./RecipeDetailsForm"
import Preloader from "components/common/Preloader"
import { getIngredientsForRecipeAsync, submitUpdateForRecipeAsync } from "services/recipes/actions"
import { recipesApi } from "api/recipes"

class SingleRecipe extends React.PureComponent {
  componentDidMount() {
    this.props.getIngredients(this.props.recipe.id)
  }

  render() {
    const { recipe, onBackButtonClick, requestInProgress } = this.props

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <h4><a onClick={onBackButtonClick} href="#"><i className="material-icons">arrow_back</i></a> {recipe.name}</h4>
        <div className="row">
          <div className="col m5 s12">
            <img src={recipe.imageUrl} alt={recipe.name} className="responsive-img" />
            <RecipeDetailsForm initialValues={{
              preparationTime: recipe.preparationTime,
              difficulty: recipe.difficulty
            }}
            onSubmit={(data) => this.props.onSubmitClick(recipe.id, data)}/>
          </div>
          <div className="col m7 s12">
            <p>{recipe.description}</p>
            <p><strong>Ingredients list:</strong></p>
            <fieldset className="z-depth-1 yellow lighten-5">
              <ul>
                {requestInProgress
                  ? <Preloader />
                  : this.props.ingredientsList.map((ing) =>
                    <li key={ing.name}><p>{ing.amount} <strong>{ing.name}</strong></p></li>
                  )
                }
              </ul>
            </fieldset>
          </div>
        </div>
      </fieldset>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    ingredientsList: store.recipesState.selectedIngredients,
    requestInProgress: store.recipesState.ingredientsRequestInProgress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getIngredients: getIngredientsForRecipeAsync,
    onSubmitClick: submitUpdateForRecipeAsync,
  }, dispatch)
}

SingleRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
  ingredientsList: PropTypes.array.isRequired,
  getIngredients: PropTypes.func.isRequired,
  requestInProgress: PropTypes.bool.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe)