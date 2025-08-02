import express from 'express';
import { logger } from './middlewares/logger';
import tasksRouter from './routes/tasks';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/tasks', tasksRouter);

export default app;
