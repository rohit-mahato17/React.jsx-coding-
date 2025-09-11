import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | RM</h1>
    </div>
  )
}

// Example JSX element
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

// Example React.createElement
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
)

// Render any one of them
createRoot(document.getElementById('root')).render(
  reactElement // or MyApp() or anotherElement
)
