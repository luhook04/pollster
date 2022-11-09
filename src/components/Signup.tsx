import React, { useState, useContext, useRef, useEffect } from 'react';

const Signup = ({
  signupForm,
  setSignupForm,
}: {
  signupForm: boolean;
  setSignupForm: any;
}) => {
  const [user, setUser] = useState<{
    username: string;
    password: string;
    'confirm-password': string;
  }>({
    username: '',
    password: '',
    'confirm-password': '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [errorPopup, setErrorPopup] = useState<boolean>(false);

  useEffect(() => {
    if (errorPopup) {
      setTimeout(() => {
        setErrorPopup(false);
        setErrors([]);
      }, 3000);
    }
  }, [errorPopup]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = JSON.stringify(user);

      const req = await fetch(
        'https://pollster-api-production.up.railway.app/api/sign-up',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      if (req.status === 404) {
        setErrorPopup(true);
        const reqJson = await req.json();
        reqJson.errors.forEach((element: any) => {
          let msg = element.msg;
          setErrors((errors) => [...errors, msg]);
        });
      } else {
        setSignupForm(false);
      }
    } catch (err) {
      return err;
    }
  };
  console.log(errors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <span>&times;</span>
      <h3>Signup</h3>
      <form action="POST" onSubmit={handleSignup}>
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
        {errorPopup
          ? errors.map((element, index) => {
              return <p key={index}>{element}</p>;
            })
          : null}
      </form>
    </div>
  );
};

export default Signup;
