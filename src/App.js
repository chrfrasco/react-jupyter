import React, { Component } from 'react'
import Jupyter from 'react-jupyter'
import request from 'superagent'
import logo from './logo.svg'
import notebookUrl from './index.ipynb'
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { notebookJSON: null }
  }

  componentDidMount(){
    request.get(notebookUrl, (err, res) => {
      this.setState({notebookJSON: JSON.parse(res.text)})
    })
  }

  render() {
    const { notebookJSON } = this.state

    return (
      <div className="page-content">
        <div className="wrapper">
          <div className="post">
            <div className="post-header">
              <strong className="post-title">Fitting a Gaussian to spectral data</strong>
              <div className="post-info">
                notebook.ipynb
              </div>
              <time>Mar 7, 2017</time>
            </div>
            <hr />
            { notebookJSON &&
              <Jupyter
                notebook={notebookJSON}
                defaultStyle
                showCode
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
