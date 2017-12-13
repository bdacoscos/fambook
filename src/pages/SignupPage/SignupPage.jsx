import React, { Component } from 'react';
import SignupForm from './../../components/SignupForm/SignupForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div>
        <SignupForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleSignup={this.props.handleSignup}
        />
        <p>{this.state.message}</p>
      </div>
    )
  }
};


export default SignupPage;