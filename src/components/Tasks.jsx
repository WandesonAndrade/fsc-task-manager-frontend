import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const alert = useAlert();

  const [task, setTask] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/tasks`
      );
      setTask(data);
    } catch (_error) {
      alert.error("Não foi possivel carregar as tarefas.");
    }
  }, [alert]);

  const lastTasks = useMemo(
    () => task.filter((task) => task.isCompleted === false),
    [task]
  );
  const completedTasks = useMemo(
    () => task.filter((task) => task.isCompleted),
    [task]
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              task={lastTask}
              key={lastTask._id}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluidas</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask) => (
            <TaskItem
              key={completedTask._id}
              task={completedTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
