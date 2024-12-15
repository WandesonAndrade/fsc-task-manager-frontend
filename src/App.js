//import de bibliotecas
import { useState, useEffect } from "react";
import axios from "axios";

//import de componentes
import TaskItem from "./components/TaskItem";
const App = () => {
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
    <>
      {task.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
