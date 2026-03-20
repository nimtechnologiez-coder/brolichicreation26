import React from "react";
import "../style/landinghero.css";
import bgImage from "../images/landingbackground.png";

const LandingHero = () => {
  return (
    <section
      className="landinghero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="landinghero-content">
    <div className="hero-tag">
          <span className="dot"></span>
          Driving Trade Forward
        </div>
        <h1>
          Your Trusted Partner in <br />
          <span>Logistics & Supply</span>
        </h1>

        <p>
          General Supply of Building Materials, Transport Services, Motor<br></br>
          Vehicle Importation, and Customs Clearing & Forwarding.
        </p>

        <div className="buttons">
          <a href="/quotation" className="primary">
  Request a Quotation →
</a>

<a href="/services" className="secondary">
  What We Offer →
</a>
        </div>

        <div className="stats">
          <div>
            <h2>10+</h2>
            <p>Years in Business</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Projects Supplied</p>
          </div>
          <div>
            <h2>100+</h2>
            <p>Products Available</p>
          </div>
          <div>
            <h2>10+</h2>
            <p>Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;