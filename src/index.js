import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Notebook from './Notebook'
import './jupyter-default.css'


const asyncLoadMathjax = () => {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = () => {}
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  head.appendChild(script);
}

class JuptyerRenderer extends Component {
  static propTypes = {
    notebook: PropTypes.object.isRequired,
    defaultStyle: PropTypes.bool,
    loadMathjax: PropTypes.bool,
    showCode: PropTypes.bool
  }

  componentDidMount() {
    const { loadMathjax = true } = this.props
    if (loadMathjax) {
      asyncLoadMathjax()
    }
  }

  render() {
    const { notebook, defaultStyle = true, showCode = true } = this.props

    let cls = defaultStyle ? "jupyter-default" : "jupyter"
    if (showCode) cls += " showCode"

    return (
      <div className={cls}>
        <Notebook raw={notebook} showCode={showCode}/>
      </div>
    )
  }
}

export default JuptyerRenderer
