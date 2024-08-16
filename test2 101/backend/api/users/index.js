const express = require('express');
const router = express.Router();

let mockUsers = [
    { id: 1, username: 'testuser', email: 'testuser@example.com' }
];

router.get('/', (req, res) => {
    res.json(mockUsers);
});

module.exports = router;
