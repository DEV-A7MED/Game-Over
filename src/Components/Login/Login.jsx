import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import joi from "joi";

export default function Login({saveUserData}) {

  let [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [Error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorValidation, setErrorValidation] = useState([]);
  let navigate = useNavigate();


  function getUserData(e) {
    let userData = { ...user };
    userData[e.target.name] = e.target.value;
    setUser(userData);

  }
  async function SendRegisterdData() {
    let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, user);
    // console.log(data);
    if (data.message === 'success') {
      setIsLoading(false);
      localStorage.setItem('userToken',data.token);

      saveUserData();
      //login
      navigate('/');
    }
    else {
      setError(data.message);
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
        <div className="alert alert-danger my-2 p-1">{Error}</div>
        : ''}
          
          <input onChange={getUserData} type="email" placeholder='Email Address' className='form-control w-100 my-3 py-2 input-deco' name="email"/>
        {errorValidation.length>0?showAlert('email'):''}

          <input onChange={getUserData} type="password" placeholder='Password' className='form-control w-100 my-3 py-2 input-deco' name="password"/>
        {errorValidation.length>0?showAlert('password'):''}

          <button type="submit" className='btn btn-form w-100 my-3 py-2 text-white border border-dark rounded-2'  >{isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}</button>
          <Link to="/register" className="text-center">Forget Password?</Link>
          <hr />
          <p className='my-5 text-capitalize text-center'>already a member? <Link to="/register" className='text-decoration-none'>Create Account?</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}

