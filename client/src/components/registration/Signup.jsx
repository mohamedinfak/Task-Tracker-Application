import './signup.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: state.username,
        password: state.password,
        email: state.email,
      })
    );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    // Reset the state to initial values
    setState({
      email: '',
      password: '',
      username: '',
    });
  };

  console.log(state.email, state.password, state.username);

  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>
        <form className='signup-form__content' onSubmit={handleSubmit}>
          <h4 className='signup-form__title'>Sign Up</h4>

          <div className='signup-form__group'>
            <input
              type='text'
              placeholder='Enter Name'
              name='username'
              value={state.username}
              onChange={handleChange}
              className='signup-form__input'
            />
          </div>
          <div className='signup-form__group'>
            <input
              type='email'
              name='email'
              value={state.email}
              placeholder='Enter Email'
              onChange={handleChange}
              className='signup-form__input'
            />
          </div>
          <div className='signup-form__group'>
            <input
              type='password'
              name='password'
              value={state.password}
              placeholder='Enter Password'
              onChange={handleChange}
              className='signup-form__input'
            />
          </div>
          <div className='signup-form__group'>
            <button type='submit' className='signup-form__button'>
              Sign Up
            </button>
            <button
              type='button'
              className='signup-form__button signup-form__button--reset'
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
