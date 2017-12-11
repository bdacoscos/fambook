import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/activity">Activity</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/messages">Messages</Link>
    </div>
  )
}

export default Navbar;