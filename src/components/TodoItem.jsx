export default function TodoItem({ todo, onToggle, onDelete }) {export default function TodoItem({ todo, onToggle, onDelete }) {

  return (  return (

    <li className={`todo-item ${todo.done ? 'done' : ''}`}>    <li className={`todo-item ${todo.done ? 'done' : ''}`}>

      <span onClick={() => onToggle(todo.id)}>      <span onClick={() => onToggle(todo.id)}>

        {todo.text}        {todo.text}

      </span>      </span>

      <button onClick={() => onDelete(todo.id)} className="delete-btn">      <button onClick={() => onDelete(todo.id)} className="delete-btn">

        ×        ×

      </button>      </button>

    </li>    </li>

  );  );

}}