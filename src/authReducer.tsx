const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'login':
      const token: string = action.payload.token;
      localStorage.setItem('token', token);

      return {
        ...state,
        isAuthenticated: true,
        token: token,
      };

    case 'logout':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
