import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { getIngredients } from "services/recipes/actions"

class SingleRecipe extends React.PureComponent {
  componentDidMount() {
    this.props.getIngredients(this.props.recipe.id)
  }

  render() {
    const { recipe, onBackButtonClick } = this.props

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <h4><a onClick={onBackButtonClick} href="#"><i className="material-icons">arrow_back</i></a> {recipe.name}</h4>
        <div className="row">
          <div className="col m5 s12">
            <img src={recipe.imageUrl} alt={recipe.name} className="responsive-img" />
            <p><strong>Preparation time:</strong> {recipe.preparationTime}</p>
            <p><strong>Difficulty level:</strong> {recipe.difficulty}</p>
          </div>
          <div className="col m7 s12">
            <p>{recipe.description}</p>
            <p><strong>Ingredients list:</strong></p>
            <fieldset className="z-depth-1 yellow lighten-5">
              <ul>
                {this.props.ingredientsList.map((ing) =>
                  <li key={ing.name}><p>{ing.amount} <strong>{ing.name}</strong></p></li>
                )}
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getIngredients: getIngredients }, dispatch)
}

SingleRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
  ingredientsList: PropTypes.array.isRequired,
  getIngredients: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe)