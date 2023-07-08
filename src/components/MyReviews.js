import React, { useState } from 'react';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


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
        <div className="mt-6">



          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 subject">
            
            <div className="sm:col-span-4">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Add a Review! 🐼</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">Keep your ratings in one place.</p>
              
              
              <div className="mt-2">
                <label htmlFor="restaurant-name" className="block text-sm font-medium leading-6 text-gray-900">
                Restaurant 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="restaurant-name"
                  id="restaurant-name"
                  autoComplete="given-name"
                  placeholder='Restaurant name'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  placeholder='Menu name'
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
                 placeholder="Rate me 🐼"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                What I thought...🤔
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Write your critique, thoughts, Mhmmms and Ahhhs! "
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>


              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
              </div>
                          
          
              </div>
                     <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
       <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-purple shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-indigo-600">Save</button>
      </div>
          </div>
           
          </div>
        </div>



      </div>


    </form>




</>
  )



}

export default MyReviews