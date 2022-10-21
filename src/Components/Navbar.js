import React from 'react'

import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <div>
    
      {" "}
      {/* using template literal */}
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode==="light"?"light":"dark"}` } style ={{backgroundColor:props.bgColor}}> 
        <div className="container-fluid"  >
          <Link className="navbar-brand" to="/"> 
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link Link className="nav-link active" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" >
                  {props.about}
                </Link>
              </li>

              <li className="nav-item"></li>
            </ul>
             {/* setting a button for a custom theme  */}
             <div style={{backgroundColor :  props.mode === "light" ? "#9b9696" : "white"}}>
             <button type="button" className="btn btn-primary  btn-sm mx-2 rounded border-dark" onClick={ () =>{props.toogleMode("primary")}} ></button>
             <button type="button" className="btn btn-warning btn-circle btn-sm mx-2 border-dark" onClick={ () =>{props.toogleMode("warning")}} ></button>
             <button type="button" className="btn btn-success btn-circle btn-sm mx-2 border-dark" onClick={ () =>{props.toogleMode("success")}} ></button>
             <button type="button" className="btn btn-danger btn-circle btn-sm mx-2 border-dark" onClick={ () =>{props.toogleMode("danger")}} ></button>
             <button type="button" className="btn btn-secondary btn-circle btn-sm mx-2 border-dark" onClick={ () =>{props.toogleMode("secondary")}} ></button>
             <button type="button" className="btn btn-dark btn-circle btn-sm mx-2 border-dark" onClick={ () =>{props.toogleMode("dark")}} ></button>
             <button type="button" className="btn btn-light btn-circle btn-sm mx-2 border-dark" onClick={ () =>{props.toogleMode("light")}} ></button>
             </div>
            {/* using backticks we can add javascript  using $ signs  */}
            {/* <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toogleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
             
            </div> */}
           
          </div>
        </div>
      </nav>
    </div>
  );

}

Navbar.propTypes = { 
    title: PropTypes.string.isRequired,


}
Navbar.defaultProps = {
    title: 'set title here',
    about: "About us"
}


