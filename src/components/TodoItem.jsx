import checkIcon from '../assets/images/icon-check.svg'
import crossIcon from '../assets/images/icon-cross.svg'

const TodoItem = ({ todo, setTodos }) => {
  const { id, text, completed } = todo

  const handleDeleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const toggleTodoCompleted = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ))

  }

  const completedStyle = completed ? 'line-through dark:text-dgrayishBlue' : 'none'


  return (
    <div className={`todo_container ${completedStyle}`}>
      <div 
        className="flex gap-x-4 relative items-center"
        onClick={() => toggleTodoCompleted(id)}
      >
        <span className='w-5 h-5 rounded-full border-lgrayishBlue bg-checkGradient border-[1px] '>
        { 
          completed && (<img src={checkIcon} alt='checkmark icon' 
            className='bg-gradient-to-r from-firstGradientColor to-secondGradientColor 
            p-[4px] h-5 w-5 text-2xl bg-checkGradient rounded-full' />)
        }
        </span>
        <p className='hover:text-white'>{ text }</p>
      </div>
      <img src={crossIcon} alt="cross Icon" className='' onClick={() => handleDeleteTodo(id)} />
    </div>
  )
}

export default TodoItem