import React from 'react';

const SignupForm = () => {
  return (
    <div>
      <header>Sign Up</header>
      <form>
        <div>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Name"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password"/>
        </div>
      </form>
    </div>
  )
}

export default SignupForm;