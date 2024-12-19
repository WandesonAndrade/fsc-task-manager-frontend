import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
import { useAlert } from "react-alert";

import "./TaskItem.scss";
const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert();
  const handeleDeletion = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/tasks/${task._id}`
      );
      await fetchTasks();

      alert.success("Tarefa deletada com sucesso.");
    } catch (_error) {
      alert.error("Erro ao deletar tarefa.");
    }
  };
  const handleTaskCompletionOnChange = async (e) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/tasks/${task._id}`,
        { isCompleted: e.target.checked }
      );

      await fetchTasks();

      alert.success("Tarefa atualizada com sucesso.");
    } catch (_error) {
      alert.error("algo deu errado.");
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
