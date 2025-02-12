const Game = require('../models/Game');
const Score = require('../models/Score');

const calculatePopularityScore = async (gameId) => {
    const game = await Game.findById(gameId);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const w1 = await Score.countDocuments({ gameId, timestamp: { $gte: yesterday } });
    const w2 = await Score.countDocuments({ gameId, timestamp: { $gte: new Date() } });
    const w3 = game.upvotes;
    const w4 = await Score.aggregate([
        { $match: { gameId, timestamp: { $gte: yesterday } } },
        { $group: { _id: null, maxSessionLength: { $max: '$score' } } },
    ]);
    const w5 = await Score.countDocuments({ gameId, timestamp: { $gte: yesterday } });

    const maxDailyPlayers = 100; // Example value
    const maxConcurrentPlayers = 50; // Example value
    const maxUpvotes = 1000; // Example value
    const maxSessionLength = 1000; // Example value
    const maxDailySessions = 200; // Example value

    const score = (
        0.3 * (w1 / maxDailyPlayers) +
        0.2 * (w2 / maxConcurrentPlayers) +
        0.25 * (w3 / maxUpvotes) +
        0.15 * (w4[0].maxSessionLength / maxSessionLength) +
        0.1 * (w5 / maxDailySessions)
    );

    return score;
};

module.exports = calculatePopularityScore;