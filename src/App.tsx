import { ContextProvider } from "./context/todoContext";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <ContextProvider>
      <NewTodo />
      <TodoList />
    </ContextProvider>
  );
}

export default App;
