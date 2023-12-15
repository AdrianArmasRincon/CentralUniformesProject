import React, { useState } from 'react';
import { Button, notification } from 'antd';
import './register.css';
import { register } from '../services/userService';
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
      });
  
      
    // const validateForm = async (e) => {
    //     let isValid = true;
    
    //     //Fullname not null
    //     if (fullName.length != null) {
    //         setFullNameError('Name must be completed');
    //         isValid = false;
    //     }
    //     // Email validation
    //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //       setEmailError('Please enter a valid email address');
    //       isValid = false;
    //     }
    //     // Password validation (you can add more criteria)
    //     if (password.length < 6) {
    //       setPasswordError('Password must be at least 6 characters long');
    //       isValid = false;
    //     }
    //     // Password confirmation
    //     if (confirmPassword.length < 6) {
    //         setConfirmPasswordError('Password must be at least 6 characters long');
    //         isValid = false;
    //     }
    //     // password equal
    //     if (confirmPassword != password) {
    //         setConfirmPasswordError('Password must me equal to the first one');
    //         isValid = false;
    //     }
    //     //checkbox
    //     if (agreeToTerms != true) {
    //         setAgreeToTermsError('You must agree privaty policy');
    //         isValid = false;
    //     }     
    //     return isValid;
    //   };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      };
    
      const registerUser = async (e) => {
        e.preventDefault();
    
        console.log(credentials.name, credentials.email, credentials.password);
        await register(credentials)
        notification.success({message:'User registered successfully',duration:5})
      };
    
      const Cancel = (e) => {
        e.preventDefault();
    
        setCredentials({
          email: '',
          password: '',
        });
      };
    
    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%', 
    };

    const buttonStyle = {
        backgroundColor: '#69C04C',
        borderColor: '#69C04C',
        color: 'white',
        width: '33%',
        borderRadius: '40px',
    };

    return (
        <div className="vertical-split-su">
            <div className="left-half-su">
                <div className="iconPosition-su">
                    <Link to="/">
                        <img src="/assets/img/menulogo.png" 
                            alt="go home"
                            style={{
                                width: '120%',   
                                height: '120%', 
                            }}
                        />
                    </Link>
                </div>
                <div className="logoPosition-su">
                    <img src="\assets\img\icon.png" 
                        alt="Central Uniformes logo"
                        style={{
                            width: '80%',   
                            height: '80%', 
                        }}
                    />
                </div>
            </div>

            <div className="right-half-su customTopRegister">
                <h1 className='myTitle'>Sign up</h1>
                <h3 className='mySubtitle'>Enter your intranet account details to continue</h3>
                <br></br>       
                <form onSubmit={registerUser} className='customFormMo3'>
                    <div className='container-su'>
                        <label htmlFor="username">Name</label>
                        <input
                            placeholder="Write your full name"
                            className="shadow-su"
                            id="name"
                            name="name"
                            type="text"
                            value={credentials.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='container-su'>
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Enter your intranet email"
                            className="shadow-su"
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='container-su'>
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Enter your password"
                            className="shadow-su"
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password} 
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className='container-su terms-su'>
                        <label>
                        <div className='chckbxPdding'>
                            <input 
                                className="checkbox-su"
                                type="checkbox"
                                name="agreeToTerms"
                                // required  
                            />
                            <span className="custom-checkbox-su" />
                            
                            <p className='terms'>&nbsp;&nbsp;&nbsp;By signing up, you agree with privaty policy</p>
                            </div>
                        </label>
                        
                    </div>
                    <div style={buttonContainerStyle}>
                        <Button style={buttonStyle} className='btnResolMov' type="submit" onClick={registerUser}>
                            Register
                        </Button>
                    </div>
                </form>
                <div className='container-su login-su'>
                    <Link to="/LogIn">  
                        <p className='goToLogIn'>Already have a Central Uniformes intranet Log in</p>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
