import React from "react"
import PropTypes from "prop-types"

class Footer extends React.Component {

  constructor(props) {
    super(props)
    this.setAboutTab = this.setAboutTab.bind(this)
  }

  setAboutTab() {
    this.props.onActiveTabSet()
  }

  render() {
    return (
      <footer className="page-footer orange darken-2">
        <div className="footer-copyright orange darken-3">
          <div className="container" onClick={this.setAboutTab}>
            © 2018 JIT Solutions
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  onActiveTabSet: PropTypes.func.isRequired
}

export default Footer