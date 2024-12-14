import "./taskmanager.css";
import Sidebar from "../../components/sidebar/Sidebar";
import AddTask from "../../components/taskmanager/AddTask";
import TaskList from "../../components/taskmanager/TaskList";

const TaskManager = () => {
  return (
    <div className="taskmanager-container">
      <div className="taskmanager-sidebar">
        <Sidebar />
      </div>
      <div className="taskmanager-main">
        <div className="taskmanager-addtask">
          <AddTask />
        </div>
        <div className="taskmanager-tasklist">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
