/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { users} from './users'

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/search', (req, res) => {
  res.send(users.filter((user) => req.query.q ? user.id === Number(req.query.q): ''));
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
