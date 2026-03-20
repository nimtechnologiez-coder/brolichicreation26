import React from 'react';
import './Footer.css';
import logo from '../images/brolichilogo.png';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Brolichi Logo" />
            </div>
            <p>
              Quality building materials for homes, shops, and projects of all sizes. Reliable products. Steady supply. Support from start to finish.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Instagram size={18} /></a>
              <a href="#" className="social-icon"><Linkedin size={18} /></a>
              <a href="#" className="social-icon"><Facebook size={18} /></a>
              <a href="#" className="social-icon"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><span className="dotes">•</span><a href="/">Home</a></li>
              <li><span className="dotes">•</span><a href="/products">Products</a></li>
              <li><span className="dotes">•</span><a href="/about">About Us</a></li>
              <li><span className="dotes">•</span><a href="/testimonials">Testimonials</a></li>
              <li><span className="dotes">•</span><a href="/careers">Careers</a></li>
              <li><span className="dotes">•</span><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li><span className="dotes">•</span><a href="/products/cement">Cement, Bricks, Sand &amp; Stones</a></li>
              <li><span className="dotes">•</span><a href="/products/roofing">Roofing Sheets, Timber &amp; Doors</a></li>
              <li><span className="dotes">•</span><a href="/products/paints">Paints, Tiles &amp; Finishing Items</a></li>
              <li><span className="dotes">•</span><a href="/products/electrical">Electrical &amp; Plumbing Supplies</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact-links">
              <li><MapPin size={16} color="#FF7A00" /> 123 Enterprise Avenue, Harare, Zimbabwe</li>
              <li><Phone size={16} color="#FF7A00" /> +263 00 000 0000</li>
              <li><Mail size={16} color="#FF7A00" /> info@brolichi.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Corporate Brand. All rights reserved. <a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
