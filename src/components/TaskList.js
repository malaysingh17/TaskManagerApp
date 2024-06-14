import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8082/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      // Placeholder logic for toggling completion status
      console.log("Toggle completion status of task:", taskId);
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  return (
    <div>
      <h2>All Tasks</h2>
      <div className="task-list">
        {tasks.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>No tasks available.</h3>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
