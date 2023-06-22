import { useState } from "react"

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('')
  const addTodoItem = e => {
    e.preventDefault()

    const randomId = Math.floor(Math.random() * 300)
    console.log(newTodo)
    setTodos(prevTodos => prevTodos.concat({ id: randomId, title: newTodo, isCompleted: false }))
    setNewTodo('')
  } 
  return (
    <form onSubmit={addTodoItem}>
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
