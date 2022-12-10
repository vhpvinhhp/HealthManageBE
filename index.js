const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index');
const debug = require('debug')('http');
const errorHandlers = require('./src/handlers/errorHandlers');
require('dotenv').config()
require('./src/datasources/mogodb.datasource');

const app = express();
app.use('/api', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandlers.notFound);

// Start our app!
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});