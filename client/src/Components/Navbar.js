import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as service from './services/data';
import { FeedbackContext } from '../context/FeedbackContext';

const Navbar = () => {
  const history = useHistory();
  const { feedbackByName } = useContext(FeedbackContext);
  const peopleName = "start";

  const onClick = (e) => {
    e.preventDefault();

    service.logout();
    feedbackByName(peopleName);
    history.push('/');
  };

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
        <Link  onClick={onClick} to='/' style={{
          display: 'flex',
          textDecoration: 'none'
          }}>Logout</Link>
    </div>
  )
}

export default Navbar