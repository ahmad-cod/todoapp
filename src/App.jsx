import { useState } from 'react'
import TodoItems from './components/TodoItems'
import TodoForm from './components/TodoForm'
import Header from './components/Header'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [completedTodos, setCompletedTodos] = useState([])
  const [activeTodos, setActiveTodos] = useState([])
  const [allTodos, setAllTodos] = useState([
    { id: 1, title: 'Todo 1', isCompleted: false },
    { id: 2, title: 'Todo 2', isCompleted: true },
  ])
  return (
    <section className=''>
      <div className="md:max-w-[840px] mx-auto relative">
        <Header isDark={isDark} />
        <TodoForm setTodos={setAllTodos} />
        <TodoItems allTodos={allTodos} setAllTodos={setAllTodos} />
        <p className='fixed bottom-10 text-center w-full'>Drag and drop to reorder list</p>
      </div>
    </section>
  )
}

export default App
