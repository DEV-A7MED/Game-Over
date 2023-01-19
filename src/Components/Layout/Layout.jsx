import React from 'react';
import { Outlet ,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout({ userData, setUserData }) {
  let navigate = useNavigate();
  //start logout function
  function logout() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }
  return (
    <>
    <Navbar userData={userData} logout={logout}/>
    <div className="container my-5 py-5 position-relative">
    <Outlet/>
    </div>
    
    
    
    </>
  )
}
