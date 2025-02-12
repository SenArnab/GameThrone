const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    upvotes: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Game', gameSchema);