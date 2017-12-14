import React, { Component } from 'react';
import SignupForm from './../../components/SignupForm/SignupForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <SignupForm
          {...this.props}
          handleSignup={this.props.handleSignup}
        />
      </div>
    )
  }
};


export default SignupPage;