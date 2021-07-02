import express from 'express';

const app = express();

import routeTests from './test';

app.use(express.json({ limit: '10mb' }));

app.use('/tests', routeTests);

export default app;
