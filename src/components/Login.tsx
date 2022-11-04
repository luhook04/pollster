import React, { useState, useRef, useEffect } from 'react';

const Login = () => {
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
            <button type="button">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
