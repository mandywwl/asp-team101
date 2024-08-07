import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import Homepage from './views/homepage.jsx'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
