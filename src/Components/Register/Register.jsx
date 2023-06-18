import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import joi from "joi";

export default function Register() {

  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',
  });
  const [Error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorValidation, setErrorValidation] = useState([]);
  let navigate = useNavigate();
// console.log(errorValidation);

  function getUserData(e) {
    let userData = { ...user };
    userData[e.target.name] = e.target.value;
    setUser(userData);

  }
  async function SendRegisterdData() {
    try {
      let { data } = await axios.post(`https://form-git-master-dev-a7med.vercel.app/api/auth/signUp`, user);

    if (data.message === 'success') {
      setIsLoading(false);
      //login
      navigate('/login');
    }
    } catch (error) {
      setError(error.response.data.Error);
      setIsLoading(false);
    }
  }
  function submitData(e) {
    setIsLoading(true);
    e.preventDefault();
    // validateForm();
    // SendRegisterdData();
    let validation = validateForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorValidation(validation.error.details);
      showAlert();
    }
    else {
      SendRegisterdData();
    }

  }
  function validateForm() {
    let schema = joi.object({
      first_name: joi.string().alphanum().min(3).max(15).required(),
      last_name: joi.string().alphanum().min(3).max(15).required(),
      age: joi.number().min(15).max(80).required(),
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().pattern(/^[A-Z]+[a-z]+[0-9]{6,}$/).required()
    });
    return schema.validate(user, { abortEarly: false }) ;
  }
function showAlert(inputName){
  let alert=errorValidation.filter((error)=>{return error.context.key===inputName})
  // null safety
  if(alert[0]?.context.key==="password"){
    return <p className='text-danger'>Password must contain capital char,small char and 6 or more numbers</p>
  }
  else{
    return <p className='text-danger'>{alert[0]?.message}</p>
  }
}
  return (
    <>
    <div className="row gx-0 my-5 mx-3">
      <div className="col-lg-6 d-none d-lg-block form-img">

      </div>
      <div className="col-lg-6 form-content ">
        <form className='mx-4' onSubmit={submitData}>
          <h4 className='text-center mt-5'>Create My Account!</h4>
          {Error.length > 0 ?
            <div className="alert alert-danger my-2 p-1">{Error}</div>: ''}
          <div className="name-details d-flex justify-content-between ">
            <input onChange={getUserData} type="text" placeholder='First Name' className='form-control w-50 my-3 me-3 py-2 input-deco ' name="first_name" />
            {errorValidation.length>0?showAlert('first_name'):''}

            <input onChange={getUserData} type="text" placeholder='Last Name' className='form-control w-50 my-3 py-2 input-deco' name="last_name"/>
              {errorValidation.length>0?showAlert('last_name'):''}

          </div>
          <input onChange={getUserData} type="email" placeholder='Email Address' className='form-control w-100 my-3 py-2 input-deco' name="email"/>
            {errorValidation.length>0?showAlert('email'):''}

          <input onChange={getUserData} type="number" placeholder='Age' className='form-control w-100 my-3 py-2 input-deco' name="age"/>
            {errorValidation.length>0?showAlert('age'):''}

          <input onChange={getUserData} type="password" placeholder='Password' className='form-control w-100 my-3 py-2 input-deco' name="password"/>
            {errorValidation.length>0?showAlert('password'):''}

          <button type="submit" className='btn btn-form w-100 my-3 py-2 text-white border border-dark rounded-2'  >{isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : 'Create Account'}</button>
          <p className=''>This site is protected by reCAPTCHA and the Google <a className='text-muted text-decoration-underline' target={'_blank'} rel='noreferrer' href="https://policies.google.com/privacy">Privacy Policy</a>  and <a className='text-muted text-decoration-underline' target={'_blank'} rel='noreferrer' href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
          <hr />
          <p className='my-5 text-capitalize text-center'>already a member? <Link to="/login" className='text-decoration-none'>Login?</Link></p>



        </form>
      </div>
    </div>
    
    
    
    </>
  )
}
