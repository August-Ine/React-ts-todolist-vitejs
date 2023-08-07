import { useRef, useContext } from "react";
import { todoContext } from "../context/todoContext";
import styles from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todoCtx = useContext(todoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;
    if (inputValue?.trim().length === 0) {
      return;
    }
    if (inputValue) {
      todoCtx.addItem(inputValue);
    }
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label htmlFor="todoItem">New Todo:</label>
      <input ref={inputRef} name="todoItem" id="todoItem"></input>
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
