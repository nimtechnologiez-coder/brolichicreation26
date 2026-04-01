import React from "react";
import "../style/testimonial.css";
import { Star } from "lucide-react";



const data = [
  {
    name: "Mr. Chiwaya",
    company: "Procurement Officer – Sikufele",
    text: "You are the best supplier so far. Very well organized.",
    initial: "C"
  },
  {
    name: "Mr. Teddy Ngonga",
    company: "Headteacher – Shukwe",
    text: "Thank you Brolichi, you're massively contributing to the success of our Zeep project. We're looking forward to engaging you throughout the entire process.",
    initial: "T"
  },
  {
    name: "Mr. Dio Kapandula",
    company: "School Accountant / Procurement Officer",
    text: "Without Brolichi, we would never have reached where we are with our school projects. We will continue working with you.",
    initial: "D"
  },
  {
    name: "Roydah Kalundu",
    company: "Head Mistress – Kashiwila",
    text: "We received all the items. We are truly grateful for how well we worked together and look forward to more opportunities ahead.",
    initial: "R"
  },
  {
    name: "Nathan Muleta",
    company: "Sales Admin Officer – Dangote",
    text: "A good and effective supplier of building materials. Has capacity to deliver across the country.",
    initial: "N"
  },
  {
    name: "Christopher Chinoya",
    company: "Senior Building Officer – Kabompo District",
    text: "Well organized company",
    initial: "C"
  },
  {
    name: "Alex Chawinga",
    company: "Branch Manager – Access Bank Solwezi",
    text: "Best distributor in Northwestern Solwezi",
    initial: "A"
  },
  {
    name: "Morrison Chisumpa",
    company: "ZRA Officer – Solwezi",
    text: "The customer service was good. I would recommend doing business with them.",
    initial: "M"
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
              <div className="avatar">{item.initial}</div>
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