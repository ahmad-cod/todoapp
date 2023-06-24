import { useEffect, useState } from 'react'
import TodoItems from './components/TodoItems'
import TodoForm from './components/TodoForm'
import Header from './components/Header'
import todoList from './data.json'

function App() {
  const [theme, setTheme] = useState('dark')

  const MY_TODOS = localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [...todoList]

  const [allTodos, setAllTodos] = useState(MY_TODOS)

  useEffect(() => {
    document.body.className = theme

    localStorage.setItem('myTodos', JSON.stringify(allTodos))
  }, [theme, allTodos])


  const toggleTheme = () => {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <section 
      className='app '
    >
      <div className="sm:max-w-[560px] sm:mx-auto relative pt-5 px-4 sm:px-0 shadow-2xl">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <TodoForm setTodos={setAllTodos} />
        <TodoItems allTodos={allTodos} setAllTodos={setAllTodos} />
      </div>
      <p className='text-center w-full mt-4 sm:mt-6 text-lgrayishBlue pb-4 dark:text-dgrayishBlue'>Drag and drop to reorder list.</p>
    </section>
  )
}

export default App