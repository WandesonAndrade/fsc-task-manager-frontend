import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

const Tasks = () => {
  const [task, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTask(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <div className="tasks-list">
          {task
            .filter((task) => !task.isCompleted)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluidas</h3>
        <div className="tasks-list">
          {task
            .filter((task) => task.isCompleted)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
