import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { register, reset } from '../../features/auth/authSlice';

import './RegisterPage.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, username, email, password, password2 } = formData;

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      const userData = {
        name,
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div className='RegisterPage'>
      <div className='RegisterPage-container'>
        <h1>Register</h1>
        <form className='RegisterPage-form' onSubmit={onSubmit}>
          <label htmlFor='name' className='mt-24'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={onChange}
            placeholder='Enter your name'
            required
            className='text-input'
          />
          <label htmlFor='username' className='mt-24'>
            Username
          </label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={onChange}
            placeholder='Enter your username'
            required
            className='text-input'
          />
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
          <label htmlFor='password2' className='mt-24'>
            Confirm Password
          </label>
          <input
            type='password'
            id='password2'
            name='password2'
            value={password2}
            onChange={onChange}
            placeholder='Confirm password'
            required
            className='text-input'
          />
          <button className='button button-block button-coral mt-36'>
            Register
          </button>
        </form>
        <div className='RegisterPage-link'>
          <Link to='/login'>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
