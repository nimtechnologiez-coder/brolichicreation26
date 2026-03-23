import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../images/brolichilogox.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const activePage = location.pathname === '/' ? 'home' : 
  //                    location.pathname === '/careers' ? 'careers' : '';

    const currentPath = window.location.pathname;

    return (
    <nav className="main-nav">
      <div className="nav-logo">
        <a href="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Brolichi Logo" />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="nav-links desktop-only">
        <a href="/" className={currentPath === '/' ? 'active' : ''}>Home</a>
        <a href="/services" className={currentPath === '/services' ? 'active' : ''}>Services</a>
        <a href="/about" className={currentPath === '/about' ? 'active' : ''}>About Us</a>
        <a href="/testimonials" className={currentPath === '/testimonials' ? 'active' : ''}>Testimonials</a>
        <a href="/careers" className={currentPath === '/careers' ? 'active-btn' : 'nav-btn'}>Careers</a>
      </div>
      <a href="/contact" className={`contact-btn desktop-only ${currentPath === '/contact' ? 'active' : ''}`}>Contact us</a>

      {/* Mobile Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="/" className={currentPath === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/services" className={currentPath === '/services' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="/about" className={currentPath === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="/testimonials" className={currentPath === '/testimonials' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="/careers" className={currentPath === '/careers' ? 'active-btn' : 'nav-btn'} onClick={() => setIsMenuOpen(false)}>Careers</a>
          <a href="/contact" className={`contact-btn mobile-contact-btn ${currentPath === '/contact' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
