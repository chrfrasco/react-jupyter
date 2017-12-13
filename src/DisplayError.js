import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Code from './Code'
import AnsiUp from 'ansi_up'

class DisplayError extends Component {
  static propTypes = {
    showError: PropTypes.bool
  }

  render() {
    const { raw, showError } = this.props
    const text = raw.traceback.join('\n')
    const ansi_up = new AnsiUp()

    if (!showError) return <div />

    return <Code className="pyerr" string={ansi_up.ansi_to_html(text)} />
  }
}

export default DisplayError
