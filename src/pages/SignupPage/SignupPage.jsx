import React from 'react';
import SignupForm from './../../components/SignupForm/SignupForm';

const SignupPage = (props) => {
  return (
    <div>
      <SignupForm
        {...props}
        handleSignup={props.handleSignup}
      />
    </div>
  )
};


export default SignupPage;