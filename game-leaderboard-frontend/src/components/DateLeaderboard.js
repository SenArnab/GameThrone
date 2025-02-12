import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DateLeaderboard = ({ date }) => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchDateLeaderboard = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/leaderboard/date/${date}`);
                setLeaderboard(res.data);
            } catch (err) {
                console.error('Error fetching date leaderboard:', err);
            }
        };
        fetchDateLeaderboard();
    }, [date]);

    return (
        <div>
            <h3>Date Leaderboard</h3>
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

export default DateLeaderboard;