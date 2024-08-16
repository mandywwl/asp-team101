const express = require('express');
const router = express.Router();

let mockJournalEntries = [];

router.get('/', (req, res) => {
    res.json(mockJournalEntries);
});

router.post('/', (req, res) => {
    const entry = { id: mockJournalEntries.length + 1, ...req.body };
    mockJournalEntries.push(entry);
    res.json({ message: 'Journal entry added (mock)', entry });
});

module.exports = router;
