const express = require('express');
const leaderboardController = require('../controllers/leaderboardController');

const router = express.Router();

// Get global leaderboard
router.get('/global', (req, res) => {
    leaderboardController.getGlobalLeaderboard(req, res);
});

// Get leaderboard for a specific game
router.get('/game/:gameId', (req, res) => {
    leaderboardController.getGameLeaderboard(req, res);
});

// Get leaderboard for a specific date
router.get('/date/:date', (req, res) => {
    leaderboardController.getDateLeaderboard
});

module.exports = router;