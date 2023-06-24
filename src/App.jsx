import { useEffect, useState } from 'react'
import TodoItems from './components/TodoItems'
import TodoForm from './components/TodoForm'
import Header from './components/TodoHeader'
import todoList from './data.json'

const MY_TODOS = localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [...todoList]

function App() {
  const [theme, setTheme] = useState('dark')

  const [todos, setTodos] = useState(MY_TODOS)

  const updateTodosInLocalStorage = () => localStorage.setItem('myTodos', JSON.stringify(todos))

  useEffect(() => {
    document.body.className = theme

  }, [theme])

  useEffect(() => {
    updateTodosInLocalStorage()

  }, [todos])


  const toggleTheme = () => {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <section 
      className='app '
    >
      <div className="sm:max-w-[560px] sm:mx-auto relative pt-5 px-4 sm:px-0 shadow-2xl">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <TodoForm setTodos={setTodos} />
        <TodoItems todos={todos} setTodos={setTodos} />
      </div>
      <p className='text-center w-full mt-4 sm:mt-6 text-lgrayishBlue pb-4 dark:text-dgrayishBlue'>Drag and drop to reorder list.</p>
    </section>
  )
}

export default App