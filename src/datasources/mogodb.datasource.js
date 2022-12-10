const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_STR, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`);
});

module.exports = mongoose;