import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../images/brolichilogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const activePage = location.pathname === '/' ? 'home' : 
                     location.pathname === '/careers' ? 'careers' : '';

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Brolichi Logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links desktop-only">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''}>Testimonials</NavLink>
        <NavLink to="/careers" className={({ isActive }) => isActive ? 'active-btn' : 'nav-btn'}>Careers</NavLink>
      </div>
      <Link to="/contact" className="contact-btn desktop-only">Contact us</Link>

      {/* Mobile Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'active-btn' : 'nav-btn'} onClick={() => setIsMenuOpen(false)}>Careers</NavLink>
          <Link to="/contact" className="contact-btn mobile-contact-btn" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
