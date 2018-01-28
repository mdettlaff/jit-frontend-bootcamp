import React from "react"
import PropTypes from "prop-types"

export default class ColorPicker extends React.PureComponent {

  onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    const onInputChange = this.onInputChange
    return (
      <input type="text" onChange={onInputChange} />
    )
  }
}
