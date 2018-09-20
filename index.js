const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const auth = require('./auth')();

// intialize app
const app = express();

// initialize process.env
require('dotenv').config();

// connect to mongodb here
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

// use middleware here
app.use(cors());
app.use(bodyParser.json());
app.use(auth.initialize());

// import models here
const User = require('./models/User');

// mount route file
app.use('/api', routes);

// set the server to listen on port
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// make the app instance available throughout this application.
module.exports = app;