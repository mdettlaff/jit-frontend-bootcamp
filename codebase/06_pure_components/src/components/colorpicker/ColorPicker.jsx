import React from "react"
import PropTypes from "prop-types"

export default class ColorPicker extends React.PureComponent {

  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    const myListener = this.props.myListener
    console.log(event.target.value)
    myListener(event.target.value)
  }

  render() {
    const onInputChange = this.onInputChange
    return (
      <input type="text" onChange={onInputChange} />
    )
  }
}

ColorPicker.propTypes = {
  myListener: PropTypes.func
}
