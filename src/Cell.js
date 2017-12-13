import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from './Markdown'
import Output from './Output'
import Input from './Input'

const joinText = text => {
  if (text.join) {
    return text.map(joinText).join('')
  } else {
    return text
  }
}

class Cell extends Component {
  static propTypes = {
    raw: PropTypes.object.isRequired,
    metadata: PropTypes.object.isRequired,
    showCode: PropTypes.bool,
    showError: PropTypes.bool
  }

  render() {
    const { raw, metadata, showCode, showError } = this.props

    if (raw.cell_type === 'code') {
      let number =
        raw.prompt_number > -1 ? raw.prompt_number : raw.execution_count
      number = number || raw.execution_count
      const source = raw.input || [raw.source]

      const language =
        raw.language ||
        metadata.language ||
        (metadata.language_info && metadata.language_info.name)

      const input = (
        <Input
          showCode={showCode}
          raw={source}
          language={language}
          number={number}
        />
      )
      const outputs = (raw.outputs || []).map((o, i) => {
        return (
          <Output
            showCode={showCode}
            showError={showError}
            raw={o}
            number={number}
            key={`output${i}`}
          />
        )
      })
      // const outputs = coalesceStreams(raw_outputs)
      return (
        <div className="cell code-cell">
          {input}
          {outputs}
        </div>
      )
    }

    if (raw.cell_type === 'markdown') {
      return (
        <Markdown
          className="cell markdown-cell"
          string={joinText(raw.source)}
        />
      )
    }

    if (raw.cell_type === 'heading') {
      // TODO: make raw.level impact the heading size
      return <h1 className="cell heading-cell">{joinText(raw.source)}</h1>
    }

    if (raw.cell_type === 'raw') {
      return <h1 className="cell raw-cell">{joinText(raw.source)}</h1>
    }
  }
}

export default Cell
