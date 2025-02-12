const Score = require('../models/Score');
const mongoose = require('mongoose');

exports.getGlobalLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Score.aggregate([
            { $group: { _id: '$contestantId', totalScore: { $sum: '$score' } } },
            { $sort: { totalScore: -1 } },
        ]);
        res.status(200).json(leaderboard);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getGameLeaderboard = async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const leaderboard = await Score.aggregate([
            { $match: { gameId: mongoose.Types.ObjectId(gameId) } },
            { $group: { _id: '$contestantId', totalScore: { $sum: '$score' } } },
            { $sort: { totalScore: -1 } },
        ]);
        res.status(200).json(leaderboard);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDateLeaderboard = async (req, res) => {
    try {
        const date = new Date(req.params.date);
        const nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);

        const leaderboard = await Score.aggregate([
            {
                $match: {
                    timestamp: {
                        $gte: date,
                        $lt: nextDate,
                    },
                },
            },
            { $group: { _id: '$contestantId', totalScore: { $sum: '$score' } } },
            { $sort: { totalScore: -1 } },
        ]);
        res.status(200).json(leaderboard);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};