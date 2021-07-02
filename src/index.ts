import express from 'express';
import 'express-async-errors';
import compression from 'compression';
import cors from 'cors';

import api from './api';

const port = 3000;

const startServer = () => {
  const app = express();
  app.use(compression());
  app.use(cors());
  app.use('/api', api);
  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
};

startServer();
