import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><h1>BookStore CMS</h1></li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories">categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
