import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import CTASection from '../landingpages/readyland';
import { Package } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',      // replace
      'YOUR_TEMPLATE_ID',     // replace
      form.current,
      'YOUR_PUBLIC_KEY'       // replace
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to send message');
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span className="contact-subtag">REACH OUT</span>
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with our team today.</p>
      </section>

      <section className="contact-content">
        <div className="contact-details-col">
          <span className="contact-subtag">CONTACT DETAILS</span>
          <h2>Let's Talk Business</h2>
          <p className="contact-desc">
            Our team is available during business hours and will respond<br></br> to all enquiries promptly.
          </p>

          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Physical Address</h4>
                <p>Solwezi, Zambia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Phone Number</h4>
                <p>+263 97 840 0116</p> 
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div>
                <h4>Email Address</h4>
                <p>sales@brolichi.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="contact-form-card">
            <h3>Send Us a Message</h3>

            {/* IMPORTANT: ref + onSubmit */}
            <form ref={form} onSubmit={sendEmail}>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="user_name" required />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="user_email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer/>
    </div>
  );
};

export default Contact;