import React from "react";
import "../style/readyland.css";

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Start Your Project ?</h2>

        <p className="cta-subtitle">
          Contact Brolichi today. Get a personalised<br></br>
          quote for your build.
        </p>

        <div className="cta-buttons">

          <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSd1Rq3eHYWFfeSH9n23zfq4UVnREp3aXcRZFhjpRtBU2sZSLA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn primary"
          >
          Request a Quotation →
          </a>

          <a href="/contact" className="cta-btn secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default CTASection;