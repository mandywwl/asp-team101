const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/recommendations', articleController.getRecommendedArticles);

module.exports = router;