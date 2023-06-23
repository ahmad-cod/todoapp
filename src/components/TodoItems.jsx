import { useState } from 'react'
import TodoItem from './TodoItem'
import FilterBar from './FilterBar'

const TotalTodos = ({ todos, setFilter, handleClearCompleted }) => {
  const totalLeft = todos.filter(todo => todo.completed === false)
  return (<div 
    className='todo_container border-none text-ddesaturatedBlue dark:text-lgrayishBlue'
    >
    <p>{ totalLeft.length } items left</p>
    <div className="hidden sm:block">
      <FilterBar setFilter={setFilter} />
    </div>
    <p 
      className='cursor-pointer hover:text-red-300'
      onClick={handleClearCompleted}
    >
      Clear Completed
    </p>
  </div>)
}
const TodoItems = ({ allTodos, setAllTodos }) => {
  const [filter, setFilter] = useState('all')

  console.log('all todos', allTodos)
  if (allTodos.length === 0) return <p> Todo list is empty, add one.</p> 

  const todos = allTodos.filter(todo => {
    // since we have multiple test cases switch is better than if else
    switch (filter) {
      case 'active':
        return !todo.completed
      case 'completed':
        return todo.completed
      default:
        return true
    }
  })
  const renderedTodoList = todos.map( todo => <TodoItem key={todo.id} todo={todo} setAllTodos={setAllTodos} />)
  const clearCompletedTodos = () => setAllTodos(todos => todos.filter(todo => !todo.completed))


  return (<>
  <div className="rounded-lg px-1 py-0 dark:bg-ddesaturatedBlue">
    {renderedTodoList}
    <TotalTodos todos={allTodos} setFilter={setFilter} handleClearCompleted={clearCompletedTodos} />
  </div>
  <div className="mt-5 block sm:hidden">
    <FilterBar setFilter={setFilter} />
  </div>
  </>)
}

export default TodoItems
