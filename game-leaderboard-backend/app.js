const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const contestantRoutes = require('./routes/contestantRoutes');
const gameRoutes = require('./routes/gameRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
connectDB();

app.use(express.json());

app.use('/contestants', contestantRoutes);
app.use('/games', gameRoutes);
app.use('/scores', scoreRoutes);
app.use('/leaderboard', leaderboardRoutes);

module.exports = app;