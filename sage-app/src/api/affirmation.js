const express = require('express');
const router = express.Router();

const affirmations = [
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "You are stronger than you think.",
    "Every day is a new beginning.",
    "You are worthy of love and respect."
];

router.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    res.json({ affirmation: affirmations[randomIndex] });
});

module.exports = router;