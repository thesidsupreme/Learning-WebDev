import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sid from './sid.jsx'

const reactElement = React.createElement(
  "a",
  {href: "https://www.google.com",target: '_blank'},
  "click me to visit"
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sid />
    {reactElement}
  
  </StrictMode>,
)
