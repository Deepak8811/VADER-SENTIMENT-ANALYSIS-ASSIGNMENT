const sentimentService = require('../services/sentimentService');

exports.getSentiment = (req, res) => {
    const { text } = req.body;
    const sentiment = sentimentService.analyzeSentiment(text);
    res.json({ sentiment });
};
