import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google'
 
const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const register = async (name, email, password) => {
    try {
    const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };
 
  const login = async (email, password) => {
    try {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };
 
  const googleLogin = useGoogleLogin({
    onSuccess: async ( response) => {
      try{
        const res = await axios.post("", { token: response.credential});

        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
      }
      catch(err){
        console.error(err.response.data.message)
      }
      onError: (error) =>{
        console.error('Google login failed:', error);
      }
    }
  })
 
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
 
  return (
    <AuthContext.Provider value={{ user, register, login, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;