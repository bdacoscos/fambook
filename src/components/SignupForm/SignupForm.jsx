import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
      .then(()=> {
        this.props.handleSignup();
        this.props.history.push('/join');
      })
      ;
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.lastName && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="medium-margins">
        <header className="arvo-font bigger-font">Sign Up</header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={(e) => this.handleChange('firstName', e)} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={(e) => this.handleChange('lastName', e)} />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.handleChange('email', e)} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.handleChange('password', e)} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={this.state.passwordConf}
              onChange={(e) => this.handleChange('passwordConf', e)} />
          </div>
          <div>
            <button className="waves-effect waves-light btn blue accent-3" disabled={this.isFormInvalid()}>
              Sign Up
            </button>
            &nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm;