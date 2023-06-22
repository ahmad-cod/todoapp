
const FilterBar = ({ setFilter }) => {

  const filterBarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  return (
    <div className="todo_container justify-around mt-5">
      <a 
        className="text-blue-500"
        onClick={() => setFilter('all')}
      >All</a>
      <a 
        className="hover:text-blue-400"
        onClick={() => setFilter('active')}
      >Active</a>
      <a 
        className="hover:text-blue-400"
        onClick={() => setFilter('completed')}
      >Completed</a>
    </div>
  )
}

export default FilterBar
