import './App.css';
import { useState } from 'react'
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';

function App() {
  const [ toDo , setTodo ] = useState("")
  const [ toDos , setTodos ] = useState([])
  const [ editId , setEdited ] = useState(0)
  const [ errorMsg , setErrorMsg ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( toDo.trim() === "") {
      setErrorMsg("Todo is required!")
      return
    }

    const isDuplicate = toDos.some((todo) => todo.toDo.toLowerCase() === toDo.toLowerCase() && todo.id !==editId )
    if(isDuplicate){
      setErrorMsg("Todo already exists!")
      return
    }

    if(editId) {
      const editTodo = toDos.find((i) => i.id === editId ) 
      const updatedTodo = toDos.map((t) => t.id === editTodo.id ? ( t = {id : t.id , toDo}) : { id : t.id , toDo : t.toDo })
      setTodos(updatedTodo)
      setEdited(0)
      setTodo("")
      setErrorMsg("")
      return
    }

    setTodos([{id : `${toDo}-${Date.now()}` , toDo , completed : false } , ...toDos ])
    setTodo("")
    setErrorMsg("")
  }

  const handleDelete = ( id ) => {
    const deletedTodo = toDos.filter((i) => i.id !== id ) 
    setTodos([...deletedTodo])
  }

  const handleEdit = (id) => {
    const editTodo = toDos.find((i) => i.id === id)
    setTodo(editTodo.toDo)
    setEdited(id)
  }

  const handleToggleCompleted = (id) => {
    const updatedTodos = toDos.map((todo) => 
      todo.id === id ? { ...todo , completed : !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>To Do List</h1>
        <Todoform handleSubmit={handleSubmit} toDo={toDo} setTodo={setTodo} editId={editId} errorMsg={errorMsg}/>
        <Todolist toDos={toDos} handleEdit={handleEdit} handleDelete={handleDelete} handleToggleCompleted={handleToggleCompleted} />
      </div>
    </div>
  );
}

export default App;
