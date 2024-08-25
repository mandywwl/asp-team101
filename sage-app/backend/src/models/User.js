const db = require('../config/database');

// Function to find a user by username
const findUserByUsername = async (username) => {
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};

// Function to create a new user
const createUser = async (username, password) => {
  const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
  return result.insertId;
};

module.exports = { findUserByUsername, createUser };
