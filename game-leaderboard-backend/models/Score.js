const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    contestantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contestant',
        required: true
    },
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Score', scoreSchema);