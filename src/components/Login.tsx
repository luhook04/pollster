import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../App';

const Login = () => {
  const value = useContext(AuthContext);

  const [user, setUser] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });
  const [errorPopup, setErrorPopup] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (errorPopup) {
      setTimeout(() => {
        setErrorPopup(false);
      }, 5000);
    }
  }, [errorPopup]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = JSON.stringify(user);

      const req = await fetch(
        'https://pollster-api-production.up.railway.app/api/login',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      if (req.status !== 200) {
        setErrorMessage('Incorrect Login');
        setErrorPopup(true);
        return;
      }
      const reqJson = await req.json();
      value?.dispatch({ type: 'login', payload: reqJson });
    } catch (err) {
      return err;
    }
  };

  return (
    <div>
      <div>
        <h2>Welcome to Pollster</h2>
      </div>
      <div>
        <form onSubmit={handleLogin} action="POST">
          <div>
            <input
              id="input"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={user.username}
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              required
            ></input>
          </div>
          <div>
            <button type="submit">Login</button>
            <span>or</span>
            <button type="button">Create Account</button>
          </div>
          {errorPopup ? (
            <div>
              <p>{errorMessage}</p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
