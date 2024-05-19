import React, { useState } from "react";

const Card = ({todo,setTodo}) => {
//console.log({status})
const deleteButton=(id)=>{
           setTodo(todo.filter((todo)=>todo.id !==id))  
}
const changeStatus=(id,newStatus)=>{
        setTodo(todo.map((item)=>item.id===id ? {...item,completed: newStatus }:item))
}

const editbutton=(id)=>{
  const newTitle=prompt("Enter new title : ")
  const newDescription=prompt("Enter new description : ")
  setTodo(todo.map((item)=>item.id===id ? {...item,title:newTitle, description:newDescription}:item))
}

  return (
    <div className="row">
       {todo.map((element,index)=>{
        return(
         <div key={element.id} className="cardStyle mx-md-5 my-md-5 col-md-3 card mb-3">
        <div className="card-body">
          <p className="card-text">Name: {element.title}</p>
          <p className="card-text"> Description: {element.description} </p>
          <p className="card-text"> Status 
          <select value={element.completed} onChange={(e)=>changeStatus(element.id,e.target.value)} >
            <option value='notCompleted'>Not Completed</option>
            <option value='completed'>Completed</option>
          </select> </p>
          <button onClick={()=>editbutton(element.id)} className="btn btn-success editdelete">Edit</button>
          <button onClick={()=>deleteButton(element.id)} className="btn btn-danger  editdelete ms-md-2 ">
            Delete
          </button>
        </div>
      </div>
      ) })}
     
    </div>
  );
};

export default Card;
   