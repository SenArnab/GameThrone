import React, { useState } from 'react';
import axios from 'axios';

const ContestantForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/contestants', { name, email });
            alert('Contestant created successfully!');
            setName('');
            setEmail('');
        } catch (err) {
            alert('Error creating contestant');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Create Contestant</h5>
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
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Contestant</button>
                </form>
            </div>
        </div>
    );
};

export default ContestantForm;