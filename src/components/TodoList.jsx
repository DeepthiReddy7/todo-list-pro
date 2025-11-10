import TodoItem from './TodoItem';import TodoItem from './TodoItem';import TodoItem from './TodoItem';import TodoItem from './TodoItem';import TodoItem from './TodoItem';import TodoItem from './TodoItem';import TodoItem from './TodoItem';import TodoItem from './TodoItem';



export default function TodoList({ todos, onToggle, onDelete }) {

  return (

    <ul className="todo-list">export default function TodoList({ todos, onToggle, onDelete }) {

      {todos.map(todo => (

        <TodoItem  return (

          key={todo.id}

          todo={todo}    <ul className="todo-list">export default function TodoList({ todos, onToggle, onDelete }) {

          onToggle={onToggle}

          onDelete={onDelete}      {todos.map(todo => (

        />

      ))}        <TodoItem  return (

    </ul>

  );          key={todo.id}

}
          todo={todo}    <ul className="todo-list">export default function TodoList({ todos, onToggle, onDelete }) {

          onToggle={onToggle}

          onDelete={onDelete}      {todos.map(todo => (

        />

      ))}        <TodoItem  return (

    </ul>

  );          key={todo.id}

}
          todo={todo}    <ul className="todo-list">export default function TodoList({ todos, onToggle, onDelete }) {

          onToggle={onToggle}

          onDelete={onDelete}      {todos.map(todo => (

        />

      ))}        <TodoItem  return (

    </ul>

  );          key={todo.id}

}
          todo={todo}    <ul className="todo-list">export default function TodoList({ todos, onToggle, onDelete }) {

          onToggle={onToggle}

          onDelete={onDelete}      {todos.map(todo => (

        />

      ))}        <TodoItem  return (

    </ul>

  );          key={todo.id}

}
          todo={todo}    <ul className="todo-list">export default function TodoList({ todos, onToggle, onDelete }) {export default function TodoList({ todos, onToggle, onDelete }) {

          onToggle={onToggle}

          onDelete={onDelete}      {todos.map(todo => (

        />

      ))}        <TodoItem  return (  return (

    </ul>

  );          key={todo.id}

}
          todo={todo}    <ul className="todo-list">    <ul className="todo-list">

          onToggle={onToggle}

          onDelete={onDelete}      {todos.map(todo => (      {todos.map(todo => (

        />

      ))}        <TodoItem        <TodoItem

    </ul>

  );          key={todo.id}          key={todo.id}

}
          todo={todo}          todo={todo}

          onToggle={onToggle}          onToggle={onToggle}

          onDelete={onDelete}          onDelete={onDelete}

        />        />

      ))}      ))}

    </ul>    </ul>

  );  );

}}