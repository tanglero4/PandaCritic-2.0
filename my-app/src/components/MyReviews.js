import React, { useState } from 'react';

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
    <section class="hero is-small">
    
    {/* <!-- Hero content: will be in the middle --> */}
  
    <div class="hero-foot">
        <nav class="tabs">
                <ul>
                  <li class="is-active">My Reviews</li>
                    <li><a href="/explore" class="has-text-white">Explore</a></li>
                </ul>
          </nav>
    </div>
</section>

<div class="review">
<div class="container">
  <div class="form-container">
    <form class="new-food-form">
      <div class="field">
        <h1  class="has-text-link-dark">Add a new food review!</h1> 
        <label for="food_name">
        Name:
        </label>
      </div>
    </form>
  </div>
</div>
</div>
</>
  )



}

export default MyReviews