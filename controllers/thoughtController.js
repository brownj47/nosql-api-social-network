const { Thought, User } = require('../models');


module.exports = {
    getThoughts(req, res) {
        Thought.find().then(thoughts => res.json(thoughts)).catch(err => res.status(500).send(err))
    },
    getSingleThought(req, res) {
        Thought.find({
            _id: req.params.thoughtId
        }).then(
            (thought) => {
                if (thought) {
                    return res.json(thought)
                }
                return res.status(404).json({ message: 'No thought with that ID' })
            })
            .catch(err => res.status(500).send(err));
    },
    createThought(req, res) {
        Thought.create(req.body).then(thought => {
            return User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: thought._id } }
            ).then(user => {
                if (user) {
                    return res.status(200).json('Thought created, and associated with user')
                }
                return res.status(404).json('Thought created, but no user found')

            })
        }).catch(err => res.status(500).send(err))
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            req.body.thoughtId,
            { $set: req.body },
            {
                runValidators: true,
                new: true
            }).then(
                (thought) => {
                    if (thought) {
                        return res.json(thought)
                    }
                    return res.status(404).json({ message: 'No thought with that ID' })
                })
            .catch(err => res.status(500).send(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete(req.params.thoughtId).then(
            (thought) => {
                if (thought) {
                    return res.json(thought)
                }
                return res.status(404).json({ message: 'No thought with that ID' })
            })
            .catch(err => res.status(500).send(err));
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        ).then(
            (thought) => {
                if (thought) {
                    return res.json(thought)
                }
                return res.status(404).json({ message: 'No thought with that ID' })
            })
            .catch(err => res.status(500).send(err))
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.body.reactionId } } },
            { runValidators: true, new: true }
        ).then(
            (thought) => {
                if (thought) {
                    return res.json(thought)
                }
                return res.status(404).json({ message: 'No thought with that ID' })
            })
            .catch(err => res.status(500).send(err))
    },
}