import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="App-header">
 
    <h2 
    style={{ 
      margin: "0",
      backgroundColor: "rgb(69, 201, 253)",
      color: "blue",
      textAlign: "center",
      padding: "4px",
       }}
       >Wellness Center <Navbar /></h2>
       
    </div>
  );
};

export default Header;
