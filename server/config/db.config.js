const path = require('path');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

// Create a connection to the SQLite database file
const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = db;
