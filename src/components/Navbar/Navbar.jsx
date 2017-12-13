import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let nav = props.user ?
    <div>
      <span className='NavBar-welcome'>
        WELCOME, {props.user.firstName}!
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        <Link to="/activity">Activity</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <Link to="/calendar">Calendar</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <Link to="/messages">Messages</Link>
      </div>
      <div>
        <Link to="/join">Join Page</Link>
      </div>
      <div>
        <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
      </div>
    </div>
    :
    <div>
      <Link to='/login'>LOG IN</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/signup'>SIGN UP</Link>
    </div>;

  return (
    <div>
      {nav}
    </div>
  );
};


export default Navbar;