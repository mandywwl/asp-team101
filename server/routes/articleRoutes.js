const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

console.log('Article routes file loaded');

router.get('/recommendations', (req, res, next) => {
  console.log('Recommendations route hit');
  articleController.getRecommendedArticles(req, res, next);
});

module.exports = router;