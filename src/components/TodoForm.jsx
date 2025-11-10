import { useForm } from 'react-hook-form';

export default function TodoForm({ onAdd }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onAdd(data.todo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        {...register('todo', {
          required: "Can't be empty!",
          minLength: { value: 1, message: "Too short!" }
        })}
        placeholder="What needs to be done?"
        className="input"
      />
      <button type="submit" className="add-btn">Add</button>
      {errors.todo && <p className="error">{errors.todo.message}</p>}
    </form>
  );
}