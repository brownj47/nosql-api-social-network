const { Schema, model } = require('mongoose');
const Reaction =  require('./Reaction')


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            unique: true,
            maxLength: 280,
            minLength:1,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: function(createdAt){
                const datify = createdAt.toDateString()
                return datify
            }
        }, 
        username:{
            type: String,
            required: true,
        },
        reactions: [Reaction]
    },
    {
        toJSON:{
            virtuals: true
        }
    }
)

thoughtSchema.virtual('reactionCount').get(
    function(){
       return this.reactions.length
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought;