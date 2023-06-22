import { useState } from "react"

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('')
  
  const handleAddTodo = e => {
    e.preventDefault()

    if(newTodo.trim() !== '') {
      const todo = {
        id: new Date().getTime(),
        title: newTodo,
        completed: false
      }
      setTodos(prevTodos => prevTodos.concat(todo))
      setNewTodo('')
  }
  } 
  return (
    <form onSubmit={handleAddTodo}>
        <input
         type="text"
         value={newTodo}
         placeholder="Create a new todo..."
         onChange={({ target }) => setNewTodo(target.value)}
         className="todo_container w-full mb-5 rounded-md"
        />
    </form>
  )
}

export default TodoForm
