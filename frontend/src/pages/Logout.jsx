import React, { useContext } from 'react';
import AuthContext from './AuthContext.jsx';
 
const Logout = () => {
  const { logout } = useContext(AuthContext);
 
  return <button onClick={logout}>Logout</button>;
};
 
export default Logout;