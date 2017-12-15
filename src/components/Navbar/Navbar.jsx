import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let nav = props.user ?
    <nav className="nav-wrapper  blue darken-3">
    <div className="container">
      <Link to="/" className="brand-logo arvo-font bigger-font center">FamBook</Link>
      <ul id="nav-mobile">
        <div className="left">
          <li>
            <Link to="/activity">Activity</Link>
          </li>
          <li>
            <Link to="/join">Join Page</Link>
          </li>
        </div>
        <div className="right">
        <li>
          <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
        </li>
        <li>
          WELCOME, {props.user.firstName}!
        </li>
        </div>
      </ul>
    </div>
  </nav>
    :
  <nav className="nav-wrapper light-blue darken-4">
    <div className="container">
      <Link to="/" className="brand-logo arvo-font bigger-font center">FamBook</Link>
        <ul>
          <div className="right">
            <li>
              <Link to='/login'>LOG IN</Link>
            </li>
            <li>
              <Link to='/signup'>SIGN UP</Link>
            </li>
          </div>
        </ul>
    </div>
  </nav>

  return (
    <div>
      {nav}
    </div>
  );
};


export default Navbar;