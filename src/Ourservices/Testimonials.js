import React from 'react';
import { Star } from "lucide-react";
import '../Styleour/Testimonials.css';
import Footer from '../components/Footer';
 
const testimonialsData = [
    {
        id: 1,
        category: "School Projects",
        rating: 5,
        text: "Thank you Brolichi, you're massively contributing to the success of our Zeep project. We're looking forward to engaging you throughout the entire process. You're always available for us.",
        author: {
            name: "Mr. Teddy Ngonga",
            role: "Headteacher",
            company: "Shukwe",
            initial: "T"
        }
    },
    {
        id: 2,
        category: "School Projects",
        rating: 5,
        text: "Without Brolichi, we would never have reached where we are with our school projects. We will continue working with you and hope that even after completion, you’ll keep supporting us with future supply needs.",
        author: {
            name: "Mr. Dio Kapandula",
            role: "School Accountant / Procurement Officer",
            company: "Shukwe",
            initial: "D"
        }
    },
    {
        id: 3,
        category: "School Projects",
        rating: 5,
        text: "Good morning, son… thank you so much. We received all the items. We are truly grateful for how well we worked together and look forward to more opportunities ahead. Be blessed abundantly 🙌🏻",
        author: {
            name: "Mrs. Roydah Kalundu",
            role: "Head Mistress",
            company: "Kashiwila",
            initial: "R"
        }
    },
    {
        id: 4,
        category: "Procurement Solutions",
        rating: 5,
        text: "You are the best supplier so far. Very well organized.",
        author: {
            name: "Mr. Chiwaya",
            role: "Procurement Officer",
            company: "Sikufele",
            initial: "C"
        }
    },
    {
        id: 5,
        category: "Customized Solutions",
        rating: 5,
        text: "Thank you for your understanding. Your customized supply solutions have helped us meet school construction demands without losses.",
        author: {
            name: "Mr. Kufwola",
            role: "Procurement Officer",
            company: "Shukwe",
            initial: "K"
        }
    },
    {
        id: 6,
        category: "School Projects",
        rating: 5,
        text: "Thank you for your unwavering support. Even when we delayed, you still delivered without compromise. You truly made our work easier.",
        author: {
            name: "Mr. Chingalika",
            role: "Headteacher",
            company: "Chizela",
            initial: "C"
        }
    },
    {
        id: 7,
        category: "Quality Supply",
        rating: 5,
        text: "Continue following procurement procedures and pricing within budget. Never compromise on quality or specifications—this is why people love working with you.",
        author: {
            name: "Mr. Keith",
            role: "Regional Engineer",
            company: "Northwestern",
            initial: "K"
        }
    },
    {
        id: 8,
        category: "School Projects",
        rating: 5,
        text: "We worked very well together. We have no option but to always engage you—keep your welcoming approach.",
        author: {
            name: "Mrs. Juliet Mubuyaete",
            role: "Head Mistress",
            company: "Kabanda",
            initial: "J"
        }
    },
    {
        id: 9,
        category: "School Projects",
        rating: 5,
        text: "We prefer working with you because you make everything smooth and stress-free.",
        author: {
            name: "Mr. Mukosayi",
            role: "Headteacher",
            company: "Mushima",
            initial: "M"
        }
    },
    {
        id: 10,
        category: "Procurement Solutions",
        rating: 5,
        text: "Always quote what you can deliver. Many choose to work with you—ensure you maintain quality, specifications, and deadlines. So far, you are the only supplier without complaints from schools.",
        author: {
            name: "Mr. Bwalya",
            role: "Senior Procurement Officer",
            company: "Northwestern",
            initial: "B"
        }
    },
    {
        id: 11,
        category: "Building Materials Supply",
        rating: 5,
        text: "A good and effective supplier of building materials. Has capacity to deliver across the country. On top of that, contributes to the national treasury through compliance with statutory requirements.",
        author: {
            name: "Nathan Muleta",
            role: "Sales Admin Officer",
            company: "Dangote",
            initial: "N"
        }
    },
    {
        id: 12,
        category: "Infrastructure Projects",
        rating: 5,
        text: "Well organized company",
        author: {
            name: "Christopher Chinoya",
            role: "Senior Building Officer",
            company: "Kabompo District",
            initial: "C"
        }
    },
    {
        id: 13,
        category: "Financial Sector",
        rating: 5,
        text: "Best distributor in Northwestern Solwezi",
        author: {
            name: "Alex Chawinga",
            role: "Branch Manager",
            company: "Access Bank Solwezi",
            initial: "A"
        }
    },
    {
        id: 14,
        category: "Customer Service",
        rating: 5,
        text: "The customer service was good. I would recommend doing business with them.",
        author: {
            name: "Morrison Chisumpa",
            role: "ZRA Officer",
            company: "Solwezi",
            initial: "M"
        }
    }
];
 
function Testimonials() {
    return (
        <div className="testimonials-page">
            <main>
                <header className="testimonials-hero">
                    <div className="container">
                        <span className="section-subtitle-orange">CLIENT STORIES</span>
                        <h1 className="testimonials-title">What Our Clients Say</h1>
                        <p className="testimonials-subtitle">
                            Real stories from real businesses that trust Brolichi<br />to deliver.
                        </p>
                    </div>
                </header>
 
                <section className="testimonials-grid-section">
                    <div className="container">
                        <div className="testimonials-grid">
                            {testimonialsData.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-card">
                                    <div className="testimonial-card-header">
                                        <span className="category-pill">{testimonial.category}</span>
                                        <div className="stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} size={16} fill="#f97316" color="#f97316" />
                                            ))}
                                        </div>
                                    </div>
 
                                    <p className="testimonial-text">"{testimonial.text}"</p>
 
                                    <div className="testimonial-author">
                                        <div className="author-avatar">{testimonial.author.initial}</div>
                                        <div className="author-info">
                                            <h4>{testimonial.author.name}</h4>
                                            <p className="author-role">{testimonial.author.role}</p>
                                            <p className="author-company">{testimonial.author.company}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
 
                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta">
                        <h1>Ready to Start Your Project ?</h1>
                        <p>Contact Brolichi today. Get a personalised<br />quote for your build.</p>
                        <div className="cta-buttons">
                         <a 
                          href="https://docs.google.com/forms/d/e/1FAIpQLSd1Rq3eHYWFfeSH9n23zfq4UVnREp3aXcRZFhjpRtBU2sZSLA/viewform?usp=publish-editor"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn primary"
                         >
                          Request a Quotation →
                          </a>
                            <a href="/contact" className="btn-outline">Contact Us</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Testimonials
 
 