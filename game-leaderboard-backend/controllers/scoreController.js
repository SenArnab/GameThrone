const Score = require('../models/Score');

exports.assignScore = async (req, res) => {
    try {
        const score = new Score(req.body);
        await score.save();
        res.status(201).json(score);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};