import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/taskSlice";
import "./edittask.css";

const EditTask = ({ item, onClose }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(item.task); // Default task value

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim().length < 10) {
      alert("Task must be at least 10 characters.");
      return;
    }

    console.log("Updated Task:", task);
    dispatch(editTask(item._id, { task }));
    window.location.reload();

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4 className="modal-title">Edit Task</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              id="task"
              value={task}
              onChange={handleTaskChange}
              rows={4}
              placeholder="Update your task..."
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="button save">
              Save
            </button>
            <button type="button" onClick={onClose} className="button cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
