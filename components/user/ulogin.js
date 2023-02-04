"use client";

import { Router, useRouter } from "next/router";
import React from "react";
import { useEffect,useState } from "react";
import {db} from "../../firebase-config";
import {getDocs,collection} from "@firebase/firestore"

const UserLogin = () => {
  const router = useRouter();
  
  const [users,setUsers] =useState([]);
  const [userFoundBool,setUserFoundBool]=useState(false);

  const userCollectionRef=collection(db,"registerUser");

  const userNotFound=()=>{
    alert("You have entered wrong Email or Password");
    router.push("/user");
  }
  const userFound=()=>{
    alert("Logged in Successfully");
    router.push("/user/employeeNo");
  }


  const handleClickLogIn = (event) => {
    // event.preDefault();
    var count=0;
    event.preventDefault();
    const currentEmail=event.target.email.value;
    const currentPassword=event.target.password.value;
    // console.log(currentUserEmail);
    // console.log(event.target.email.value);
    // console.log(event);

      users.map((user)=>{
        
          user.email === currentEmail && user.password === currentPassword ?(setUserFoundBool(true)):(count=count+1)
        
      })
      
      {
        userFoundBool===true?(userFound()):(userNotFound())
      }
    // router.push("user/signup");
  };

  const handleClickSignUp = () => {
    
    router.reload(window.location.pathname)
};

  useEffect(()=>{
    const getUsers=async()=>{
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }

    getUsers();
  },[]);

  return (
    <div className="loginbody">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="loginform" onSubmit={handleClickSignUp}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input className="logininput" type="text" placeholder="Name" />
            <input className="logininput" type="email" placeholder="Email" />
            <input
              className="logininput"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>


        <div className="form-container sign-in-container">
          <form className="loginform" onSubmit={(e)=>handleClickLogIn(e)} >
            <h1>Log in</h1>
            <input className="logininput" name="email" id="email" type="email" placeholder="Email" />
            <input
              name="password"
              id="password"
              className="logininput"
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Log In</button>
          </form>
        </div>


        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Log In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" type="submit" id="signUp" >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;