import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  const { id, title, description, dueDate, completed } = task;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(id);
  };

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <div>
        <h3>{title}</h3>
        <p>Description: {description}</p>
        <p>Due Date: {dueDate}</p>
      </div>
      <div className="task-item-buttons">
        <button onClick={handleToggleComplete}>
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
