import React, { useState } from 'react';
import axios from 'axios';

const GameForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/games', { name, description });
            alert('Game created successfully!');
            setName('');
            setDescription('');
        } catch (err) {
            alert('Error creating game');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Create Game</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Game</button>
                </form>
            </div>
        </div>
    );
};

export default GameForm;