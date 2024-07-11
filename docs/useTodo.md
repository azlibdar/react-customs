# useTodo

Manage a to-do list with common operations with a `useTodo` hook.

<br>

### Usage

```jsx
import useTodo from "react-customs";

const [todos, { addTask, removeTask, editTask, toggleComplete, removeAllTasks }] = useTodo([]);

const newTaskTitle = "Learn React";
addTask(newTaskTitle); // Add a new task

removeTask(taskId); // Remove a task by ID

editTask(taskId, "Learn React Hooks"); // Edit a task's title by ID

toggleComplete(taskId); // Toggle a task's completion status by ID

removeAllTasks(); // Remove all tasks
```

# Description

The `useTodo` hook provides an interface for managing a list of to-do tasks. It returns the current list of tasks and an object with methods to add, remove, edit, toggle completion, and remove all tasks. Each task has a unique ID, a title, and a completion status.

### Parameters

| Name          | Type    | Description                                                       |
| ------------- | ------- | ----------------------------------------------------------------- |
| `initialTodo` | `array` | (Optional) The initial list of tasks. Defaults to an empty array. |

### Return value

| Name      | Type     | Description                                               |
| --------- | -------- | --------------------------------------------------------- |
| `todos`   | `array`  | The current list of to-do tasks.                          |
| `actions` | `object` | An object containing methods to manipulate the task list. |

- `addTask(task)`: Adds a new task with the given title.
- `removeTask(taskId)`: Removes a task by its unique ID.
- `editTask(taskId, newTask)`: Edits the title of a task by its unique ID.
- `toggleComplete(taskId)`: Toggles the completion status of a task by its unique ID.
- `removeAllTasks()`: Removes all tasks from the list.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-gvqhif?file=src%2FApp.jsx" target="_blank">useTodo (Example)</a>
