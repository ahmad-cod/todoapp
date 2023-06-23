
const FilterBar = ({ setFilter }) => {

  return (
    <div className="todo_container justify-center gap-x-8 border-none">
      <a 
        className="text-blue-500 cursor-pointer"
        onClick={() => setFilter('all')}
      >All</a>
      <a 
        className="hover:text-blue-400 cursor-pointer"
        onClick={() => setFilter('active')}
      >Active</a>
      <a 
        className="hover:text-blue-400 cursor-pointer"
        onClick={() => setFilter('completed')}
      >Completed</a>
    </div>
  )
}

export default FilterBar
