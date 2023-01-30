import React,{useState} from 'react'
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      
        
          <div className="card">
            <h1 className="heading">Today's List</h1>
            <form onSubmit={submitHandler}>
              <input   className='input' required  type="text" name="task" value={task} onChange={changeHandler} placeholder="Enter Tasks." /> &nbsp;&nbsp;
              <button   className='btn_add' type="submit"  name="Add">Add</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        
      
    </div>
  )
}

export default App
