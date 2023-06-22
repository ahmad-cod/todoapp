import { useState } from 'react'
import TodoItems from './components/TodoItems'
import TodoForm from './components/TodoForm'
import Header from './components/Header'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [completedTodos, setCompletedTodos] = useState([])
  const [activeTodos, setActiveTodos] = useState([])
  const [allTodos, setAllTodos] = useState([
    { id: 1, title: 'Complete online javaScript course', completed: true },
    { id: 2, title: 'Jog around the park 3x', completed: false },
    { id: 3, title: '10 minutes meditation', completed: false },
    { id: 4, title: 'Read for 1 hour', completed: false },
    { id: 5, title: 'Pick up groceries', completed: false },
    { id: 6, title: 'Complete Todo App on Frontend Mentor', completed: false },
  ])
  return (
    <section className=''>
      <div className="md:max-w-[840px] sm:mx-auto relative pt-5 px-4">
        <Header isDark={isDark} />
        <TodoForm setTodos={setAllTodos} />
        <TodoItems allTodos={allTodos} setAllTodos={setAllTodos} />
        <p className='text-center w-full mt-4'>Drag and drop to reorder list 2morrow</p>
      </div>
    </section>
  )
}

export default App
