import "./TaskItem.scss";
import { FaDeleteLeft } from "react-icons/fa6";
const TaskItem = ({ task }) => {
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
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <FaDeleteLeft size={18} color="red" />
      </div>
    </div>
  );
};

export default TaskItem;
