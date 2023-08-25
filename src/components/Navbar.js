import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-brand">
          <h1>BookStore CMS</h1>
        </li>
        <li className="navbar-brand">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar-brand">
          <NavLink to="/categories">categories</NavLink>
        </li>
      </ul>
      <div className="user-icon">
        <FaUser color="blue" size={20} />
      </div>
    </nav>
  );
}

export default Navbar;
