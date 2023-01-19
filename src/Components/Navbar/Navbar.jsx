import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
export default function Navbar({userData,logout}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark position-fixed top-0 start-0 end-0 p-2 mb-4 ">
        <div className="container">
          <Link className="navbar-brand " to="/">
            <img src={logo} className="img-logo" alt="" />
            Game Over 
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {userData?<ul className="navbar-nav ms-5 me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to=''>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='all'>
                  All
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Platforms
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to='/platforms/pc'>
                    Pc
                  </Link>
                  <Link className="dropdown-item" to='/platforms/browser'>
                    Browser
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort-by
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to='/sort-by/release-date'>
                  release-date
                  </Link>
                  <Link className="dropdown-item" to='/sort-by/popularity'>
                  popularity
                  </Link>
                  <Link className="dropdown-item" to='/sort-by/alphabetical'>
                  alphabetical
                  </Link>
                  <Link className="dropdown-item" to='/sort-by/relevance'>
                  Relevance
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to='/categories/racing'>
                    Racing
                  </Link>
                  <Link className="dropdown-item" to='/categories/sports'>
                    Sports
                  </Link>
                  <Link className="dropdown-item" to='/categories/social'>
                    Social
                  </Link>
                  <Link className="dropdown-item" to='/categories/shooter'>
                    Shooter
                  </Link>
                  <Link className="dropdown-item" to='/categories/open-world'>
                    Open-world
                  </Link>
                  <Link className="dropdown-item" to='/categories/zombie'>
                    Zombie
                  </Link>
                  <Link className="dropdown-item" to='/categories/fantasy'>
                    Fantasy
                  </Link>
                  <Link className="dropdown-item" to='/categories/action-rpg'>
                    Action-rpg
                  </Link>
                  <Link className="dropdown-item" to='/categories/action'>
                    Action
                  </Link>
                  <Link className="dropdown-item" to='/categories/flight'>
                    Flight
                  </Link>
                  <Link className="dropdown-item" to='/categories/battle royale'>
                    Battle-royale
                  </Link>
                  
                </div>
              </li>
            </ul>:''}
            <ul className="navbar-nav  ms-auto mt-2 mt-lg-0">
              
              {userData?<li className="nav-item">
                <span onClick={logout} className="nav-link mx-lg-2  brdr-link hov-style">
                 Logout
                </span>
              </li>:<>  <li className="nav-item">
                <Link className="nav-link mx-2 " to='login'>
                 Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 brdr-link" to='register'>
                 Join Free
                </Link>
              </li></>}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
