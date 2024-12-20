import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

import "./TaskItem.scss";
const TaskItem = ({ task, fetchTasks }) => {
  const handeleDeletion = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`);
      await fetchTasks();

      toast.success("Tarefa deletada com sucesso.");
    } catch (_error) {
      toast.error("Erro ao deletar tarefa.");
    }
  };
  const handleTaskCompletionOnChange = async (e) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, {
        isCompleted: e.target.checked,
      });

      await fetchTasks();

      toast.success("Tarefa atualizada com sucesso.");
    } catch (_error) {
      toast.error("algo deu errado.");
    }
  };
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletionOnChange(e)}
          />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <FaDeleteLeft size={18} color="red" onClick={handeleDeletion} />
      </div>
    </div>
  );
};

export default TaskItem;
