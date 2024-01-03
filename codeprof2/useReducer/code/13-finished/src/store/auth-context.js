import React, { useState, useEffect, useReducer } from 'react';

const AuthContext = React.createContext({
  state : {isLoggedIn: false},
  dispatch : (action) => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {isLoggedIn: true};
    case 'LOGOUT':
      return {isLoggedIn: false};
    default:
      return state;
  }
};

export const AuthContextProvider = (props) => {
 // const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [state, dispatch] = useReducer(authReducer, {isLoggedIn: false});

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      dispatch({type: 'LOGIN'});
    }
  }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  // const loginHandler = () => {
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
