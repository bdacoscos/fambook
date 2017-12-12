import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <header>Sign Up</header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Name" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div>
            <button>
              Sign Up
            </button>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm;