import React from "react"
import PropTypes from "prop-types"

import RecipesContainer from "../recipes/RecipesContainer"
import ColorPicker from "../colorpicker/ColorPicker"

export default class Content extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      contentStyle: {backgroundColor: "#fff59d"}
    }
  }

  setBackgroundColor(color) {
    this.setState({
      backgroundColor: color
    })
  }

  getContentForTab(activeTabId) {
    switch (activeTabId) {
      default:
      case "Recipes": {
        return <RecipesContainer />
      }
      case "Color picker": {
        return <ColorPicker />
      }
    }
  }

  render() {
    const { activeTabId } = this.props

    return (
      <div className="container content" style={ {backgroundColor: "blue"} }>
        {this.getContentForTab(activeTabId)}
      </div>
    )
  }
}

Content.propTypes = {
  activeTabId: PropTypes.string.isRequired,
}