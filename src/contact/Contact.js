import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import CTASection from '../landingpages/readyland';
import logo from '../images/logo.png';
import { 
  Package,
} from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <span className="contact-subtag">REACH OUT</span>
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with our team today.</p>
      </section>

      {/* Content Section */}
      <section className="contact-content">
        <div className="contact-details-col">
          <span className="contact-subtag">CONTACT DETAILS</span>
          <h2>Let's Talk Business</h2>
          <p className="contact-desc">
            Our team is available during business hours and will respond to all enquiries promptly. For urgent matters, use our WhatsApp direct line.
          </p>

          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Physical Address</h4>
                <p>123 Enterprise Avenue<br/>Harare, Zimbabwe.</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Phone Number</h4>
                <p>+263 00 000 0000</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Email Address</h4>
                <p>info@brolichi.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Fri : 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="contact-form-card">
            <h3>Send Us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@gmail.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+263 77 0000 000" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="How can we help?" />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Describe your enquiry in detail..."></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15193.368686616013!2d31.040182599999998!3d-17.822452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4ee11029c7b%3A0xc3926838a5fd843e!2sEnterprise%20Rd%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1711019011116!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0, width: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <CTASection />

      <Footer/>
    </div>
  );
};

export default Contact;
