import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './views/landing.jsx'
import Homepage from './views/homepage.jsx'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import Profile from './views/profile.jsx'

import './index.css'
import Landing from './views/landing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('homepage')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('login')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('register')).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('profile')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
)
