import { useState, useMemo, useCallback } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import FilterBar from './FilterBar'

const TodoItems = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState({ value: 'all' })
  
  const filteredTodoList = useMemo(() => {
    switch (filter.value) {
      case 'active':
        return todos.filter((todo) => !todo.completed)
      case 'completed':
        return todos.filter((todo) => todo.completed)
      default:
        return todos;
        }
     }, [filter.value, todos])
        
    const handleTodoDragEnd = useCallback((result) => {
      // If dropped outside a valid area
      if(!result.destination) return
      
      const updatedTodos = Array.from(todos)
      
      const [reorderedTodo] = updatedTodos.splice(result.source.index, 1)
      
      updatedTodos.splice(result.destination.index, 0, reorderedTodo)
      
      setTodos(updatedTodos)
    }, [todos, setTodos])
  
  const clearCompletedTodos = useCallback(() => {
    setTodos(todos => todos.filter(todo => !todo.completed))
  }, [setTodos])
  
  if (todos.length === 0) return <p> Todo list is empty, add one.</p> 
  
  return (
    <>
      <DragDropContext onDragEnd={handleTodoDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div 
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="rounded-lg px-1 py-0 dark:bg-ddesaturatedBlue">
                {filteredTodoList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div 
                      {...provided.draggableProps} 
                      {...provided.dragHandleProps} 
                      ref={provided.innerRef}
                        className="shadow-2xl"
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
      <div className='todo_container border-none text-ddesaturatedBlue dark:text-dgrayishBlue'>
        <p>{filteredTodoList.filter((todo) => !todo.completed).length} items left</p>
        <div className='hidden sm:block'>
          <FilterBar setFilter={setFilter} />
        </div>
        <p className='cursor-pointer hover:text-red-300' onClick={clearCompletedTodos}>
          Clear Completed
        </p>
      </div>
      <div className='mt-5 block sm:hidden'>
        <FilterBar setFilter={setFilter} />
      </div>
    </>
  )
}

TodoItems.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
}

export default TodoItems
