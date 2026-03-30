import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import CTASection from '../landingpages/readyland';
import { Package, MapPin } from 'lucide-react';
import Footer from '../components/Footer';

const branchesData = [
  { name: "Manyinga", phone: "+260 750 369 595" },
  { name: "Mazabuka", phone: "+260 573 854 437" },
  { name: "Mufumbwe", phone: "+260 750 369 908" },
  { name: "Kabompo", phone: "+260 750 368 867" },
  { name: "Mumbeji", phone: "+260 750 369 338" },
  { name: "Zambezi", phone: "+260 750 369 937" },
  { name: "Chikeyi", phone: "+260 750 368 845" },
  { name: "Chavuma", phone: "+260 750 369 078" },
  { name: "Manyama", phone: "+260 750 371 538" },
  { name: "Kisasa", phone: "+260 750 371 601" },
  { name: "Mwinilunga", phone: "+260 750 369 566" },
];

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
                <h4>Head Office Number</h4>
                <p>+260 97 840 0116</p> 
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Package size={20} /></div>
              <div className="contact-emails-container">
                <h4>Emails</h4>
                <div className="email-entry">
                  <a href="mailto:admin@brolichi.com">admin@brolichi.com</a>
                  <span>For administrative and legal purposes</span>
                </div>
                <div className="email-entry">
                  <a href="mailto:administrativesupport@brolichi.com">administrativesupport@brolichi.com</a>
                  <span>For administrative support purposes</span>
                </div>
                <div className="email-entry">
                  <a href="mailto:sales@brolichi.com">sales@brolichi.com</a>
                  <span>For sales inquiries</span>
                </div>
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

      <section className="contact-routes">
        <div className="routes-header">
          <span className="contact-subtag">OUR ROUTES</span>
          <h2>Service Coverage</h2>
          <p>We provide extensive coverage across the Zambezi and Mwinilunga routes.</p>
        </div>
        
        <div className="routes-grid">
          <div className="route-card">
            <h3><MapPin size={24} color="#ff7a00" /> Zambezi Route</h3>
            <ul className="route-list">
              <li>📍Mufumbwe</li>
              <li>📍Manyinga</li>
              <li>📍Kabompo</li>
              <li>📍Mumbezhi</li>
              <li>📍Zambezi</li>
              <li>📍Chiyeki</li>
              <li>📍Chavuma</li>
            </ul>
          </div>

          <div className="route-card">
            <h3><MapPin size={24} color="#ff7a00" /> Mwinilunga Route</h3>
            <ul className="route-list">
              <li>📍Manyama</li>
              <li>📍Kalumbila North</li>
              <li>📍Kisasa</li>
              <li>📍Mwinilunga</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-branches">
        <div className="branches-header">
          <span className="contact-subtag">OUR BRANCHES</span>
          <h2>Branch Directory</h2>
        </div>

        <div className="branches-grid">
          {branchesData.map((branch, idx) => (
            <div className="branch-card" key={idx}>
              <h3>{branch.name}</h3>
              <div className="branch-info">
                <p><strong>Branch Contact:</strong> {branch.phone}</p>
                <p><strong>Head Office:</strong> +260 978 400 116</p>
                <p><strong>Email:</strong> sales@brolichi.com</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title="Brolichi Location - Solwezi, Zambia"
          src="https://maps.google.com/maps?q=Brolichi+Creation+Enterprise+Limited,+Solwezi,+Zambia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
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