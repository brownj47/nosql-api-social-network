// const { ObjectID } = require('bson');
const { Schema, model } = require('mongoose');
const { Thought, User } = require('../models');



module.exports = {
    getUsers(req, res) {
        User.find().then(users => res.json(users)).catch(err => res.status(500).send(err))
    },
    getSingleUser(req, res) {
        User.find({
            _id: req.params.userId
        }).then(
            (user) => {
                if (user) {
                    return res.json(user)
                }
                return res.status(404).json({ message: 'No user with that ID' })
            })
            .catch(err => res.status(500).send(err));
    },
    createUser(req, res) {
        User.create(req.body).then(user => res.json(user)).catch(err => res.status(500).send(err))
    },
    updateUser(req, res) {
        User.findOneAndUpdate({
            _id: req.params.userId
        },
            {
                $set: req.body
            },
            {
                runValidators: true,
                new: true
            }
        ).then(user => res.json(user)).catch(err => res.status(500).send(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({
            _id: req.params.userId
        }).then(user => res.json(user)).catch(err => res.status(500).send(err))
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { friends: req.body.userId } },
            {
                new: true,
                runValidators: true,
            }
        ).then(user => res.json(user)).catch(err => res.status(500).send(err))
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            {
                runValidators: true,
                new: true
            }
        ).then(user => res.json(user)).catch(err => res.status(500).send(err))
    },

}
