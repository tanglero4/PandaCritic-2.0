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
<div>
           <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 signup">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="image/panda-logo.png"
            alt="PandaCritic"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 logo">
          PandaCritic
          </h2>
        </div>
</div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
              <div >

              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 signup-form">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name-signup"
                  name="text"
                  type="text"
                  value="Enter name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email-signup"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value="example@email.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 links">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password-signup"
                  name="password"
                  type="password"
                  placeholder="******************"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div> 
           </form> 

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 links">
              Sign in
            </a>
          </p>
        </div>

    </>

</div>

)
}


export default SignupForm;