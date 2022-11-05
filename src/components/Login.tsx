import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../App';
const Login = () => {
  const value = useContext(AuthContext);

  const logValue = () => {
    console.log(value);
  };

  return (
    <div>
      <div>
        <h2>Welcome to Pollster</h2>
      </div>
      <div>
        <form action="POST">
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password-confirm"
              required
            ></input>
          </div>
          <div>
            <button type="submit">Login</button>
            <span>or</span>
            <button onClick={logValue} type="button">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
