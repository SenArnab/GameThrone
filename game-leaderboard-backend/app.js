const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const contestantRoutes = require('./routes/contestantRoutes');
const gameRoutes = require('./routes/gameRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
connectDB();

// Enable CORS for all routes
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/contestants', contestantRoutes);
app.use('/games', gameRoutes);
app.use('/scores', scoreRoutes);
app.use('/leaderboard', leaderboardRoutes);


// 404 handler
app.use((req, res, next) => res.status(404).send('Page Not found'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;