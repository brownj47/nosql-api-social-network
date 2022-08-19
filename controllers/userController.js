const { Thought, User } = require('../models');









module.exports =  {
    getSingleUser(){
        User.find().then(users=>res.json(users)).catch(err=>res.status(500).send(err))
    },
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}