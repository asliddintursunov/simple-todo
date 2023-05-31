import { useState } from 'react'
import TodoForm from '../todoForm/TodoForm'
import TodoList from '../todoList/TodoList'
import './App.css'
function App() {

  //* VARIABLES
  const [items, setItems] = useState([])
  const layout = {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}
  // const
  //* RETURN
  return (
    <div style={layout}>
      <TodoForm setItems={setItems} itemsLength={items.length} />
      {items.length === 0 ? <h2>No ToDO Yet!</h2> : <TodoList items={items} setItems={setItems}/>}
    </div>
  )
}

export default App