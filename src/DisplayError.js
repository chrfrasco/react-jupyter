import React, { Component } from 'react'
import Code from './Code'
import AnsiUp from 'ansi_up'

class DisplayError extends Component {
  render() {
    const { raw } = this.props
    const text = raw.traceback.join('\n')
    const ansi_up = new AnsiUp()

    return <Code className="pyerr" string={ansi_up.ansi_to_html(text)} />
  }
}

export default DisplayError
