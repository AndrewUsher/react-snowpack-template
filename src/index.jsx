/* Add JavaScript code here! */
import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
