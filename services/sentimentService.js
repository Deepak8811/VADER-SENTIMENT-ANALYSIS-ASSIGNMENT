const vader = require('vader-sentiment');

exports.analyzeSentiment = (text) => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    if (intensity.compound >= 0.05) {
        return 'positive';
    } else if (intensity.compound <= -0.05) {
        return 'negative';
    } else {
        return 'neutral';
    }
};
