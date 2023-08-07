import { useContext } from 'react';
import { todoContext } from '../context/todoContext';
import styles from './TodoItem.module.css'

interface props {
  item: string;
  id: string;
}

const TodoItem: React.FC<props> = ({ item, id }) => {
  const todoCtx = useContext(todoContext)

  return  <li className={styles.item} onClick={todoCtx.removeItem.bind(null, id)}>{item}</li>
};

export default TodoItem;
