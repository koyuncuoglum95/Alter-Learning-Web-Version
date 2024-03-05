import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const navigate = useNavigate();
 
// Handle form Submit
const handleLogin = () => {
  const emailInput = email.trim();
  const passwordInput = password.trim();

  if (emailInput === '' || passwordInput === '') {
    toast.error("Please fill in all fields");
    return;
  }

  let loginSuccessful = false;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const dataLocal = JSON.parse(localStorage.getItem(key));

    if (dataLocal.email === emailInput && dataLocal.password === passwordInput) {
      loginSuccessful = true;
      break;
    }
  }

  if (loginSuccessful) {
    toast.success("Login successful");
    navigate("/verification");
  } else {
    toast.error("Invalid email or password");
  }
};

    return(
        <div className="header">
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <div className="box">
            <div className="form">
                <div className="tlt"> Login </div>
                <div className="sub-tlt">Please enter your details below.</div>
                
                <form action="#">
                        <div className="users">
                            <div className="inp-box">
                                <label htmlFor="Email" className="detail"/>
                                <input type="text" name="Email" id="email" placeholder="Enter Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="inp-box">
                                <label htmlFor="Password" className="detail"/>
                                <input type="text" name="password" id="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div> 
                        </div>
                        <button type="submit" className="btn" onClick={handleLogin}> Login </button>
                      <ToastContainer /> 
                    </form>
               
                
            </div>  
          </div> 
        </div>
    );

};
export default Login;