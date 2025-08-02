// src/models/task.ts

import { v4 as uuidv4 } from 'uuid';

export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory task store
export const tasks = new Map<string, Task>();

// Helper to create a new task
export function createTask(title: string, description?: string): Task {
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.set(newTask.id, newTask);
  return newTask;
}
