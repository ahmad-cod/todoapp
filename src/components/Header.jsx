import sunIcon from '../assets/images/icon-sun.svg'
import moonIcon from '../assets/images/icon-moon.svg'

const Header = ({ isDark }) => {
  return (
    <header className='flex items-center justify-between text-white text-[2.5rem] mt-1 mb-5'>
      <h1 className='tracking-widest uppercase font-bold'>Todo</h1>
      <div className="theme">
        <img src={isDark ? sunIcon : moonIcon} alt="" />
      </div>
    </header>
  )
}

export default Header
