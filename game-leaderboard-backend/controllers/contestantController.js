const Contestant = require('../models/Contestant');

exports.createContestant = async (req, res) => {
    try {
        const contestant = new Contestant(req.body);
        await contestant.save();
        res.status(201).json(contestant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateContestant = async (req, res) => {
    try {
        const contestant = await Contestant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(contestant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteContestant = async (req, res) => {
    try {
        await Contestant.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getContestants = async (req, res) => {
    try {
        const contestants = await Contestant.find();
        res.status(200).json(contestants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};