import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      .catch(err => alert('Invalid Credentials'));
  }

  render() {
    return (
      <div>
        <header>Log In</header>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
          </div>
          <div>
            <input type="password" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
          </div>
          <div>
            <button>
              Log In
            </button>
            &nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
};

export default LoginForm;