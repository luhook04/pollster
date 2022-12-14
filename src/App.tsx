import React, { createContext, useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import authReducer from './authReducer';

interface ContextType {
  state: {
    isAuthenticated: boolean;
    token: string | null;
  };
  dispatch: React.Dispatch<any>;
}
const AuthContext = createContext<ContextType | null>(null);

const App = () => {
  interface InitStateValue {
    isAuthenticated: boolean;
    token: string | null;
  }
  const initialState: InitStateValue = {
    isAuthenticated: false,
    token: null,
  };
  const [user, setUser] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token: string | null = localStorage.getItem('token');
    if (token !== 'undefined') {
      token && dispatch({ type: 'login', payload: { token: token } });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App">
        {state.isAuthenticated ? (
          <Header user={user} setUser={setUser} />
        ) : (
          <Login user={user} setUser={setUser} />
        )}
      </div>
    </AuthContext.Provider>
  );
};

export { App, AuthContext };
