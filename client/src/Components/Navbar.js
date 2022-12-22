import React from "react";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useContext(FeedbackContext);

  return (
    <div
      style={{
        // backgroundColor: "rgb(45, 179, 206)",
        backgroundColor: "rgb(69, 201, 253)",
        color: "blue",
        textAlign: "center",
        padding: "4px",
      }}
    >
      <h2 style={{ margin: "0" }}>Health & Relax Center</h2>
      {isAuth ? (
        <Link
          to="/logout"
          style={{
            display: "inline",
            textDecoration: "none",
            backgroundColor: "#ff6a95",
            borderRadius: "10px",
            padding: "3px"
          }}
        >
          Logout
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
