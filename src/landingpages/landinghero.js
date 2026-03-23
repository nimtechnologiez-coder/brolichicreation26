import React, { useEffect, useRef, useState } from "react";
import "../style/landinghero.css";
import bgImage from "../images/landingbackground.webp";

/* 🔥 CountUp with scroll trigger */
const CountUp = ({ end, duration = 2000, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  return <span>{count}</span>;
};

const LandingHero = () => {
  const statsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  /* 🔥 Trigger animation only when visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
          General Supply of Building Materials, Transport Services, Motor
          <br />
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

        {/* 🔥 STATS WITH ANIMATION */}
        <div className="stats" ref={statsRef}>
          <div>
            <h2>
              <CountUp end={3} startAnimation={startAnimation} />+
            </h2>
            <p>Years in Business</p>
          </div>

          <div>
            <h2>
              <CountUp end={500} startAnimation={startAnimation} />+
            </h2>
            <p>Projects Supplied</p>
          </div>

          <div>
            <h2>
              <CountUp end={100} startAnimation={startAnimation} />+
            </h2>
            <p>Products Available</p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default LandingHero;