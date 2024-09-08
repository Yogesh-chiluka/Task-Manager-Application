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
    if(!formData.firstName) newErrors.firstName = 'First name is required';
    if(!formData.lastName) newErrors.lastName = 'Last name is required';
    if(!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'valid email is required';
    if(!formData.password) newErrors.password = 'Password is required';
    if(!formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Password must match';

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if(Object.keys(validationErrors).length === 0){
      console.log('Form Data Submitted', formData);
    }
    else{
      setErrors(validationErrors);
    }
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
                <Link to="/"><button  className='border rounded border-transparent text-white ml-2 mr-7 my-2 px-4 py-2'>Login </button></Link>
                    <button className='border rounded border-transparent mr-2 ml-2 my-2 px-4 py-2 bg-white flex text-blueBar'>SignUp</button>
                </div>
            </div>
            <div className='w-96 mx-auto mt-10'>
              <p className='text-2xl text-blueBar py-4'>Signup</p>
              <div className='border rounded border-solid border-2 border-blue-500 w-96 p-4 text-center'>
              <form onSubmit={handleSubmit}>
                  <input 
                  placeholder="Enter your First Name" 
                  className='w-full border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4'
                  type="text"
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  />
                  <input 
                  placeholder="Enter your Last Name"
                  className='w-full border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4'
                  type="text"
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  />

                  <input 
                  placeholder="Enter your email"
                  className='w-full border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4'
                  type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  />
                  
                  <input
                  placeholder="Enter your password here" 
                  className='border w-full rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4 '
                  type="password"
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  />

                  <input
                  placeholder="Enter your confirmPassword here" 
                  className='border w-full rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-gray-100 my-2 py-2 px-4 '
                  type="password"
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  />

                  <button 
                  className='w-full  border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blueBar my-2 py-2 px-4 text-gray-100 mt-4'
                  type="submit"
                  > Signup </button>
                  </form>
                  <p className=''>Already have an account? <Link to="/"><span className='text-blueBar'>Login</span></Link></p>
              
                  <button 
                  className='w-3/6 mx-auto border rounded  outline-0 drop-shadow-sm border-gray-300
                  bg-blueBar my-2 py-2 px-4  text-gray-100 mt-4 '
                  onClick={googleLogin}
                  type="submit"
                  >Signup with Google </button>
        
            
            </div>
          </div>
        </div>
    </div>
    
  );
};
 
export default Register;