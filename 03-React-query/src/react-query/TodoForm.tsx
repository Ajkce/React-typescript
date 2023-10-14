import { useRef } from "react";
import useAddTodos from "./hooks/useAddTodos";

const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodos(() => {});

  return (
    <>
      {addTodo.error && <div>{addTodo.error.message}</div>}
      <form
        action=""
        className="row mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current?.value) {
            addTodo.mutate({
              id: 0,
              userId: 1,
              title: inputRef.current?.value,
              completed: false,
            });
          }
        }}
      >
        <div className="col">
          <input ref={inputRef} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
