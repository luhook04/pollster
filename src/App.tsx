import React, { createContext, useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import authReducer from './authReducer';

const AuthContext = createContext();

const App = () => {
  interface InitStateValue {
    isAuthenticated: boolean;
    token: string;
  }

  const initialState: InitStateValue = {
    isAuthenticated: false,
    token: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token: string = localStorage.getItem('token');

    token && dispatch({ type: 'login', payload: { token: token } });
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header></Header>
      </div>
    </AuthContext.Provider>
  );
};

export { App, AuthContext };
