import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EmptyState from './components/EmptyState';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>My Pro Todo App</h1>
        <TodoForm onAdd={addTodo} />
        {todos.length === 0 ? <EmptyState /> : <TodoList todos={todos} onToggle={toggleDone} onDelete={deleteTodo} />}
      </div>
    </div>
  );
}

export default App;