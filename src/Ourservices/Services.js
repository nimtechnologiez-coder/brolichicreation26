import React, { useState, useEffect } from "react";
import "../Styleour/Services.css";
import tickIcon from "../images/check-broken.webp";
import bg1 from "../images/dhanush.webp";
import bg2 from "../images/oppo.webp";
import bg3 from "../images/redmi.webp";
import materials from "../images/material4.webp";
import transport from "../images/materials1.webp";
import vehicle from "../images/materials2.webp";
import customs from "../images/materials003.webp";
import Footer from "../components/Footer";
const Tick = ({ text }) => (
  <div className="tickos">
    <img src={tickIcon} alt="tick" className="tickos-icon" />
    <p>{text}</p>
  </div>
);
 
const Services = () => {
  const images = [bg1, bg2, bg3];
  const [currentIdx, setCurrentIdx] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);
 
  return (
    <div className="services-page">
 
      {/* HEADER CAROUSEL */}
      <div className="headeros">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`headeros-bg ${idx === currentIdx ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
 
      {/* HEADER TEXT SECTION */}
      <div className="headeros-text-section">
        <div className="headeros-content">
          <p className="tagos">WHAT WE OFFER</p>
          <h1 className="main-titleos">Our Services</h1>
          <h4 className="sub-titleos">
            Quality building materials for homes, shops, and projects of all sizes
          </h4>
          <p className="descos">
            Quality building materials for homes, shops, and projects of all sizes –
            reliably sourced and ready to supply.
          </p>
        </div>
      </div>
 
      {/* CARD 1 */}
      <div className="cardos card-1">
        <div className="cardos-img">
          <img src={materials} alt="materials" />
        </div>
 
        <div className="cardos-content">
          <p className="tagos">SERVICE RANGE 01</p>
          <h2 className="titleos">Building Materials Supply</h2>
 
          <p className="descos">
            We provide a wide range of high-quality construction materials for residential, commercial, and industrial projects. Our materials are sourced from trusted manufacturers to ensure
 
            durability, reliability, and consistent supply
          </p>
 
          <div className="listos-row">
            <div>
              <Tick text="Cement & construction aggregates" />
              <Tick text="Bricks, blocks, & masonry materials" />
              <Tick text="Sand, gravel, & paving materials" />
            </div>
 
            <div>
              <Tick text="Roofing sheets & structural timber" />
              <Tick text="Paints, tiles, & finishing materials" />
              <Tick text="Electrical & plumbing supplies" />
            </div>
          </div>
 
          <a href="/quotation" className="btnos-dark">
            Request a Quotation &nbsp; →
          </a>
        </div>
      </div>
 
      {/* CARD 2 */}
      <div className="cardos card-2 reverse">
        <div className="cardos-img">
          <img src={transport} alt="transport" />
        </div>
 
        <div className="cardos-content">
          <p className="tagos">SERVICE RANGE 02</p>
          <h2 className="titleos">Transport & Logistics Services</h2>
          <p className="descos">
            Our transport services ensure safe and timely delivery of construction materials and goods
            to project sites. With a reliable fleet and experienced drivers, we support both small and
            large-scale logistics needs.
          </p>
          <div className="listos-row">
            <div>
              <Tick text="Transportation of construction materials" />
              <Tick text="Local & regional delivery services" />
              <Tick text="Bulk cargo transport solutions" />
            </div>
 
            <div>
              <Tick text="Reliable scheduling & tracking" />
              <Tick text="Safe handling of fragile materials" />
              <Tick text="On-time project site delivery" />
            </div>
          </div>
 
          <a href="/bookings" className="btnos-dark">Book Transport &nbsp; →</a>
        </div>
      </div>
 
      {/* CARD 3 */}
      <div className="cardos card-3">
        <div className="cardos-img">
          <img src={vehicle} alt="Motor Vehicle Importation" />
        </div>
 
        <div className="cardos-content">
          <p className="tagos">SERVICE RANGE 03</p>
          <h2 className="titleos">Motor Vehicle Importation</h2>
 
          <p className="descos">
            We assist individuals and businesses in importing motor vehicles from trusted international
            suppliers. Our team manages the entire process to ensure a smooth and hassle-free
            vehicle import experience.
          </p>
 
          <div className="listos-row">
            <div>
              <Tick text="Importation of new & used vehicles" />
              <Tick text="Vehicle sourcing from international markets" />
              <Tick text="Import documentation support" />
            </div>
 
            <div>
              <Tick text="Compliance with import regulations" />
              <Tick text="Safe & secure shipping arrangements" />
              <Tick text="Delivery coordination after arrival" />
            </div>
          </div>
 
          <a href="/import-vehicle" className="btnos-dark">Start Vehicle Import &nbsp; →</a>
        </div>
      </div>
 
      {/* CARD 4 */}
      <div className="cardos card-4 reverse">
        <div className="cardos-img">
          <img src={customs} alt="Customs Clearing & Forwarding" />
        </div>
 
        <div className="cardos-content">
          <p className="tagos">SERVICE RANGE 04</p>
          <h2 className="titleos">Customs Clearing & Forwarding</h2>
 
          <p className="descos">
            Our customs clearing and forwarding services simplify international trade by handling
            documentation, customs procedures, and logistics. We ensure your cargo moves quickly
            and efficiently through ports and borders.
          </p>
 
          <div className="listos-row">
            <div>
              <Tick text="Import & export customs clearance" />
              <Tick text="Documentation preparation & processing" />
              <Tick text="Freight forwarding coordination" />
            </div>
 
            <div>
              <Tick text="Port handling & cargo inspection support" />
              <Tick text="Duty & tax processing assistance" />
              <Tick text="Efficient cargo release & delivery" />
            </div>
          </div>
 
          <a href="/clearing-assistance" className="btnos-dark">Get Clearing Assistance &nbsp; →</a>
        </div>
      </div>
 
      {/* CTA */}
      <div className="ctaos">
        <h1>Ready to Start Your Project ?</h1>
        <p>Contact us today and get a personalised quote.</p>
 
        <div className="ctaos-buttons">
          <a href="/quotation" className="btnos-orange">Request a Quotation &nbsp; →</a>
          <a href="/contact" className="btnos-outline">Contact Us</a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
 
export default Services;
 