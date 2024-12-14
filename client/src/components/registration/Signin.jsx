import './signin.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/authSlice';

const Signin = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signin({
        email: state.email,
        password: state.password,
      })
    );
  };

  return (
    <div className='signin-form'>
      <div className='signin-form__wrapper'>
        <form className='signin-form__content' onSubmit={handleSubmit}>
          <h4 className='signin-form__title'>Sign In</h4>

          <div className='signin-form__group'>
            <input
              type='email'
              name='email'
              value={state.email}
              placeholder='Enter Email'
              onChange={handleChange}
              className='signin-form__input'
            />
          </div>

          <div className='signin-form__group'>
            <input
              type='password'
              name='password'
              value={state.password}
              placeholder='Enter Password'
              onChange={handleChange}
              className='signin-form__input'
            />
          </div>

          <div className='signin-form__group'>
            <button className='signin-form__button'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
