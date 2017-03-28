import express from 'express';

const route = express.Router();

route.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

export default route;