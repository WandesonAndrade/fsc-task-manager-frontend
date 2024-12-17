import { useState } from "react";
import { MdAddToPhotos, MdDescription } from "react-icons/md";
import { useAlert } from "react-alert";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";
const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => setTask(e.target.value);

  const handleTask = async () => {
    try {
      if (task.length === 0) {
        return alert.error("Preencha o campo de tarefa.");
      }

      await axios.post(
        "https://wandesonandrade-fsc-task-manager-backend.onrender.com/tasks",
        { description: task, isCompleted: false }
      );
    } catch (error) {}
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar uma nova tarefa...."
        value={task}
        onChange={onChange}
      />

      <CustomButton onClick={handleTask}>
        <MdAddToPhotos size={14} color="white" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
