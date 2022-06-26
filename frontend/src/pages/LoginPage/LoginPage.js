import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    // dispatch(login(userData));
  };

  return (
    <div className='LoginPage'>
      <div className='LoginPage-container'>
        <h1>Login</h1>
        <form className='LoginPage-form' onSubmit={onSubmit}>
          <label htmlFor='email' className='mt-24'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Enter your email'
            required
            className='text-input'
          />
          <label htmlFor='password' className='mt-24'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='Enter password'
            required
            className='text-input'
          />
          <button className='button button-block button-coral mt-36'>
            Login
          </button>
        </form>
        <div className='LoginPage-link'>
          <Link to='/register'>Need an account?</Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
