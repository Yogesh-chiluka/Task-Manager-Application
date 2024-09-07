import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import GoogleLogin from './pages/googleLogin.jsx';
//import Dashboard from './Dashboard';
import {AuthProvider} from './pages/AuthContext.jsx';
import './App.css'

const App = () => {
  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/google-login" element={<GoogleLogin />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
