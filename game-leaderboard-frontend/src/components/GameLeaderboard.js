import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameLeaderboard = ({ gameId }) => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchGameLeaderboard = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/leaderboard/game/${gameId}`);
                setLeaderboard(res.data);
            } catch (err) {
                console.error('Error fetching game leaderboard:', err);
            }
        };
        fetchGameLeaderboard();
    }, [gameId]);

    return (
        <div>
            <h3>Game Leaderboard</h3>
            <ul>
                {leaderboard.map((entry) => (
                    <li key={entry._id}>Contestant: {entry._id}, Score: {entry.totalScore}</li>
                ))}
            </ul>
        </div>
    );
};

export default GameLeaderboard;