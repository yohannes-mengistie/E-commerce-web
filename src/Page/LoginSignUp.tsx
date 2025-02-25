import React, { useState } from 'react'
import styles from './CSS/LoginSignUp.module.css'

export const LoginSignUp = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""

  });
  interface FormData {
    username: string;
    password: string;
    email: string;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const changeHandler = (e: ChangeEvent) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  const login =async () =>{
        console.log('login function excuted',formData)
        interface ResponseData {
          success: boolean;
          [key: string]: any;
        }
        let responseData: ResponseData | undefined;
        await fetch('http://localhost:4000/login',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData = data)
    
        if(responseData && responseData.success){
          localStorage.setItem('auth-token', JSON.stringify(responseData));
          window.location.replace("/");
        }
        else{
          alert(responseData && responseData.errors)
        }
      }
  const signup =async () =>{
    console.log('signup function excuted',formData);
    interface ResponseData {
      success: boolean;
      [key: string]: any;
    }
    let responseData: ResponseData | undefined;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response) => response.json()).then((data)=>responseData = data)

    if(responseData && responseData.success){
      localStorage.setItem('auth-token', JSON.stringify(responseData));
      window.location.replace("/");
    }
    else{
      alert(responseData && responseData.errors)
    }
  }

  return (
    <div className={styles.loginsignup}>
      <div className={styles.logincontainer}>
        <h1>{state}</h1>
        <div className={styles.field}>
            {state === "Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type='text' placeholder='your name' />:<></>}
            <input name="email" value={formData.email} onChange={changeHandler}  type="email" placeholder='Email Address' />
            <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='password' />
        </div>
        <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>
        {state === "Sign Up"?<p className={styles.login}>Already have an account? <span onClick={()=>{setState("Login")}}>LogIn</span></p>:<p className={styles.login}>Create an account? <span onClick={()=>setState("Sign Up")}>Click here</span></p>}
        <div className={styles.agree}>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
