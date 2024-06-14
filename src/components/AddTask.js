import React, { useState } from "react";
import axios from "axios";
import "./AddTask.css";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = { title, description, dueDate };

    try {
      const response = await axios.post("http://localhost:8082/api/tasks", newTask);

      if (response.status === 201) {
        const addedTask = response.data;
        onAdd(addedTask); // Assuming the server returns the added task
        setTitle("");
        setDescription("");
        setDueDate("");
      } else {
        alert("Task Added successfully"); 
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add task");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <div className="task-input">
        <div className="task-input-item">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your task"
          />
        </div>
        <div className="task-input-item">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description of your task"
          />
        </div>
        <div className="task-input-item">
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="task-input-item">
          <button className="add-btn" type="button" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
