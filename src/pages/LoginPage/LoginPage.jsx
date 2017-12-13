import React from 'react';
import LoginForm from './../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div>
      <LoginForm
        {...props}
        handleLogin={props.handleLogin}
      />
    </div>
  )
};


export default LoginPage;