import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
      Foloseste Azur astazi!
      Completeaza datele cu atentie, daca doresti o sedinta de instruire 
      in folosirea platoformei bifeaza 'Instruire'
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Introdu Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Introdu Email'
            value={values.email}
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
        <div className='form-inputs'>
          <label className='form-label'>Reintroduce Parola</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Reindrodu Parola'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Creeaza Cont
        </button>
        <span className='form-input-login' style = {{color:"white"}}>
        Ai deja cont? Login <a href='/login'>Login</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
