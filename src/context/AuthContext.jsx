import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { login as loginApi, signup as signupApi } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const setAuthData = (data) => {
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const signup = async (formData) => {
    const result = await signupApi(formData);
    if (result.token) {
      setAuthData(result);
    }
    return result;
  };

  const login = async (formData) => {
    const result = await loginApi(formData);
    if (result.token) {
      setAuthData(result);
    }
    return result;
  };

  const value = useMemo(
    () => ({ user, token, signup, login, logout, setAuthData }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};
