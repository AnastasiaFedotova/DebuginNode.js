var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')
const port = process.env.PORT || 4000;

db.sync();
app.use(express.json());
app.use('/api/game', game);

app.use('/api/auth', user);
app.listen(port);
console.log('App is listening on 4000')