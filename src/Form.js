import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left' style ={{
          textAlign: 'center', // <-- the magic
          fontWeight: 'bold',
          alignItems:'center',
          alignContent:'center',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18
        }}>
       <h1 style = {{color:'white'}}>Azur</h1>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
