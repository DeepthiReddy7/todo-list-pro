import TodoItem from './TodoItem';import TodoItem from './TodoItem';



export default function TodoList({ todos, onToggle, onDelete }) {export default function TodoList({ todos, onToggle, onDelete }) {

  return (  return (

    <ul className="todo-list">    <ul className="todo-list">

      {todos.map(todo => (      {todos.map(todo => (

        <TodoItem        <TodoItem

          key={todo.id}          key={todo.id}

          todo={todo}          todo={todo}

          onToggle={onToggle}          onToggle={onToggle}

          onDelete={onDelete}          onDelete={onDelete}

        />        />

      ))}      ))}

    </ul>    </ul>

  );  );

}}