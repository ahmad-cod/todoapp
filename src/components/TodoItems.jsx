import { useState } from 'react'
import TodoItem from './TodoItem'
import FilterBar from './FilterBar'

const TotalTodos = ({ todos, handleClearCompleted }) => {
  const totalLeft = todos.filter(todo => todo.completed === false)
  return (<div className='todo_container border-none text-lgrayishBlue'>
    <p>{ totalLeft.length } items left</p>
    <p onClick={handleClearCompleted}>Clear Completed</p>
  </div>)
}
const TodoItems = ({ allTodos, setAllTodos }) => {
  const [filter, setFilter] = useState('all')

  console.log('all todos', allTodos)
  if (allTodos.length === 0) return <p> Todo list is empty, add one.</p> 

  const todos = allTodos.filter(todo => {
    if(filter === 'all') {
      return true
    } else if (filter === 'active') {
      return !todo.completed
    } else if (filter === 'completed') {
      return todo.completed
    }
  })
  const renderedTodoList = todos.map( todo => <TodoItem key={todo.id} todo={todo} setAllTodos={setAllTodos} />)
  const clearCompletedTodos = () => setAllTodos(todos => todos.filter(todo => !todo.completed))


  return (<>
  <div className="rounded-lg px-1 py-0 bg-ddesaturatedBlue">
    {renderedTodoList}
    <TotalTodos todos={allTodos} handleClearCompleted={clearCompletedTodos} />
  </div>
  <FilterBar setFilter={setFilter} />
  </>)
}

export default TodoItems
