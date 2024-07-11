import { useCallback, useState } from "react";

const useTodo = (initialTodo = []) => {
  const [todos, setTodos] = useState(initialTodo);

  const addTask = useCallback((task) => {
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTodos((prevTodo) => [...prevTodo, newTask]);
  }, []);

  const removeTask = useCallback((taskId) => {
    setTodos((prevTodo) => prevTodo.filter((task) => task.id !== taskId));
  }, []);

  const editTask = useCallback((taskId, newTask) => {
    setTodos((prevTodo) => prevTodo.map((task) => (taskId === task.id ? { ...task, title: newTask } : task)));
  }, []);

  const toggleComplete = useCallback((taskId) => {
    setTodos((prevTodo) =>
      prevTodo.map((task) => (taskId === task.id ? { ...task, completed: !task.completed } : task))
    );
  }, []);

  const removeAllTasks = useCallback(() => {
    setTodos([]);
  }, []);

  return [todos, { addTask, removeTask, editTask, toggleComplete, removeAllTasks }];
};

export default useTodo;
