const express = require('express');
const router = express.Router();

let mockMoods = [];

router.get('/', (req, res) => {
    res.json(mockMoods);
});

router.post('/', (req, res) => {
    const mood = { id: mockMoods.length + 1, ...req.body };
    mockMoods.push(mood);
    res.json({ message: 'Mood logged (mock)', mood });
});

module.exports = router;
