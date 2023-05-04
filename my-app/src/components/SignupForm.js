import React, { useState } from 'react';

function SignupForm() {

    const signupFormHandler = async (event) => {
        event.preventDefault();
      
        const name = document.querySelector('#name-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
      
        if (name && email && password) {
            const response = await fetch('/api/users', {
              method: 'POST',
              body: JSON.stringify({ name, email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (response.ok) {
              const loginResponse = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
              });
        
              if (loginResponse.ok) {
                document.location.replace('/');
              } else {
                alert(loginResponse.statusText);
              }
            } else {
              alert(response.statusText);
            }
          }
        };



        return (
            <section class="is-fullheight">
  <div class="container">
    <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
 
 {/* {{!-- spacer column --}} */}
 <div class="column"></div>
 {/* {{! Signup code }} */}
        <div class="column is-flex-direction-row is-half">
        <h2 class="signup">Signup</h2>
        <form action="" class="signup-form box pb-5">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                id="name-signup"
                placeholder="Name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user fa-sm"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" id="email-signup"/>
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
              <input class="input" type="password" placeholder="Password" id="password-signup"/>
              <span class="icon is-small is-left">
                <i class="fas fa-lock" ></i>
              </span>
            </p>
          </div>
          <div class="field">
            <button class="button has-text-link-dark pt-1">
              Signup
            </button>
          </div>
        </form>
        </div>
        <div class="column"></div>
    </div>
  </div>
 </section>
        )


}

export default SignupForm;