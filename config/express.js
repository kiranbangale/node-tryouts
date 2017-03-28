import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Express app up and running!'));

export default app;