const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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



