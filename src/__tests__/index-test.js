import React from 'react'
import { mount } from 'enzyme'
import JupyterRenderer from '..'

import notebookJson from './notebook.json'
import errorNotebookJson from './error.json'

const CODE_SELECTOR = '[data-language]'
const ERR_SELECTOR = '.pyerr'

const Notebook = props => (
  <JupyterRenderer notebook={props.notebookJson || notebookJson} {...props} />
)

it('renders without crashing', () => {
  mount(<Notebook />)
})

it('renders code cells by default', () => {
  const wrapper = mount(<Notebook />)
  expect(wrapper.find(CODE_SELECTOR).length).toEqual(14)
})

it('showCode=false prevents rendering of code blocks', () => {
  const wrapper = mount(<Notebook showCode={false} />)
  expect(wrapper.find(CODE_SELECTOR).length).toEqual(0)
})

it('renders error cells by default', () => {
  const wrapper = mount(<Notebook notebookJson={errorNotebookJson} />)
  expect(wrapper.find(ERR_SELECTOR).length).toEqual(1)
})

it('showError=false prevents rendering of error blocks', () => {
  const wrapper = mount(<Notebook notebookJson={errorNotebookJson} showError={false} />)
  expect(wrapper.find(ERR_SELECTOR).length).toEqual(0)
})