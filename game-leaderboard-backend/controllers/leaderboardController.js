const Score = require('../models/Score');
const Contestant = require('../models/Contestant');
const mongoose = require('mongoose');

exports.getGlobalLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Score.aggregate([
            {
                $group: {
                    _id: '$contestantId',
                    totalScore: { $sum: '$score' },
                },
            },
            {
                $lookup: {
                    from: 'contestants', // Name of the Contestant collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'contestant',
                },
            },
            {
                $unwind: '$contestant', // Unwind the joined contestant data
            },
            {
                $project: {
                    _id: 0,
                    contestantId: '$_id',
                    contestantName: '$contestant.name',
                    totalScore: 1,
                },
            },
            {
                $sort: { totalScore: -1 }, // Sort by totalScore in descending order
            },
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
            {
                $match: { gameId: mongoose.Types.ObjectId(gameId) },
            },
            {
                $group: {
                    _id: '$contestantId',
                    totalScore: { $sum: '$score' },
                },
            },
            {
                $lookup: {
                    from: 'contestants', // Name of the Contestant collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'contestant',
                },
            },
            {
                $unwind: '$contestant', // Unwind the joined contestant data
            },
            {
                $project: {
                    _id: 0,
                    contestantId: '$_id',
                    contestantName: '$contestant.name',
                    totalScore: 1,
                },
            },
            {
                $sort: { totalScore: -1 }, // Sort by totalScore in descending order
            },
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
            {
                $group: {
                    _id: '$contestantId',
                    totalScore: { $sum: '$score' },
                },
            },
            {
                $lookup: {
                    from: 'contestants', // Name of the Contestant collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'contestant',
                },
            },
            {
                $unwind: '$contestant', // Unwind the joined contestant data
            },
            {
                $project: {
                    _id: 0,
                    contestantId: '$_id',
                    contestantName: '$contestant.name',
                    totalScore: 1,
                },
            },
            {
                $sort: { totalScore: -1 }, // Sort by totalScore in descending order
            },
        ]);
        res.status(200).json(leaderboard);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};