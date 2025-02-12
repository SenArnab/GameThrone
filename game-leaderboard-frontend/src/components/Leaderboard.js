import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const res = await axios.get('http://localhost:5000/leaderboard/global');
                setLeaderboard(res.data);
            } catch (err) {
                console.error('Error fetching leaderboard:', err);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <div>
            <h3>Global Leaderboard</h3>
            <ul>
                {leaderboard.map((entry, index) => (
                    <li key={index}>
                        Contestant: {entry.contestantName}, Score: {entry.totalScore}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;