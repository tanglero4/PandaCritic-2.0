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
    <section class="hero is-primary is-small">
  {/* <!-- Hero head: will stick at the top --> */}
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
           
            <a class="navbar-item" id="logout">
              Logout
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  {/* <!-- Hero content: will be in the middle --> */}
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        PandaCritic 🐼
      </p>
    </div>
  </div>

  {/* <!-- Hero footer: will stick at the bottom --> */}
  <div class="hero-foot is-info">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>My Reviews</a></li>
          <li><a href='/explore'>Explore</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</>
  )



}

export default MyReviews