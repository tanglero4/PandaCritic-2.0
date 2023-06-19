import React from 'react';
import 'bulma/css/bulma.min.css'



const Nav = () => {
    return (
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
           
            <a class="navbar-item">
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
        PandaCritic
      </p>
    </div>
  </div>

  {/* <!-- Hero footer: will stick at the bottom --> */}
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>My Reviews</a></li>
          <li><a>Explore</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
    )



}





export default Nav;