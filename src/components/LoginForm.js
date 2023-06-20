import React, { useState } from 'react';

function LoginForm() {

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  return (
    <div>
        <div class="column"></div>
{/* {{!-- login code --}} */}
      <div class="column is-half">
        <h2 class="signup">Login</h2>
        <form action="" class="login-form box">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" id="email-login"/>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" id="password-login"/>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field pt-5">
            <label for="" class="checkbox">
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <div class="field">
            <button class="button has-text-link-dark">
              Login
            </button>
          </div>
          <div class="fielt pt-5">
            Don't have an account?
          </div>
          <div class="field pt-5">
           <button class="button has-text-link-dark"><a href="/signup">
              Signup!
            </a></button>
          </div>
        </form>
      </div>
      {/* {{!-- spacer --}} */}
<div class="column"></div>
       
      </div>
    


  )












}

  

export default LoginForm;