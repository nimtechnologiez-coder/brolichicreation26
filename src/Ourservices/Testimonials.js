import React from 'react';
import { Star, ArrowRight } from "lucide-react";
import '../Styleour/Testimonials.css';
import Footer from '../components/Footer';
 
const testimonialsData = [
    {
        id: 1,
        category: "Building Materials Supply",
        rating: 5,
        text: "Brolichi delivered our full building materials order on time. Exceptional quality and service! Brolichi delivered our full building materials order on time. Exceptional quality and service!",
        author: {
            name: "Tendai Moyo",
            role: "CEO",
            company: "Moyo Construction Ltd",
            initial: "T"
        }
    },
    {
        id: 2,
        category: "Building Materials Supply",
        rating: 5,
        text: "Brolichi delivered our full building materials order on time. Exceptional quality and service! Brolichi delivered our full building materials order on time. Exceptional quality and service!",
        author: {
            name: "Tendai Moyo",
            role: "CEO",
            company: "Moyo Construction Ltd",
            initial: "T"
        }
    },
    {
        id: 3,
        category: "Building Materials Supply",
        rating: 5,
        text: "Brolichi delivered our full building materials order on time. Exceptional quality and service! Brolichi delivered our full building materials order on time. Exceptional quality and service!",
        author: {
            name: "Tendai Moyo",
            role: "CEO",
            company: "Moyo Construction Ltd",
            initial: "T"
        }
    },
    {
        id: 4,
        category: "Building Materials Supply",
        rating: 5,
        text: "Brolichi delivered our full building materials order on time. Exceptional quality and service! Brolichi delivered our full building materials order on time. Exceptional quality and service!",
        author: {
            name: "Tendai Moyo",
            role: "CEO",
            company: "Moyo Construction Ltd",
            initial: "T"
        }
    },
    {
        id: 5,
        category: "Building Materials Supply",
        rating: 5,
        text: "Brolichi delivered our full building materials order on time. Exceptional quality and service! Brolichi delivered our full building materials order on time. Exceptional quality and service!",
        author: {
            name: "Tendai Moyo",
            role: "CEO",
            company: "Moyo Construction Ltd",
            initial: "T"
        }
    },
    {
        id: 6,
        category: "Building Materials Supply",
        rating: 5,
        text: "Brolichi delivered our full building materials order on time. Exceptional quality and service! Brolichi delivered our full building materials order on time. Exceptional quality and service!",
        author: {
            name: "Tendai Moyo",
            role: "CEO",
            company: "Moyo Construction Ltd",
            initial: "T"
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
                            Real stories from real businesses that trust Brolichi<br />Enterprises to deliver.
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
                        <p>Contact Brolichi Creation Enterprises today. Get a personalised<br />quote for your build.</p>
                        <div className="cta-buttons">
                            <a href="/quotation" className="btn-orange">
                                Request a Quotation &nbsp; <ArrowRight size={18} />
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
 
 