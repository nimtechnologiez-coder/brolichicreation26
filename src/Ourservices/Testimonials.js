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
        text: "Brolichi made our procurement process smooth and hassle-free. The materials arrived exactly as promised, and the quality exceeded expectations and quality service.",
        author: {
            name: "Arjun Patel",
            role: "CEO",
            company: "Patel Infra Solutions",
            initial: "A"
        }
    },
    {
        id: 3,
        category: "Import & Export Services",
        rating: 5,
        text: "We were impressed with their timely delivery and professional communication. Brolichi handled everything efficiently from start to finish delivered without delays of the service.",
        author: {
            name: "Sarah Johnson",
            role: "Project Manager",
            company: "UrbanBuild Ltd",
            initial: "S"
        }
    },
    {
        id: 4,
        category: "Customs Clearing Assistance",
        rating: 5,
        text: "Reliable service and consistent quality — that's what we experienced with Brolichi. They’ve become our go-to supplier for building materials We received our materials on time without any issues",
        author: {
            name: "Mohammed Khan",
            role: "Director",
            company: "Khan Constructions",
            initial: "M"
        }
    },
    {
        id: 5,
        category: "Logistics & Transportation",
        rating: 5,
        text: "Their team understood our requirements clearly and delivered without delays. It’s rare to find this level of commitment in the industry.",
        author: {
            name: "Priya Nair",
            role: "Operations Head",
            company: "Moyo Construction Ltd",
            initial: "P"
        }
    },
    {
        id: 6,
        category: "Project Procurement Solutions",
        rating: 5,
        text: "From pricing to delivery, everything was transparent and well-managed. Brolichi stands out for their professionalism and reliability.",
        author: {
            name: "Daniel Smith",
            role: "CEO",
            company: "Smith BuildWorks",
            initial: "D"
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
 
 