const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Example of a protected route
router.post('/', authMiddleware, async (req, res) => {
    // Only authenticated users can access this route
    const { title, content } = req.body;
    // Logic to create a new journal entry
    res.json({ message: 'Journal entry created', user: req.user });
});

router.get('/', authMiddleware, async (req, res) => {
    // Logic to retrieve journal entries for the authenticated user
    res.json({ message: 'Retrieved journal entries', user: req.user });
});

module.exports = router;
