import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to FamBook!</h1>
      <Link to='/login'>Log In</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

export default WelcomePage;