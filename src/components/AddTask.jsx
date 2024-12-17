import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { useAlert } from "react-alert";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";
const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => setTask(e.target.value);

  const handleTask = () => {
    try {
      if (task.length === 0) {
        return alert.error("Preencha o campo de tarefa.");
      }
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
