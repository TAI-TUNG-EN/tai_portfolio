import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import loginCss from './css/login.module.scss'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/about")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
    return(
      <div id={loginCss.login}>
        <div className={loginCss.login_container}>                                            
          <p> Welcome to Tai, Tung-En's Portfolio! </p>                       
          <form>                                              
            <div className={loginCss.login_field_container}>
              <label htmlFor="email-address">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"                                    
                required                                                                                
                placeholder="Email address"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className={loginCss.login_field_container}>
              <label htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"                                    
                required                                                                                
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
                                  
            <div>
              <button                                    
                onClick={onLogin}                                        
              >      
                Login                                                                  
              </button>
            </div>                               
          </form>
        </div>
      </div>
    )
}
export default Login