import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';


const App = ()=> {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist]= useState([]);
  
  const handleChange =(e)=>{
    setTask(e.target.value)
  }
  const handleSubmits=()=>{
    if(!task){
      alert("Please enter the task ");
      return
    }
    const todo = {
      id: Math.floor(Math.random()*1000),
      value: task
    }
    setTasklist(oldList => [...oldList, todo]);
    setTask("");
  }
  const handleDelete=(id)=>{
    const newArray = tasklist.filter(t=> t.id !=id);
    setTasklist(newArray);
  }
  return (
    <div className="App">
      <input type="text" placeholder='Enter your Task' value={task} onChange={handleChange}/>
      <button onClick={handleSubmits}>Add todo</button>
      {tasklist!=[]? tasklist.map(t=><li key={t.id}>{t.value}<button onClick={()=>handleDelete(t.id)}>❌</button></li>):null}

    </div>
  );
}

export default App;

