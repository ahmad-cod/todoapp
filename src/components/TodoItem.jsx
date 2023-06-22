import checkIcon from '../assets/images/icon-check.svg'
import crossIcon from '../assets/images/icon-cross.svg'

const TodoItem = ({ todo }) => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  }

  const toggleCompletion = () => {
    console.log('is completed', todo.isCompleted, !todo.isCompleted)
  }

  return (
    <div className='todo_container'>
      {/* <img src={checkIcon} alt="Check Icon" /> */}
      <input type="radio" onClick={toggleCompletion} />
      <p>{ todo.title }</p>
      <img src={crossIcon} alt="cross Icon" />
    </div>
  )
}

export default TodoItem