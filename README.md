# Task Manager API

A simple RESTful API built with Express and TypeScript for managing tasks.

## Features

* Create, read, update, delete tasks
* Filter by status (e.g., `GET /tasks?status=completed`)
* Pagination support (e.g., `GET /tasks?page=1&limit=10`)
* Logger middleware for tracking requests
* Fully tested using Postman

## Endpoints

### `GET /tasks`

* List all tasks
* Query params:

  * `status`: Filter tasks by status (`pending`, `in-progress`, `completed`)
  * `page`: Page number (default: 1)
  * `limit`: Number of items per page (default: 10)

### `GET /tasks/:id`

* Get a task by its unique ID

### `POST /tasks`

* Create a new task
* Body JSON:

  ```json
  {
    "title": "Task Title",
    "description": "Optional description",
    "status": "pending"
  }
  ```

### `PUT /tasks/:id`

* Update a task
* Body JSON can include one or more of the fields:

  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "status": "completed"
  }
  ```

### `DELETE /tasks/:id`

* Delete a task

## Tech Stack

* Node.js
* Express
* TypeScript
* In-memory data storage (no database)

## Getting Started

### Installation

```bash
npm install
```

### Running in Development

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
task-manager-api/
├── src/
│   ├── models/
│   │   └── task.ts
│   ├── routes/
│   │   └── tasks.ts
│   ├── middlewares/
│   │   └── logger.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
├── README.md
```

## API Testing

All endpoints have been thoroughly tested using Postman. The following CRUD operations were verified:

* `POST /tasks` – Create task
* `GET /tasks` – Retrieve all tasks (with pagination and filters)
* `GET /tasks/:id` – Retrieve specific task
* `PUT /tasks/:id` – Update task
* `DELETE /tasks/:id` – Delete task

## Author

SUNMONU Fatai Ayinla
GitHub: [https://github.com/FAS2024/](https://github.com/FAS2024/)
LinkedIn: [https://www.linkedin.com/in/fatai-sunmonu](https://www.linkedin.com/in/fatai-sunmonu)
