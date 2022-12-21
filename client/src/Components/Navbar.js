import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div style={{
        // backgroundColor: "rgb(45, 179, 206)",
        backgroundColor:"rgb(69, 201, 253)",
        color: "blue",
        textAlign: "center",
        padding: '4px'
    }}>
        <h2 style={{ margin: "0"}}>

        Health & Relax Center
        </h2>
        <Link to='/logout' style={{
          display: 'flex',
          textDecoration: 'none'
          }}>Logout</Link>
    </div>
  )
}

export default Navbar