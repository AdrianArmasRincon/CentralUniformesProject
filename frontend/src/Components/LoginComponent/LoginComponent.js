import React, { useState } from 'react';
import './LoginComponent.css';
import { Icon } from '@iconify/react';
//import { Redirect } from 'react-router-dom'; 
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  // State to track login status
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to simulate logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  // If the user is logged in, display welcome message and icon
  if (isLoggedIn) { 
    return (
      <div className='userContainer'>
        <span>
        <Link to="/UserProfile">
            <Icon icon="ant-design:smile-filled" color="#69c04c" className='LogInIconSize' />
            <h3 className='loginusertxt'>&nbsp;&nbsp;&nbsp;Welcome</h3>
          </Link>
        </span>
        <h2>Welcome</h2>
        {/* Add a button or link for logging out */}
        <button onClick={handleLogout}>Welcome</button>
      </div>
    );
  }
  
  // If the user is not logged in, redirect to the login page
  return (
    <div className='userContainer'>
          <Link to="/LogIn">
            <Icon icon="ant-design:frown-filled" color="#df2819" className='LogInIconSize' />
            <h3 className='loginusertxt'>&nbsp;&nbsp;&nbsp;Log in</h3>
          </Link>
         

        {/* Add a button or link for logging out */}
        
      </div>

    /*
    <div className='userContainer'>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
    */
  );
};

export default LoginComponent;
