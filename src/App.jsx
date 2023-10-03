import React, { useState } from 'react';
import './App.css'
 
 const App = () => {
  const [todo,setTodo]= useState("");
  const [todos, setTodos] = useState([]);
  const [editId,setEditId] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editId){
      const updatedTodos = todos.map ((t) =>(t.id === editId ? {...t, todo} : t));
      setTodos(updatedTodos);
      setEditId(0);
    }else if(todo !== ""){
      setTodos([{ id:`${todo}-${Date.now()}`, todo}, ...todos]);
    }
    setTodo('');
  };

  const handleDelete = (id) => {
    const updatedTodos =todos.filter((t)=> t.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) =>{
    const editTodo = todos.find( (todo) => todo.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className='App'>
      <div className='container'>
        <h1> Todo List </h1>
        <form className="todoForm"  onSubmit={handleSubmit} >
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit' > {editId ? "Edit" : "Go"} </button>
        </form>
        <ul>
          {todos.map((t)=> {
            return (
              <li className='singleTodo' key={t.id}>
                <span className='todoText' > {t.todo} </span>
              <button onClick={() =>  handleEdit(t.id) } > Edit </button>
              <button onClick={() => handleDelete(t.id)}> Delete </button>
              </li>
            )
            }) }  
        </ul>
      </div>
    </div>
  )
} 
export default App

