import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Click!')
  }

  render() {
    return (
      <div>
        <header>Log In</header>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input type="email" placeholder="Email"/>
          </div>
          <div>
            <input type="password" placeholder="Password"
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
};

export default LoginForm;