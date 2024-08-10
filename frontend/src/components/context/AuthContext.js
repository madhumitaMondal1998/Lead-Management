// frontend/src/context/AuthContext.js
import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PROTECTED_DATA_SUCCESS':
      return { ...state, protectedData: action.payload };
    case 'FETCH_PROTECTED_DATA_FAILURE':
      return { ...state, error: action.error };
    case 'NO_TOKEN_FOUND':
      return { ...state, error: 'No token found' };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { protectedData: null, error: null });

  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/protected', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        dispatch({ type: 'FETCH_PROTECTED_DATA_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'FETCH_PROTECTED_DATA_FAILURE', error: err.response ? err.response.data : err.message });
      }
    } else {
      dispatch({ type: 'NO_TOKEN_FOUND' });
      console.error('No token found');
    }
  };

  return (
    <AuthContext.Provider value={{ state, fetchProtectedData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
