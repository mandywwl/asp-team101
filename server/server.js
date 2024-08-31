const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/db.config');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

// API route for user operations
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
