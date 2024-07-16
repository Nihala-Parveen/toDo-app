import React from 'react'

const Todolist = ({toDos, handleEdit, handleDelete , handleToggleCompleted }) => {
  return (
      <ul className='allTodos'>
      {toDos.map((to) => (
          <li className='singleTodo'>
            <span className={`todoText ${to.completed ? 'completed' : ''}`} onClick={()=>handleToggleCompleted(to.id)} key={to.id}>{to.toDo}</span>
            <button onClick={()=>handleEdit(to.id)}>EDIT</button>
            <button onClick={()=>handleDelete(to.id)}>DELETE</button>
          </li>
      ))}
      </ul>
  );
};

export default Todolist
