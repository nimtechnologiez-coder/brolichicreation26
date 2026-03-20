import React from "react";
import { FaLink, FaEnvelope } from "react-icons/fa";
import "../Styleour/AboutUs.css";


import Alexander from "../images/Alexander.webp";
import Sarah from "../images/Sarah.webp";
import Marcus from "../images/Marcus.webp";
import Team from "../images/Team.webp";

import journey from "../images/journey.webp";
import eye from "../images/eye.webp";
import eyee from "../images/eyee.webp";



import customClearanceVideo from "../videos/custom-clearance.mp4";
import constructionAdVideo from "../videos/construction-ad.mp4";

const AboutPage = () => {
  return (
    <div className="about-us-page">

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">

        <p className="about-tag">OUR STORY</p>

        <h1 className="about-title">About Us</h1>

        <p className="about-subtitle">
          Over a decade of supplying quality building materials with integrity,
          reliability, and care.
        </p>

        {/* CARD */}
        <div className="about-card">

          {/* IMAGE */}
          <div className="about-card-image">
            <img
              src={journey}
              alt="about"
            />
          </div>

          {/* CONTENT */}
          <div className="about-card-content">

            <div className="about-heritage">
              <div className="about-line"></div>
              <p>OUR HERITAGE</p>
            </div>

            <h2 className="about-card-title">
              A Journey of Vision and Resilience
            </h2>

            <p className="about-text">
              Founded on the principles of integrity and forward-thinking, our journey began with a
              small team of visionaries in 1995. What started as a niche consultancy has evolved into
              a global powerhouse, defining industry standards and empowering businesses to
              reach unprecedented heights.
            </p>

            <p className="about-text">
              We believe that true leadership is not just about staying ahead of the curve; it’s about
              redefining it. Our commitment to excellence is reflected in every partnership we forge
              and every challenge we overcome.
            </p>

            {/* STATS */}
            <div className="about-stats">
              <div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="about-divider">
                <h3>450+</h3>
                <p>Global Partners</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STRATEGIC ================= */}
      <section className="strategic-section">

        <h1 className="strategic-title">Strategic Foresight</h1>

        <p className="strategic-subtitle">
          Driving progress through excellence and unwavering dedication.
        </p>

        <div className="strategic-cards">

          {/* MISSION */}
          <div className="strategic-card">
            <div className="icon-box">
              <img src={eyee} alt="icon" />
            </div>
            <h2>Our Mission</h2>
            <p>
              To provide premium corporate services that foster
              growth and sustainable success for our global partners
              through innovation and integrity.
            </p>
          </div>

          {/* VISION */}
          <div className="strategic-card">
            <div className="icon-box vision">
              <img src={eye} alt="icon" />
            </div>
            <h2>Our Vision</h2>
            <p>
              To be the world's most trusted partner in professional
              excellence, setting the gold standard for corporate
              integrity and strategic intelligence.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOUNDATIONS ================= */}
      <section className="foundation-section">

        <div className="foundation-row">
          <div>
            <p className="foundation-tag">FOUNDATIONS</p>
            <h2 className="foundation-title">
              The values that define our character.
            </h2>
          </div>

          <div className="foundation-text">
            <p>
              A framework of principles that guide every decision and
              interaction within our organization.
            </p>
          </div>
        </div>

        {/* NEW VALUES SECTION */}
        <div className="foundation-cards">

          <div className="foundation-card">
            <h1>01</h1>
            <h3>Uncompromising Integrity</h3>
            <p>
              We adhere to the highest ethical standards, ensuring transparency
              and honesty in all our dealings.
            </p>
          </div>

          <div className="foundation-card">
            <h1>02</h1>
            <h3>Radical Innovation</h3>
            <p>
              We embrace change and foster a culture where creative thinking
              leads to groundbreaking solutions.
            </p>
          </div>

          <div className="foundation-card">
            <h1>03</h1>
            <h3>Collective Excellence</h3>
            <p>
              Our success is built on the diverse talents of our team and the
              synergy of our collaborative efforts.
            </p>
          </div>

        </div>

      </section>

      <section className="milestones-section">
        <div className="container">
          <h1 className="milestone-title">Key Milestones</h1>

          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-grid">
              {/* ITEM 1 */}
              <div className="timeline-item">
                <div className="timeline-dot accent-dot"></div>
                <div className="timeline-content">
                  <h2 className="timeline-year text-accent">1995</h2>
                  <h3 className="timeline-title">Genesis</h3>
                  <p className="timeline-desc">
                    Founded in Zurich with a mission to revolutionize financial advisory.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h2 className="timeline-year">2008</h2>
                  <h3 className="timeline-title">Global Expansion</h3>
                  <p className="timeline-desc">
                    Established headquarters in London and Singapore, doubling our global reach.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h2 className="timeline-year">2015</h2>
                  <h3 className="timeline-title">Digital Transformation</h3>
                  <p className="timeline-desc">
                    Launched our proprietary AI-driven platform for strategic analysis.
                  </p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h2 className="timeline-year">2023</h2>
                  <h3 className="timeline-title">Sustainability Pledge</h3>
                  <p className="timeline-desc">
                    Achieved Carbon Neutral status across all global operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="leadership-section">

        <div className="leader-header">
          <h2 className="lead-title">Our Leadership</h2>
          <p className="lead-subtitle">
            Our executive team combines decades of experience across diverse industries to steer our vision into the future.
          </p>
        </div>

        <div className="leader-grid">

          <div className="leader-card">
            <div className="leader-img">
              <img src={Alexander} alt="Alexander Sterling" />
            </div>
            <h3>Alexander Sterling</h3>
            <p className="role">CHIEF EXECUTIVE OFFICER</p>
            <div className="leader-icons">
              <span className="icon-link" title="LinkedIn"><FaLink /></span>
              <span className="icon-mail" title="Email"><FaEnvelope /></span>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-img">
              <img src={Sarah} alt="Sarah Jenkins" />
            </div>
            <h3>Sarah Jenkins</h3>
            <p className="role">CHIEF OPERATIONS OFFICER</p>
            <div className="leader-icons">
              <span className="icon-link" title="LinkedIn"><FaLink /></span>
              <span className="icon-mail" title="Email"><FaEnvelope /></span>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-img">
              <img src={Marcus} alt="Marcus Thorne" />
            </div>
            <h3>Marcus Thorne</h3>
            <p className="role">HEAD OF INNOVATION</p>
            <div className="leader-icons">
              <span className="icon-link" title="LinkedIn"><FaLink /></span>
              <span className="icon-mail" title="Email"><FaEnvelope /></span>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-img">
              <img src={Team} alt="Elena Vance" />
            </div>
            <h3>Elena Vance</h3>
            <p className="role">CHIEF STRATEGY OFFICER</p>
            <div className="leader-icons">
              <span className="icon-link" title="LinkedIn"><FaLink /></span>
              <span className="icon-mail" title="Email"><FaEnvelope /></span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= VIDEO SECTION ================= */}
      <div style={{ padding: '80px 20px', textAlign: 'center', background: '#f4f7fb' }}>
        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '10px' }}>
          OUR OPERATIONS IN ACTION
        </h2>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '60px' }}>
          Seeing the Quality and Precision
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>

          {/* VIDEO CARD 1 */}
          <div
            style={{
              width: '500px',
              height: '700px',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              transition: '0.3s',
              background: '#000'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={constructionAdVideo} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)'
              }}
            ></div>

            {/* TEXT */}
            <div
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                color: '#fff',
                textAlign: 'left'
              }}
            >
              <h3 style={{ margin: 0, fontSize: '26px', fontWeight: '700' }}>
                Premium Building Materials
              </h3>
              <p style={{ marginTop: '10px', fontSize: '16px', lineHeight: '1.6' }}>
                Witness the sourcing and handling of our top-tier construction supplies.
              </p>
            </div>
          </div>

          {/* VIDEO CARD 2 */}
          <div
            style={{
              width: '500px',
              height: '700px',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              transition: '0.3s',
              background: '#000'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={customClearanceVideo} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)'
              }}
            ></div>

            {/* TEXT */}
            <div
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                color: '#fff',
                textAlign: 'left'
              }}
            >
              <h3 style={{ margin: 0, fontSize: '26px', fontWeight: '700' }}>
                Efficient Logistics & Transport
              </h3>
              <p style={{ marginTop: '10px', fontSize: '16px', lineHeight: '1.6' }}>
                Explore our reliable delivery mechanisms ensuring timely project supplies.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta">
        <h1>Ready to Start Your Project ?</h1>
        <p>Contact us today and get a personalised quote.</p>

        <div className="cta-buttons">
          <a href="/quotation" className="btn-orange">Request a Quotation &nbsp; →</a>
          <a href="/contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
