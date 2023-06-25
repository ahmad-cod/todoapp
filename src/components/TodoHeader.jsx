import PropTypes from 'prop-types'
import sunIcon from '../assets/images/icon-sun.svg'
import moonIcon from '../assets/images/icon-moon.svg'

const TodoHeader = ({ theme = 'dark', toggleTheme }) => {
  return (
    <header className='flex items-center justify-between text-white mt-1 sm:mt-9 mb-5 sm:mb-9'>
      <h1 className='text-[2.25rem] tracking-[0.5rem] uppercase font-bold'>Todo</h1>
      <button 
        className="theme outline-none" 
        aria-label='toggle theme'
        onClick={toggleTheme}
      >
        <img src={ (theme === 'dark') ? sunIcon : moonIcon } alt="" className='w-7 h-7 -mt-2' />
      </button>

    </header>
  )
}

TodoHeader.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default TodoHeader
