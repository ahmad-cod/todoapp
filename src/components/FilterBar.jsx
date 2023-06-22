
const FilterBar = () => {
  const filterBarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
  return (
    <div style={filterBarStyle} className="todo_container mt-5">
      <a className="">All</a>
      <a className="">Active</a>
      <a className="">Completed</a>
    </div>
  )
}

export default FilterBar
