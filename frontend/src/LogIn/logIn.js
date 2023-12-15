import React, { useState } from 'react';
import { Link, useNavigate    } from 'react-router-dom';
import { Button, notification } from 'antd';
import './logIn.css';
import { loginUser } from '../services/userService';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    console.log(credentials.email, credentials.password);

    await loginUser(credentials);
    notification.success({message:'User logged',duration:5})
    gotoHome();
  };

  const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };
  

  const buttonStyle = {
    backgroundColor: '#69C04C',
    borderColor: '#69C04C',
    color: 'white',
    width: '50%',
    borderRadius: '40px',
    marginTop: '5%',
    marginBottom: '5%',
  };


  // const validateForm = (e) => {
  //   let isValid = true;

  //   // Email validation
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     setEmailError('Please enter a valid email address');
  //     isValid = false;
  //   }

  //   // Password validation (you can add more criteria)
  //   if (password.length < 6) {
  //     setPasswordError('Password must be at least 6 characters long');
  //     isValid = false;
  //   }

  //   return isValid;
  // };


  return (

    <div className="vertical-split">  
      <div className="left-half">
        <Link to="/">
          <div className="iconPosition">
            <img src="\assets\img\menulogo.png"
              alt="go home"
              style={{
                width: '120%',
                height: '120%',
              }}
            />
          </div>
        </Link>
        <div className="logoPosition">
          <img src="\assets\img\icon.png"
            alt="Central Uniformes logo"
            style={{
              width: '80%',
              height: '80%',
            }}
          />
        </div>
      </div>



      <div className="right-half">
        <form onSubmit={(e) => login(e)}>
          <h1>Log in</h1>
          <div className="container">
            <h3 className='h3CustomSizelI'>Enter your intranet account details to continue</h3>
            <div className="fieldDiv">
              <label htmlFor="email">Email</label>
              <br></br>

              <input
                placeholder='Write your username or email'
                type="email"
                id="email"
                name='email'
                className='shadow-li'
                value={credentials.email}
                onChange={handleInputChange}
                required
              />
              {/* {emailError && <p className="error">{emailError}</p>} */}
            </div>
            <div className="fieldDiv">
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                type="password"
                className='shadow-li'
                placeholder='Write your username or email'
                id="password" 
                name="password" 
                value={credentials.password} 
                onChange={handleInputChange}
                required
              />
              {/* {passwordError && <p className="error">{passwordError}</p>} */}
            </div>
          </div>
          <div className="btnDiv">
            <Button type="submit" style={buttonStyle} onClick={login}>Log in</Button>
          </div>


          <div className=" margin-left: 24%;">
            <Link to="/Register">
              <p className='goToRegisterLI'>
                I do not have a Central Uniformes intranet account  Register
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;