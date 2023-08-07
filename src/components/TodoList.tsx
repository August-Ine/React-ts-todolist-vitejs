import React, { useContext } from "react";
import { todoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";
import styles from './TodoList.module.css'

const TodoList: React.FC = () => {
  const todoCtx = useContext(todoContext);

  const itemsMap = todoCtx.items.map((item) => (
    <TodoItem key={item.id} id={item.id} item={item.text}></TodoItem>
  ));

  return <div>
    <ul className={styles.todos}>
    {itemsMap}
    </ul>
  </div >;
};

export default TodoList;
