import TodoList from './components/TodoList'

const DUMMY_TODOS = ['learn nextjs', 'learn angular']

function App() {


  return (
    <>
    <TodoList items={DUMMY_TODOS} />
    </>
  )
}

export default App
