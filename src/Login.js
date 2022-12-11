import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import loginCss from './css/login.module.scss'
import arrow_right from './static/img/works/arrow_right.svg'
import { HiArrowLongRight } from "react-icons/hi2"

const Login = () => {
  var isDoubleCheckDisabled = 'not-allowed';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  if(email && password){
    isDoubleCheckDisabled = 'pointer';
  }else{
    isDoubleCheckDisabled = 'not-allowed';
  }
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/about");
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setWarning('Wrong password, please try again.');
          setTimeout(() => setWarning(''), 2000);
          console.log(errorCode, errorMessage)
      });
  }
  return(
    <div id={loginCss.login}>
      <div className={loginCss.login_container}>                                            
        <p className={loginCss.login_title_prop}> Hello, welcome to Tai, Tung-En’s portfolio. </p>                       
        <div className={loginCss.login_description_container}>
          <span className={loginCss.login_description_prop}>ポートフォリオをご覧いただきありがとうございます。</span>
          <span className={loginCss.login_description_prop}>事前に提示されたメールアドレスとパスワードをご記入ください。</span>
        </div>
        <form>                                              
          <div className={loginCss.login_field_container}>
            <label htmlFor="email-address" className={loginCss.login_field_title_prop}>
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"                                    
              required                                                                                
              onChange={(e)=>setEmail(e.target.value)}
              className={loginCss.input_field_prop}
            />
          </div>

          <div className={loginCss.login_field_container}>
            <label htmlFor="password" className={loginCss.login_field_title_prop}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"                                    
              required                                                                                
              // placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              className={loginCss.input_field_prop}
            />
          </div>
                                
          <div className={loginCss.warning_prop}>{ warning }</div>
          <div>
            <button
              onClick={onLogin}                                        
              style={{cursor: isDoubleCheckDisabled}}
            >      
              <span className={loginCss.button_inside_prop}>Get start 🧐&ensp;<HiArrowLongRight/> </span>
            </button>
          </div>                               
        </form>
      </div>
    </div>
  )
}
export default Login