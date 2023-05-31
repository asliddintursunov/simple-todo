import './TodoList.css'
import PropTypes from 'prop-types';
function TodoList({ items, setItems }) {

  //* VARIABLES
  const todoStyle = {display: 'flex', alignItems: 'center', gap: '0.5rem'};
  //* FUNCTION    
  function handleDelete(id) {
    setItems(prev => prev.filter(item => item.id !== id))
  }
  //* RETURN
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id} style={todoStyle}>
            <h3>{item.title}</h3>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  setItems: PropTypes.func.isRequired
};


export default TodoList