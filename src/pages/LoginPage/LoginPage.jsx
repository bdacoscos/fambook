import React from 'react';
import LoginForm from './../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div className="container">
      <LoginForm
        {...props}
        handleLogin={props.handleLogin}
      />
    </div>
  )
};


export default LoginPage;