# react-jupyter.js

## Installation

```bash
npm install react-jupyter
```

## Demo

[https://eoinmurray.github.io/react-jupyter/](https://eoinmurray.github.io/react-jupyter/)

## Usage

```jsx
<Jupyter
  notebook={notebookJSON}
  showCode={true} // optional
  defaultStyle={true} // optional
  loadMathjax={true} // optional
/>
```

- `notebooks` - is the json content of an ipynb notebook file. Note: it must be json, not a string.
- `showCode` - (_optional_), defaults to true, whether or not to show the code in the notebook. It can be handy to hide the code to make a nice presentation .
- `defaultStyle` - (_optional_), defaults to true, if true then the library will load a default css file.
- `loadMathjax` - (_optional_), defaults to true, will load an instance of MathJax from the MathJax CDN.
