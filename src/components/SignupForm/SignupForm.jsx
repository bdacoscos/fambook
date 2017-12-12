import React from 'react';

const SignupForm = () => {
  return (
    <div>
      <header>Sign Up</header>
      <form>
        <div>
          <input type="text" placeholder="Name"/>
        </di>
        <div>
          <input type="email" placeholder="Name"/>
        </div>
        <div>
          <input type="password" placeholder="Password"/>
        </div>
        <div>
          <input type="password" placeholder="Confirm Password"/>
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

export default SignupForm;