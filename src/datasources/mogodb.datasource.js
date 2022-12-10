const mongoose = require('mongoose');

require('dotenv').config()

mongoose.set('strictQuery', false);
mongoose.createConnection(process.env.MONGO_DB_STR, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`);
});

module.exports = mongoose;