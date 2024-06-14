import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  const addTask = (newTask) => {
    const updatedTasks = [
      ...tasks,
      { ...newTask, id: uuidv4(), createdAt: new Date(), completed: false },
    ];
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completedAt: new Date(), completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager App</h1>
      <div className="app-content">
        <AddTask onAdd={addTask} />
        <div className="select-btns">
          <button
            className={`select-btn ${selectedTab === "all" && "active"}`}
            onClick={() => setSelectedTab("all")}
          >
            All
          </button>
          <button
            className={`select-btn ${selectedTab === "todo" && "active"}`}
            onClick={() => setSelectedTab("todo")}
          >
            To Do
          </button>
          <button
            className={`select-btn ${selectedTab === "completed" && "active"}`}
            onClick={() => setSelectedTab("completed")}
          >
            Completed
          </button>
        </div>
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
};

export default App;
