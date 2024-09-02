const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db.config'); // Import the SQLite database connection
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
app.listen(PORT, () => {
    // Log that the SQLite database is connected
    db.serialize(() => {
        console.log('Connected to the SQLite database.');
    });

    console.log(`Server running on port ${PORT}`);
});
