import React from "react"
import PropTypes from "prop-types"

import RecipesContainer from "../recipes/RecipesContainer"

export default class Content extends React.Component {
  constructor(props) {
    super(props)

    console.info("Content MOUNT: constructor(), props:", props)
  }

  componentWillMount() {
    console.info("Content MOUNT: componentWillMount()")
  }

  componentDidMount() {
    console.info("Content MOUNT: componentDidMount()")
  }

  componentWillReceiveProps(nextProps) {
    console.info("Content UPDATE: componentWillReceiveProps(), nextProps:", nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Content UPDATE: shouldComponentUpdate(), nextProps:", nextProps,
      "nextState:", nextState)

    return this.props.activeTabId !== nextProps.activeTabId
  }

  componentWillUpdate(nextProps, nextState) {
    console.info("Content UPDATE: componentWillUpdate(), nextProps:", nextProps,
      "nextState:", nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("Content UPDATE: componentDidUpdate(), prevProps:", prevProps,
      "prevState:", prevState)
  }

  getContentForTab(activeTabId) {
    switch (activeTabId) {
      default:
      case "Recipes": {
        return <RecipesContainer />
      }
      case "Shopping list": {
        return <h5>Shopping list will be here soon...</h5>
      }
    }
  }

  render() {
    console.info("Content render()")
    const { activeTabId } = this.props

    return (
      <div className="container content">
        {this.getContentForTab(activeTabId)}
      </div>
    )
  }
}

Content.propTypes = {
  activeTabId: PropTypes.string.isRequired,
}