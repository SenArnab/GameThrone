const express = require('express');
const contestantController = require('../controllers/contestantController');

const router = express.Router();

// Create a new contestant
router.post('/', (req, res) => {
    contestantController.createContestant(req, res)
});

// Update a contestant
router.put('/:id', (req, res) => {
    contestantController.updateContestant(req, res)
});

// Delete a contestant
router.delete('/:id', (req, res) => {
    contestantController.deleteContestant(req, res)
});

// Get all contestants
router.get('/', (req, res) => {
    contestantController.getContestants(req, res)
});

module.exports = router;