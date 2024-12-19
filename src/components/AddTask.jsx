import { useState } from "react";
import { MdAddToPhotos, MdDescription } from "react-icons/md";
import { useAlert } from "react-alert";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";
const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => setTask(e.target.value);

  const handleTask = async () => {
    try {
      if (task.length === 0) {
        return alert.error("Preencha o campo de tarefa.");
      }

      await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();
      setTask("");
    } catch (_error) {
      alert.error("Não foi possivel adicionar a tarefa.");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar uma nova tarefa...."
        value={task}
        onChange={onChange}
        onEnterPress={handleTask}
      />

      <CustomButton onClick={handleTask}>
        <MdAddToPhotos size={14} color="white" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
