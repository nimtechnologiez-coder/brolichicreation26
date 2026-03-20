import React from "react";
import "../style/whychoose.css";

const data = [
  {
    number: "01",
    title: "Consistent Quality",
    desc: "Every product we supply meets high standards — no compromises, every time.",
  },
  {
    number: "02",
    title: "Fair Pricing",
    desc: "Competitive pricing that keeps your project budget on track without sacrificing quality.",
  },
  {
    number: "03",
    title: "Fast Sourcing",
    desc: "Quick turnaround on orders — we keep a ready supply so your project never stalls.",
  },
  {
    number: "04",
    title: "Clear Communication",
    desc: "From order to delivery, we keep you informed every step of the way.",
  },
];

const WhyChoose = () => {
  return (
    <section className="whychoose">
      
      {/* TOP HEADER */}
      <div className="why-top">
        <div className="left">
          <span className="tags">WHY CHOOSE US</span>
          <h2>Built on Trust & Excellence</h2>
        </div>

        <div className="right">
          <p>
            Here is why contractors and builders choose Brolichi Creation Enterprise Limited
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="why-grid">
        {data.map((item, i) => (
          <div className="why-card" key={i}>
            <span className="number">{item.number}</span>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChoose;