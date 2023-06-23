import sunIcon from '../assets/images/icon-sun.svg'
import moonIcon from '../assets/images/icon-moon.svg'

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className='flex items-center justify-between text-white text-[2.5rem] mt-1 mb-5'>
      <h1 className='tracking-widest uppercase font-bold'>Todo</h1>
      <button 
        className="theme" 
        aria-label='toggle theme'
        onClick={toggleTheme}
      >
        <img src={ (theme === 'dark') ? sunIcon : moonIcon } alt="" className='w-8 h-8' />
      </button>

    </header>
  )
}

export default Header
