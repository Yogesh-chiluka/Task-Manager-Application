import { Link } from 'react-router-dom';
import Logout from './Logout.jsx'; // Import Logout component if logged in
import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext.jsx';
import GoogleLoginButton from './googleLogin.jsx'; // Import the GoogleLoginButton component


const Home = () => {
  const { login,googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);  // Calls the login function from AuthContext
  };
 
  return (
    <div className="min-h-screen ">
      <div className='w-full bg-white mx-auto'>
            <div className='w-full flex justify-between bg-blueBar border-b-2 border-gray-100 '>
                <div className='mr-7 ml-2 px-4 py-2 flex font-extrabold text-2xl tracking-tight '>
                <img src='/src/assets/calender.png' className='mr-2 invert brightness-0 ' width="35px"/>
                </div>
                <div className='bg-gray-800'></div>
                <div className='flex justify-end'>
                    <button className='border rounded border-transparent mr-2 ml-2 my-2 px-4 py-2 bg-white flex text-blueBar'>Login </button>
                    <Link to="/register"><button className='border rounded border-transparent text-white ml-2 mr-7 my-2 px-4 py-2'>SignUp</button></Link>
                </div>
            </div>
            <div className='w-96 mx-auto mt-20'>
              <p className='text-2xl text-blueBar py-4'>Login</p>
              <div className='border rounded border-solid border-2 border-blue-500 w-96 p-4 text-center'>
              <form onSubmit={handleSubmit}>
                  <input 
                  placeholder="Enter your email"
                  className='w-full border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
                  
                  <input
                  placeholder="Enter your password here" 
                  className='border w-full rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4 '
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
        
                  />
                  <button 
                  className='w-full  border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blueBar my-2 py-2 px-4 text-gray-100 mt-4'
                  type="submit"
                  > Login </button>
            </form>
            <p className=''>Don't have  an account?  <Link to="/register"><span className='text-blueBar'>Signup</span></Link></p>
                  <button 
                  className='w-3/6 mx-auto border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blueBar my-2 py-2 px-4  text-gray-100 mt-4 '
                  onClick={googleLogin}
                  > Login with Google </button>
                  <GoogleLoginButton />


            </div>
          </div>
        </div>
    </div>
  );
};
 
export default Home;