export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {

  return (

    <li className={`todo-item ${todo.done ? "done" : ""}`}>  return (

      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>

      <button onClick={() => onDelete(todo.id)} className="delete-btn">×</button>    <li className={`todo-item ${todo.done ? 'done' : ''}`}>  return (

    </li>

  );      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>

}
      <button onClick={() => onDelete(todo.id)} className="delete-btn">×</button>    <li className={`todo-item ${todo.done ? 'done' : ''}`}>  return (

    </li>

  );      <span onClick={() => onToggle(todo.id)}>

}
        {todo.text}    <li className={`todo-item ${todo.done ? 'done' : ''}`}>  return (

      </span>

      <button onClick={() => onDelete(todo.id)} className="delete-btn">      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>

        ×

      </button>      <button onClick={() => onDelete(todo.id)} className="delete-btn">×</button>    <li className={`todo-item ${todo.done ? 'done' : ''}`}>  return (  return (

    </li>

  );    </li>

}
  );      <span onClick={() => onToggle(todo.id)}>

}
        {todo.text}    <li className={`todo-item ${todo.done ? 'done' : ''}`}>    <li className={`todo-item ${todo.done ? 'done' : ''}`}>

      </span>

      <button onClick={() => onDelete(todo.id)} className="delete-btn">      <span onClick={() => onToggle(todo.id)}>      <span onClick={() => onToggle(todo.id)}>

        ×

      </button>        {todo.text}        {todo.text}

    </li>

  );      </span>      </span>

}
      <button onClick={() => onDelete(todo.id)} className="delete-btn">      <button onClick={() => onDelete(todo.id)} className="delete-btn">

        ×        ×

      </button>      </button>

    </li>    </li>

  );  );

}}