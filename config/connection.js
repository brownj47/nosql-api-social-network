const {connect, connection} = require('mongoose');

connect(`mongodb://localhost/socialNetApiDB`, {
    useNewUrlparser:true,
useUnifiedTopology:true
});

module.exports = connection;