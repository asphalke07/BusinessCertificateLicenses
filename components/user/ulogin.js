"use client";
import { Router, useRouter } from "next/router";
import React from "react";

const UserLogin = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("user/signup");
  };
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="loginform" action="#">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input className="logininput" type="text" placeholder="Name" />
            <input className="logininput" type="email" placeholder="Email" />
            <input
              className="logininput"
              type="password"
              placeholder="Password"
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="loginform" action="#">
            <h1>Log in</h1>
            <input className="logininput" type="email" placeholder="Email" />
            <input
              className="logininput"
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button>Log In</button>
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
              <button class="ghost" id="signUp" onClick={handleClick}>
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