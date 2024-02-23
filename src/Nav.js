import React, { useState, useEffect } from 'react';
import Search from './Search';
import ProfileDropdown from './ProfileDropdown';

import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);
  
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_logo">
        <img
          className="nav_logo_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>

      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">TV Shows</li>
        <li className="navbar-link">Movies</li>
        <li className="navbar-link">Latest</li>
        <li className="navbar-link">My List</li>
      </ul>
      <Search />


      <div className="nav_avatar">
        <ProfileDropdown />
      </div>
    </div>
  )
}

export default Nav
