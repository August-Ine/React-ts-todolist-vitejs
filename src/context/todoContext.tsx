import React, { ReactNode } from "react";
import todoItem from "../models/todo";

interface componentProps {
  children: ReactNode;
}

//type alias for context
type todoContextType = {
  items: todoItem[];
  addItem: (todo: string) => void;
  removeItem: (id: string) => void;
};

export const todoContext = React.createContext<todoContextType>({
  items: [],
  addItem: (todo) => {},
  removeItem: (id) => {},
});

export const ContextProvider: React.FC<componentProps> = ({ children }) => {
  const [todos, setTodos] = React.useState<todoItem[]>([]);

  const addItemHandler = (item: string) => {
    setTodos((prevTodos) => prevTodos.concat(new todoItem(item)));
  };

  const removeItemHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextStore: todoContextType = {
    items: todos,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <todoContext.Provider value={contextStore}>{children}</todoContext.Provider>
  );
};
