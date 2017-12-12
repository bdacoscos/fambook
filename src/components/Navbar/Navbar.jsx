import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/activity">Activity</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/calendar">Calendar</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/messages">Messages</Link>
      </div>
      <div>
        <Link to="">Log Out</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span>
          WELCOME, User!
        </span>
      </div>
    </div>
  )
}

export default Navbar;