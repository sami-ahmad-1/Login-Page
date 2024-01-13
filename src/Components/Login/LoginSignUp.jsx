import React, { useState } from 'react';
import './LoginSignUp.css';

// Import icons
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

// Define the LoginSignUp functional component
function LoginSignUp() {

  const [action , setaction] = useState('Sign Up')
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {/* Input fields */}
      <div className="inputs">
        {action=="Login"? <div></div> :         
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' />
        </div> }
        {/* Name input */}


        {/* Email input */}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email'/>
        </div>

        {/* Password input */}
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>

      {/* Forgot Password link */}
      {action=='Sign Up' ? <div></div> :
            <div className="forgot-Password">
            Loss Password? <span>Click Here</span>
          </div>}


      {/* Submit buttons */}
      <div className="Sumbit-Container">
        <div  className={action=='Sign Up'?'Sumbit ':'Sumbit-grey'} onClick={()=>setaction("Sign Up")}>Sign Up</div>
        <div  className={action=='Login'?'Sumbit ':'Sumbit-grey'}  onClick={()=>setaction("Login")}>Login</div>
      </div>
    </div>
  );
}

// Export the LoginSignUp component
export default LoginSignUp;
