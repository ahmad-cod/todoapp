import { useState } from 'react'
import TodoItems from './components/TodoItems'
import TodoForm from './components/TodoForm'
import Header from './components/Header'
import todoList from './data.json'

function App() {
  const [theme, setTheme] = useState('dark')
  const [completedTodos, setCompletedTodos] = useState([])
  const [activeTodos, setActiveTodos] = useState([])
  const [allTodos, setAllTodos] = useState(todoList)

  const toggleTheme = () => {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <section className=''>
      <div className="md:max-w-[600px] sm:mx-auto relative pt-5 px-4 sm:px-0">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <TodoForm setTodos={setAllTodos} />
        <TodoItems allTodos={allTodos} setAllTodos={setAllTodos} />
        <p className='text-center w-full mt-4'>Drag and drop to reorder list 2morrow</p>
      </div>
    </section>
  )
}

export default App
