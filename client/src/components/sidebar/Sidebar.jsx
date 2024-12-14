import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#34495e",
        padding: "20px",
        boxShadow: "4px 0 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
        }}
      >
        <li>
          <h5
            style={{
              color: "white",
              fontSize: "18px",
              textAlign: "center",
              marginBottom: "25px",
              backgroundColor: "#0e98ec",
              borderRadius: "5px",
            }}
          >
            User: {currentUser.username.toUpperCase()}
          </h5>
        </li>
        <li
          style={{
            marginTop: "20px",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
              textDecoration: "none",
              padding: "10px",
              display: "block",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: "20px",
              backgroundColor: isActive ? "#2ecc71" : "yellow", // Active link background color
              borderRadius: "5px",
            })}
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li
          style={{
            marginTop: "20px",
            fontSize: "20px",
            textAlign: "center",
          }}
        ></li>
      </ul>
    </div>
  );
};

export default Sidebar;
