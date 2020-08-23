import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-2">
      <div className="container">
        <h6 className="brand-logo">Poke'Times</h6>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
