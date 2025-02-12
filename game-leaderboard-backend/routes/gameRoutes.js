const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

// Create a new game
router.post('/', gameController.createGame);

// Update a game
router.put('/:id', gameController.updateGame);

// Delete a game
router.delete('/:id', gameController.deleteGame);

// Get all games
router.get('/', gameController.getGames);

module.exports = router;