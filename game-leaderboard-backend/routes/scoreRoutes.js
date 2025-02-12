const express = require('express');
const scoreController = require('../controllers/scoreController');

const router = express.Router();

// Assign a score to a contestant in a game
router.post('/', (req, res) => {
    scoreController.assignScore(req, res)
});

module.exports = router;