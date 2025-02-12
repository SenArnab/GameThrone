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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Global Leaderboard</h5>
                <ul className="list-group">
                    {leaderboard.map((entry) => (
                        <li key={entry._id} className="list-group-item">
                            Contestant: {entry._id}, Score: {entry.totalScore}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Leaderboard;