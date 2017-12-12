import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <header>Log In</header>
      <form>
        <div>
          <input
            type="email"
            placeholder="Email"/>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button>
            Log In
          </button>
          <Link to='/'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;