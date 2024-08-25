const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const authenticate = require('./src/middleware/authMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Use authentication routes
app.use('/api', authRoutes);

// Example of a protected route
app.get('/api/protected', authenticate, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
