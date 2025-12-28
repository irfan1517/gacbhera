import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar h-[10vh]">
      <div className="nav-logo">BRAND</div>
      
      {/* Menu Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><link to="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><link to="/faculty" onClick={() => setIsOpen(false)}>Faculty Information</a></li>
        
        <li><link to="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li><link to="/attendance" onClick={() => setIsOpen(false)}>Mark Attendance</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "animate" : ""}`}></span>
        <span className={`bar ${isOpen ? "animate" : ""}`}></span>
        <span className={`bar ${isOpen ? "animate" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
