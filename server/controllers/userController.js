const db = require('../config/db.config');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Insert the new user into the SQLite database
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Error registering user' });
      }

      // Return the new user's ID
      res.status(201).json({ id: this.lastID });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the SQLite database
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error during login' });
      }

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chat with OpenAI
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    // Create a chat completion
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const botMessage = response.choices[0].message.content;
    res.status(200).json({ botMessage });
  } catch (error) {
    console.error("Error in chat function:", error.message);  // Log the error for debugging
    res.status(500).json({ error: error.message });
  }
};
