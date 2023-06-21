import React, { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


function MyReviews() {

  const foodFormHandler = async (event) => {
    event.preventDefault();
  
    const foodName = document.querySelector('#food_name').value.trim();
    const foodDescription = document.querySelector('#food_description').value.trim();
    const restaurantName = document.querySelector('#restaurant_name').value.trim();
    const foodRating = document.querySelector('#food_rating').value.trim();
  
    if (foodName || foodDescription || restaurantName || foodRating) {
      const response = await fetch('/api/foods', {
        method: 'POST',
        body: JSON.stringify({ foodName, foodDescription, restaurantName, foodRating }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  return (
    <>




    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <img
            className="mx-auto h-20 w-auto"
            src="image/panda-logo.png"
            alt="PandaCritic"
          />
          <h2 className="text-base font-semibold leading-7 text-gray-900 logo">PandaCritic</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 subject">
          Hero is here
          </p>

 

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 subject">
            
            <div className="sm:col-span-4">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Add a Review! 🐼</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Keep your ratings in one place.</p>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Restaurant name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="restaurant"
                    id="restaurant"
                    autoComplete="restaurant"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Yummsgalore"
                  />
                </div>
                 <label htmlFor="food-name" className="block text-sm font-medium leading-6 text-gray-900">
                Food/Drink name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="food-name"
                  id="food-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
               <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
                Rating 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  value="🐼->🐼🐼🐼🐼🐼"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write your critique, thoughts, Mhmmms and Ahhhs!</p>
              </div>
              
          </div>
           
          </div>
        </div>



      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>




</>
  )



}

export default MyReviews