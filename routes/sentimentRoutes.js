const express = require('express');
const { getSentiment } = require('../controllers/sentimentController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/analyze', authMiddleware, getSentiment);

module.exports = router;
