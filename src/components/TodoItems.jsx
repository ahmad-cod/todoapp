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

  const handleOnDragEnd = (result) => {
    // If dropped outside a valid area
    if(!result.destination) return

    const updatedItems = Array.from(allTodos)

    const [reorderedItem] = updatedItems.splice(result.source.index, 1)

    updatedItems.splice(result.destination.index, 0, reorderedItem)

    setAllTodos(updatedItems)
  }
  // const renderedTodoList = todos.map( todo => <TodoItem key={todo.id} todo={todo} setAllTodos={setAllTodos} />)
  const clearCompletedTodos = () => setAllTodos(todos => todos.filter(todo => !todo.completed))


  return (<>
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId='droppable'>
      {(provided) => (
        <div 
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="rounded-lg px-1 py-0 dark:bg-ddesaturatedBlue">
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                {(provided) => (
                  <div 
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps} 
                  ref={provided.innerRef}
                    className=""
                  >
                  <TodoItem todo={todo} setAllTodos={setAllTodos} />
                  </div>
                )}

              </Draggable>
            ))}
            {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
    <TotalTodos todos={allTodos} setFilter={setFilter} handleClearCompleted={clearCompletedTodos} />
  <div className="mt-5 block sm:hidden">
    <FilterBar setFilter={setFilter} />
  </div>
  </>)
}

export default TodoItems
