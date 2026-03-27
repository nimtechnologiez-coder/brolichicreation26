import React from "react";
import "../style/testimonial.css";
import { Star } from "lucide-react";



const data = [
  {
    name: "Tendai Moyo",
    company: "Moyo Construction Ltd",
    text: "Brolichi delivered our full building materials order on time. Exceptional quality and service!",
  },
  {
    name: "Tarah Johnson",
    company: "UrbanBuild Ltd",
    text: "We were impressed with their timely delivery and professional communication. Brolichi efficiently from start to finish delivered.",
  },
];      

const Testimonial = () => {
  return (
    <section className="testimonials">

      <span className="tages">CLIENT STORIES</span>
      <h2 className="title">What Our Clients say</h2>

      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            
            {/* STARS */}
            <div className="stars">
  {[...Array(5)].map((_, i) => (
    <Star key={i} className="star-icon" fill="#ff7a00" stroke="#ff7a00" />
  ))}
</div>

            {/* TEXT */}
            <p className="text">“{item.text}”</p>

            {/* USER */}
            <div className="user">
              <div className="avatar">T</div>
              <div>
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="btn-wrap">
        <a href="/testimonials" className="btn-testimonial">Read all Testimonials →</a>
      </div>
      
    </section>
  );
};

export default Testimonial;