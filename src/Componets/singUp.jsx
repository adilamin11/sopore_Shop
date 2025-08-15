import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    products: [],
    login: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value.trimStart(), // prevent leading spaces
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = input;

    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Optional: check if user already exists
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      toast.error('User with this email already exists');
      return;
    }

    localStorage.setItem('user', JSON.stringify(input));
    toast.success('Registration successful');

    setInput({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      products: [],
      login: false,
    });

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className='bg-[url("https://i.pinimg.com/564x/ad/ec/39/adec396486acaed171b2b9dcbed33fa8.jpg")] bg-cover bg-no-repeat w-screen h-screen flex items-center justify-center'>
      <form
        onSubmit={submitHandler}
        className='bg-black bg-opacity-60 border-2 border-white px-4 py-3 w-[500px] max-[425px]:w-[350px] rounded min-h-[400px]'
      >
        <h1 className='text-center text-2xl font-medium mb-4 text-white'>Create a New Account</h1>

        <div className='mb-4'>
          <label className='text-lg text-white'>Name</label>
          <input
            type='text'
            name='name'
            value={input.name}
            onChange={handleChange}
            placeholder='Enter name...'
            className='w-full px-3 py-2 rounded outline-none mt-1'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='text-lg text-white'>Email</label>
          <input
            type='email'
            name='email'
            value={input.email}
            onChange={handleChange}
            placeholder='Enter email...'
            className='w-full px-3 py-2 rounded outline-none mt-1'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='text-lg text-white'>Password</label>
          <input
            type='password'
            name='password'
            value={input.password}
            onChange={handleChange}
            placeholder='Enter password...'
            className='w-full px-3 py-2 rounded outline-none mt-1'
            required
          />
        </div>

        <div className='mb-5'>
          <label className='text-lg text-white'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm password...'
            className='w-full px-3 py-2 rounded outline-none mt-1'
            required
          />
        </div>

        <button
          type='submit'
          className='mb-3 w-full px-3 py-2 bg-violet-300 rounded font-medium active:scale-105 transition duration-150'
        >
          Create Account
        </button>

        <div className='text-center text-white'>
          Already have an account? <Link to='/login' className='underline'>Login</Link>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
