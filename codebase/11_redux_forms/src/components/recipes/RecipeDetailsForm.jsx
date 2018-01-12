import PropTypes from "prop-types"
import React from "react"
import { Field, reduxForm } from "redux-form"

const RecipeDetailsForm = (props) => {
  return (
    <form className="col s12" onSubmit={props.handleSubmit}>
      <div className="s12">
        <strong>Preparation time (min):</strong>
        <div className="input-field inline">
          <Field name="preparationTime" component="input" type="number" />
        </div>
      </div>
      <div className="s12">
        <strong>Difficulty level:</strong>
        <div className="input-field inline">
          <Field name="difficulty" component="input" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit">
        Submit <i className="material-icons right">send</i>
      </button>
    </form>
  )
}

export default reduxForm({ form: "recipeDetailsForm" })(RecipeDetailsForm)