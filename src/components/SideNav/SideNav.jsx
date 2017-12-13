import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div>
      <h1>SideNav</h1>
      <Link to="/activity">Activity</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/calendar">Calendar</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/messages">Messages</Link>
    </div>
  )
}

export default SideNav;