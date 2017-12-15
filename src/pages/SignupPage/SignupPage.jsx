import React from 'react';
import SignupForm from './../../components/SignupForm/SignupForm';

const SignupPage = (props) => {
  return (
    <div className="container">
      <SignupForm
        {...props}
        handleSignup={props.handleSignup}
      />
    </div>
  )
};


export default SignupPage;