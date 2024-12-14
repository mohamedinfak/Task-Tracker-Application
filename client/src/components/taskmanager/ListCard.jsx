/* eslint-disable react/prop-types */
import "./listcard.css";
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { arrowClick, deleteItem } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

const ListCard = ({ item }) => {
  // Destructure 'item' directly
  const dispatch = useDispatch();

  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  return (
    <div>
      <ul className={`menu ${item.status === "done" ? "completed" : ""}`}>
        <li>
          <p>{item._id}</p>
        </li>
        <li>
          <p>{item.task.toUpperCase()}</p> {/* Corrected the typo */}
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
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
