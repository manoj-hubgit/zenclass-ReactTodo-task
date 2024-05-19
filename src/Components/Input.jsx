import React, { useState } from "react";

const Input = ({ addTodo, setStatus, status,setFiltering ,filtering }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const handleSubmit = () => {
    if (title !== "") {
      addTodo(title, description,status);
      setTitle("");
      setDescription("");
      setStatus('notCompleted')
    } else {
      alert("enter the input");
    }
  };
  return (
    <div className="container">
      <div className="row text-md-center my-4">
        <div className="col">
          <input
            className="border-success"
            value={title}
            type="text"
            placeholder="Todo Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            className="border-success"
            value={description}
            type="text"
            placeholder="Todo Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col">
          <button onClick={handleSubmit} className="btn btn-success ">
            Add Todo
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h4 className="my-4">My Todos</h4>
        <h4 className="my-4">
          Status Filter:
          <select className="w-25" value={filtering} onChange={(e)=>setFiltering(e.target.value)}>
            <option value='all'>All</option>
            <option value='completedList'>Completed</option>
            <option value='notCompletedList'>Not Completed</option>
          </select>
        </h4>
      </div>
    </div>
  );
};

export default Input;
