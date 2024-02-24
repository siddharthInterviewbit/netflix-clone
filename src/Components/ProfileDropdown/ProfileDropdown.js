// ProfileDropdown.js
import React, { useState } from 'react';
import './ProfileDropdown.css'; // Import the CSS file for styling

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logged out');
  };

  return (
    <div className="profile-dropdown-container">
      <div className="profile-button" onClick={toggleDropdown}>
      <img
          className="nav_avatar_img"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Logo"
        />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="menu-item">My Profile</li>
          <li className="menu-item">Account Settings</li>
          <li className="menu-item" onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
