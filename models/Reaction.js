const { Schema } = require('mongoose');

reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            require: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (createdAt) {
                const datify = createdAt.toDateString()
                return datify
            }
        }
    },
    {
        toJSON: {
            getters: true,
        },
       
    }
);

module.exports = reactionSchema;