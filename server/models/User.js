const db = require('../config/db.config');

// Create the users table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});

// Function to insert a new user
function addUser(username, password, callback) {
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    stmt.run(username, password, function (err) {
        callback(err, this.lastID);
    });
    stmt.finalize();
}

// Function to find a user by username
function findUserByUsername(username, callback) {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        callback(err, row);
    });
}

// Function to find a user by username and password (for login)
function findUserByUsernameAndPassword(username, password, callback) {
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        callback(err, row);
    });
}

module.exports = {
    addUser,
    findUserByUsername,
    findUserByUsernameAndPassword
};
