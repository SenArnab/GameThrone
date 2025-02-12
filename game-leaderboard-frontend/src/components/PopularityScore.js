import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularityScore = () => {
    const [popularityScores, setPopularityScores] = useState([]);

    useEffect(() => {
        const fetchPopularityScores = async () => {
            try {
                const res = await axios.get('http://localhost:5000/popularity');
                setPopularityScores(res.data);
            } catch (err) {
                console.error('Error fetching popularity scores:', err);
            }
        };
        fetchPopularityScores();
        const interval = setInterval(fetchPopularityScores, 300000); // Refresh every 5 minutes
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Game Popularity Scores</h5>
                <ul className="list-group">
                    {popularityScores.map((game) => (
                        <li key={game._id} className="list-group-item">
                            Game: {game.name}, Score: {game.score}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularityScore;