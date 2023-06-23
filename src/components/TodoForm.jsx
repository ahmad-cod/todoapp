import { useState } from "react"

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('')
  
  const handleAddTodo = e => {
    e.preventDefault()

    if(newTodo.trim() !== '') {
      const todo = {
        id: new Date().getTime(),
        text: newTodo,
        completed: false
      }
      setTodos(prevTodos => prevTodos.concat(todo))
      setNewTodo('')
  }
  } 
  return (
    <form onSubmit={handleAddTodo} className="todo_container w-full mb-3 sm:mb-7 py-1 sm:py-4 shadow-md rounded-md">
        <span className='w-4 h-4 rounded-full border-lgrayishBlue border-[1px] '>
        </span>
        <input
         type="text"
         value={newTodo}
         placeholder="Create a new todo..."
         onChange={({ target }) => setNewTodo(target.value)}
         className="todo_container w-full rounded-md border-none outline-none py-2"
        />
    </form>
  )
}

export default TodoForm
