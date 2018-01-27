import React from "react"

class RecipeCard extends React.Component {
  render() {
    return (
      <div className="col m12 l4">
        <div className="card medium yellow lighten-5">
          <div className="card-image">
            <img src={this.props.imageUrl} />
            <span className="card-title">{this.props.title}</span>
          </div>
          <div className="card-content">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

/*
const RecipeCard = (props) => {
  return (
  )
}
*/

export default RecipeCard
