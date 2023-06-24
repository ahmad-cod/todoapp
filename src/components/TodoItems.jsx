import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import TodoItem from './TodoItem'
import FilterBar from './FilterBar'

const TotalTodos = ({ todos, setFilter, handleClearCompleted }) => {
  const totalLeft = todos.filter(todo => todo.completed === false)
  return (<div 
    className='todo_container border-none text-ddesaturatedBlue dark:text-dgrayishBlue'
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
const TodoItems = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState('all')

  if (todos.length === 0) return <p> Todo list is empty, add one.</p> 

  const todoList = todos.filter(todo => {
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

  const handleOnDragEnd = (result) => {
    // If dropped outside a valid area
    if(!result.destination) return

    const updatedItems = Array.from(todos)

    const [reorderedItem] = updatedItems.splice(result.source.index, 1)

    updatedItems.splice(result.destination.index, 0, reorderedItem)

    setTodos(updatedItems)
  }

  const clearCompletedTodos = () => setTodos(todos => todos.filter(todo => !todo.completed))


  return (<>
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId='droppable'>
      {(provided) => (
        <div 
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="rounded-lg px-1 py-0 dark:bg-ddesaturatedBlue">
            {todoList.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                {(provided) => (
                  <div 
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps} 
                  ref={provided.innerRef}
                    className=""
                  >
                  <TodoItem todo={todo} setTodos={setTodos} />
                  </div>
                )}

              </Draggable>
            ))}
            {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
    <TotalTodos todos={todos} setFilter={setFilter} handleClearCompleted={clearCompletedTodos} />
  <div className="mt-5 block sm:hidden">
    <FilterBar setFilter={setFilter} />
  </div>
  </>)
}

export default TodoItems
