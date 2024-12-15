import "./listcard.css";
import { BiChevronLeft, BiChevronRight, BiTrash, BiEdit } from "react-icons/bi";
import { arrowClick, deleteItem } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditTask from "./EditTask";

const ListCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Modal state

  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };

  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <ul className={`menu ${item.status === "done" ? "completed" : ""}`}>
        <li>
          <p>{item._id}</p>
        </li>
        <li>
          <p>{item.task.toUpperCase()}</p>
        </li>
        <li>
          <p>{item.status.toUpperCase()}</p>
        </li>
        <li className="action-buttons">
          <button
            disabled={item.status === "backlog"}
            onClick={() => ArrowClick("left")}
          >
            <BiChevronLeft />
          </button>
          <button
            disabled={item.status === "done"}
            onClick={() => ArrowClick("right")}
          >
            <BiChevronRight />
          </button>
          <button onClick={handleDelete} style={{ color: "red" }}>
            <BiTrash />
          </button>
          <button onClick={openEditModal} style={{ color: "yellow" }}>
            <BiEdit />
          </button>
        </li>
      </ul>

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <EditTask
          item={item} 
          onClose={closeEditModal} 
        />
      )}
    </div>
  );
};

export default ListCard;
