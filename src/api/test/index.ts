import express, { Request, Response } from 'express';
import queryOptionsMiddleware from '../../middlewares/queryOptionsMiddleware';

const app = express();

app.get('/', queryOptionsMiddleware, async (req, res) => {
  // req.query has is of type QueryMiddleware, just as I want
  req.query;
  return res.status(200).json({ status: 'ok' });
});

export default app;
