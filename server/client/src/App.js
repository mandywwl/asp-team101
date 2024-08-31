import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        password,
      });
      console.log(response.data);
      alert('User registered successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error registering the user.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username: loginUsername,
        password: loginPassword,
      });
      console.log(response.data);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Invalid credentials.');
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/chat', { message });
      const botMessage = response.data.botMessage;
      setChatLog([...chatLog, { user: message, bot: botMessage }]);
      setMessage('');
    } catch (error) {
      console.error('Axios Error:', error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>

        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <h1>AI Chatbot</h1>
        <div className="chat-log">
          {chatLog.map((entry, index) => (
            <div key={index}>
              <p><strong>You:</strong> {entry.user}</p>
              <p><strong>Bot:</strong> {entry.bot}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
