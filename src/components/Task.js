import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
   return (
      <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
         <h3>
<<<<<<< HEAD
            {task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} />
=======
            {task.text}{" "}
            <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} />
>>>>>>> 70eac94126fefc75822dd74db5fd3c2f494a46ba
         </h3>
         <p>{task.day}</p>
      </div>
   );
};

export default Task;
