
const FilterBar = ({ setFilter }) => {

  return (
    <div className="dark:text-dgrayishBlue todo_container justify-center gap-x-8 sm:gap-x-5 border-none">
      <a 
        className="text-blue-500 cursor-pointer"
        onClick={() => setFilter({ value: 'all' })}
      >All</a>
      <a 
        className="hover:text-blue-400 cursor-pointer"
        onClick={() => setFilter({ value: 'active' })}
      >Active</a>
      <a 
        className="hover:text-blue-400 cursor-pointer"
        onClick={() => setFilter({ value: 'completed' })}
      >Completed</a>
    </div>
  )
}

export default FilterBar
