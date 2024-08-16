require('dotenv').config();

const express = require('express');
const sequelize = require('./config/config');
const authRoutes = require('./api/auth');         // Import authentication routes
const journalRoutes = require('./api/journal');   // Import journal routes
const moodRoutes = require('./api/moods');        // Import mood routes
const authMiddleware = require('./middleware/auth'); // Import JWT middleware

const app = express();

app.use(express.json()); // Parse incoming JSON requests

// Sync the models with the database
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));

// Register routes
app.use('/api/auth', authRoutes); // Public routes

// Protected routes that require authentication
app.use('/api/journal', authMiddleware, journalRoutes); // Journal routes
app.use('/api/moods', authMiddleware, moodRoutes);       // Mood routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
