import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
      Daca ai cont te rugam sa te loghezi
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Introdu Email'
            value={values.username}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
      
        <div className='form-inputs'>
          <label className='form-label'>Parola</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Introdu Parola'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
       
        
        <button className='form-input-btn' type='submit'>
        Conectare
        </button>
        <span className='form-input-login' style = {{color:"white"}}>
       Nu ai cont? Login <a href='/sign'>Creeaza Cont</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
