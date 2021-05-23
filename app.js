import express from 'express';
const app = express();
import sequelize from './db.js';
import user from './controllers/usercontroller.js';
import game from './controllers/gamecontroller.js';
const port = process.env.PORT || 4000;

sequelize.sync();
app.use(express.json());
app.use('/api/game', game);

app.use('/api/auth', user);
app.listen(port);
console.log('App is listening on 4000')