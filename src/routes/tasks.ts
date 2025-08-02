// src/routes/tasks.ts

import { Router, Request, Response } from 'express';
import { tasks, Task, createTask, TaskStatus } from '../models/task';

const router = Router();

// GET /tasks?status=completed&page=1&limit=10
router.get('/', (req: Request, res: Response) => {
  const { status, page = '1', limit = '10' } = req.query;

  let filteredTasks = Array.from(tasks.values());

  // Filter by status
  if (status && ['pending', 'in-progress', 'completed'].includes(status as string)) {
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }

  // Pagination
  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const start = (pageNum - 1) * limitNum;
  const paginatedTasks = filteredTasks.slice(start, start + limitNum);

  res.json({
    page: pageNum,
    limit: limitNum,
    total: filteredTasks.length,
    data: paginatedTasks,
  });
});

// GET /tasks/:id
router.get('/:id', (req: Request, res: Response) => {
  const task = tasks.get(req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// POST /tasks
router.post('/', (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = createTask(title, description);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', (req: Request, res: Response) => {
  const task = tasks.get(req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, description, status } = req.body;

  if (status && !['pending', 'in-progress', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.status = status ?? task.status;
  task.updatedAt = new Date();

  tasks.set(task.id, task);
  res.json(task);
});

// DELETE /tasks/:id
router.delete('/:id', (req: Request, res: Response) => {
  if (!tasks.has(req.params.id)) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.delete(req.params.id);
  res.status(204).send(); // No content
});

export default router;
