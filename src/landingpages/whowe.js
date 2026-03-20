import React from "react";
import "../style/whowe.css";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

const WhoWe = () => {
  return (
    <section className="whowe">
      <div className="whowe-container">

        {/* LEFT */}
        <div className="whowe-left">
          <span className="tags">WHO WE ARE</span>

          <h1>
            Your Trusted Building <br />
            Materials Partner
          </h1>

          <p>
            We provide a wide range of high-quality construction materials for
            residential, commercial, and industrial projects. Our materials are
            sourced from trusted manufacturers to ensure durability, reliability,
            and consistent supply.
          </p>

          <p>
            We provide a wide range of high-quality construction materials for
            residential, commercial, and industrial projects.
          </p>

          <a href="/about" className="whowe-btn">
            Learn more about us →
          </a>
        </div>

        {/* RIGHT */}
        <div className="whowe-right">
          <div className="img-grid">
  <img src={img1} className="img big left-top" />
  <img src={img2} className="img small right-top" />
  <img src={img3} className="img small left-bottom" />
  <img src={img4} className="img big right-bottom" />
</div>
        </div>

      </div>
    </section>
  );
};

export default WhoWe;