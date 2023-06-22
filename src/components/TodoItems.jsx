import { useState } from 'react'
import TodoItem from './TodoItem'
import FilterBar from './FilterBar'

const TotalTodos = ({ todos }) => {
  const totalLeft = todos.filter(todo => todo.isCompleted === false)
  return (<div className='todo_container border-none'>
    <p>{ totalLeft.length } items left</p>
    <p>Clear Completed</p>
  </div>)
}
const TodoItems = ({ allTodos, setAllTodos }) => {
  console.log('all todos', allTodos)
  if (allTodos.length === 0) return <p> Todo list is empty, add one.</p> 

  const ListOfAllTodos = allTodos.map( todo => <TodoItem key={todo.id} todo={todo} setTodos={setAllTodos} />)

  return (<>
  <div className="rounded-lg px-1 py-0 bg-ddesaturatedBlue">
    {ListOfAllTodos}
    <TotalTodos todos={allTodos} />
  </div>
  <FilterBar />
  </>)
}

export default TodoItems
