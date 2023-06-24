import checkIcon from '../assets/images/icon-check.svg'
import { useState } from 'react'
import crossIcon from '../assets/images/icon-cross.svg'

const TodoItem = ({ todo, setAllTodos }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleDeleteTodo = (id) => {
    setAllTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const handleToggleTodo = (id) => {
    setAllTodos(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ))

  }
  const handleRadioChange = ({ target }) => {
    console.log(isChecked, target.checked, 'check')
    setIsChecked(!isChecked)
  }

  const completed = todo.completed ? 'line-through' : 'none'


  return (
    <div className={`todo_container ${completed}`}>
      {/* <img src={checkIcon} alt="Check Icon" /> */}
      <div 
        className="flex gap-x-4 relative items-center"
        onClick={() => handleToggleTodo(todo.id)}
      >
        <span className='w-5 h-5 rounded-full border-lgrayishBlue bg-checkGradient border-[1px] '>
        { 
          todo.completed && (<img src={checkIcon} alt='checkmark icon' 
            className='bg-gradient-to-r from-firstGradientColor to-secondGradientColor 
            p-[4px] h-5 w-5 text-2xl bg-checkGradient rounded-full' />)
        }
        </span>
        <p>{ todo.text }</p>
      </div>
      <img src={crossIcon} alt="cross Icon" className='' onClick={() => handleDeleteTodo(todo.id)} />
    </div>
  )
}

export default TodoItem