import React from 'react';
import ContestantForm from './components/ContestantForm';
import GameForm from './components/GameForm';
import Leaderboard from './components/Leaderboard';
import PopularityScore from './components/PopularityScore';
import GameLeaderboard from './components/GameLeaderboard';
import DateLeaderboard from './components/DateLeaderboard';

const App = () => {
    const gameId = '1'; // Replace with a valid game ID from your database
    const date = '2025-02-11'; // Replace with a valid date

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Game Leaderboard</h1>

            {/* Forms for creating contestants and games */}
            <div className="row">
                <div className="col-md-6">
                    <ContestantForm />
                </div>
                <div className="col-md-6">
                    <GameForm />
                </div>
            </div>

            {/* Global Leaderboard and Popularity Score */}
            <div className="row mt-4">
                <div className="col-md-12">
                    <Leaderboard />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <PopularityScore />
                </div>
            </div>

            {/* Game-specific and Date-specific Leaderboards */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <GameLeaderboard gameId={gameId} />
                </div>
                <div className="col-md-6">
                    <DateLeaderboard date={date} />
                </div>
            </div>
        </div>
    );
};

export default App;