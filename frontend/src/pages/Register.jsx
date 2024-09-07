import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext.jsx';
 
const Register = () => {
  const { registerconst, googleLogin} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const validateForm = () => {
    const newErrors = {};
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);  // Calls the register function from AuthContext
  };
 
  return (

    <div className="min-h-screen ">
      <div className='w-full bg-white mx-auto'>
            <div className='w-full flex justify-between bg-blue-600 border-b-2 border-gray-100 '>
                <div className='mr-7 ml-2 px-4 py-2 flex font-extrabold text-2xl tracking-tight '>
                <img src='/src/assets/calender.png' className='mr-2 invert brightness-0 ' width="35px"/>
                </div>
                <div className='bg-gray-800'></div>
                <div className='flex justify-end'>
                    <button className='border rounded border-transparent mr-2 ml-2 my-2 px-4 py-2 bg-white flex text-blue-600'>Login </button>
                    <Link to="/register"><button className='border rounded border-transparent text-white ml-2 mr-7 my-2 px-4 py-2'>SignUp</button></Link>
                </div>
            </div>
            <div className='w-96 mx-auto mt-10'>
              <p className='text-2xl text-blue-600 py-4'>Signup</p>
              <div className='border rounded border-solid border-2 border-sky-500 w-96 p-4 text-center'>
              <form onSubmit={handleSubmit}>
                  <input 
                  placeholder="Enter your email"
                  className='w-full border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4'
                  type="email"
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                  required
                  />
                  <input 
                  placeholder="Enter your email"
                  className='w-full border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4'
                  type="email"
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                  required
                  />

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
                  bg-blue-600 my-2 py-2 px-4 text-gray-100 mt-4'
                  type="submit"
                  > Login </button>
                  <p className=''>Don't have  an account? <a>Signup</a></p>
              
                  <button 
                  className='w-3/6 mx-auto border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blue-600 my-2 py-2 px-4  text-gray-100 mt-4 '
                  onClick={googleLogin}
                  type="submit"
                  > Login with Google </button>
        
            </form>
            </div>
          </div>
        </div>
    </div>
    
  );
};
 
export default Register;