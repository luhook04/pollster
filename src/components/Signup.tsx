import React, { useState, useContext, useRef, useEffect } from 'react';

const Signup = () => {
  const [user, setUser] = useState<{
    username: string;
    password: string;
    'confirm-password': string;
  }>({
    username: '',
    password: '',
    'confirm-password': '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <span>&times;</span>
      <h3>Signup</h3>
      <form action="POST">
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
            value={user['confirm-password']}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
