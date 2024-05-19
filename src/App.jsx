import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Card from './Components/Card';


const App = () => {
const[todo,setTodo]=useState([]);
const[filtering,setFiltering]=useState('all')

const filteringTodo=()=>{
  if(filtering==='completedList'){
    return todo.filter((item)=>item.completed==='completed')
  }
  else if(filtering==='notCompletedList'){
    return todo.filter((item=>item.completed==='notCompleted'))
  }
  else {
    return todo
  }
}

const[status,setStatus]=useState('notCompleted')

const addTodo=(newTitle,newDescription,status)=>{
  let data={
    id:todo.length+1,
    title: newTitle,
    description: newDescription,
    completed: status
  }
  setTodo([...todo,data]);
}
const filteredTodo=filteringTodo();
  return (
    <div>
      <h1 className='text-success text-md-center my-3'>My Todo</h1>
      <Input addTodo={addTodo} setStatus={setStatus} status={status} setFiltering={setFiltering} filtering={filtering}/>
      <Card todo={filteredTodo} setTodo={setTodo} />
    </div>
    
  );
};

export default App;