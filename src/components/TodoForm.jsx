import { useState } from "react"
import PropTypes from 'prop-types'

const TodoForm = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState('')
  
  const handleAddTodo = e => {
    e.preventDefault()

    if(newTodoText.trim() !== '') {
      const todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false
      }
      setTodos(prevTodos => prevTodos.concat(todo))
      setNewTodoText('')
  }
  } 
  return (
    <form onSubmit={handleAddTodo} className="todo_container w-full mb-3 sm:mb-7 py-1 sm:py-4 shadow-md rounded-md">
        <span className='w-5 h-5 rounded-full border-lgrayishBlue border-[1px] '>
        </span>
        <input
         type="text"
         value={newTodoText}
         placeholder="Create a new todo..."
         onChange={({ target }) => setNewTodoText(target.value)}
         className="todo_container w-full rounded-md border-none outline-none py-2"
        />
    </form>
  )
}

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired
}

export default TodoForm
