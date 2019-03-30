const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

require('./models/user.model');
require('./services/passport'); // Passport handles oAuth

mongoose.connect(process.env.DBURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxDays: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use(express.static(__dirname + '/build'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
