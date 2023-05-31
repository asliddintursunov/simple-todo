import { useState } from 'react'
import PropTypes from 'prop-types';
import './TodoForm.css'

function TodoForm({ setItems, itemsLength }) {

  //* VARIABLEWS
  const [todo, setTodo] = useState('')
  const formStyle = {display: 'grid', placeItems: 'center'}
  //* FUNCTIONS
  function handleSubmit(e) {
    e.preventDefault();
    todo.length === 0 ? alert("Empty input!") : setItems(prev => [...prev, { id: itemsLength + 1, title: todo }])
    setTodo("")
  }

  //* RETURN
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={formStyle}>
        Add new ToDo
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      </label>
      <button>Add!</button>
    </form>
  )
}

TodoForm.propTypes = {
  setItems: PropTypes.func.isRequired,
  itemsLength: PropTypes.number.isRequired
};
export default TodoForm