import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './views/App.jsx';
import Homepage from './views/Homepage.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import Profile from './views/Profile.jsx';

import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/homepage" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
