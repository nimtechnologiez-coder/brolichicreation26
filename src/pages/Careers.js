import React, { useState } from 'react';
import './Careers.css';
import logo from '../images/logo.png';
import Navbar from '../components/Navbar';
import checkgreen from '../images/check-green.png';
import checkorange from '../images/check-orange.png';
import { 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import Footer from '../components/Footer';

const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const jobs = [
    {
      id: 1,
      title: 'Logistics Coordinator',
      location: 'Harare, Zimbabwe',
      department: 'Transports & Logistics',
      type: 'Full-time',
      description: 'Our transport services ensure safe and timely delivery of construction materials and goods to project sites. With a reliable fleet and experienced drivers, we support both small and large-scale logistics needs.',
      responsibilities: [
        'Coordinate and schedule daily transport routes',
        'Liaise with clients regarding delivery status and timelines',
        'Manage driver schedules and vehicle maintenance records',
        'Ensure compliance with transport regulations',
        'Prepare logistics reports and documentation'
      ],
      requirements: [
        'Diploma or degree in Logistics, Supply Chain or related field',
        '2+ years experience in logistics or transport coordination',
        'Proficiency in MS Office',
        'Strong communication skills',
        'Driver\'s license advantageous'
      ]
    },
    {
        id: 2,
        title: 'Operations Manager',
        location: 'Harare, Zimbabwe',
        department: 'Operations',
        type: 'Full-time',
        description: 'Oversee the daily business operations and ensure all departments are working efficiently towards our corporate goals.',
        responsibilities: [
          'Develop and implement operational strategies',
          'Optimize supply chain processes',
          'Manage operational budgets and forecasts'
        ],
        requirements: [
          'Bachelor\'s degree in Business Admin or related field',
          '5+ years operational management experience'
        ]
      },
      {
        id: 3,
        title: 'Sales Associate',
        location: 'Harare, Zimbabwe',
        department: 'Sales & Marketing',
        type: 'Full-time',
        description: 'Drive revenue growth by identifying new business opportunities and maintaining strong relations with existing clients.',
        responsibilities: [
          'Identify and reach out to potential clients',
          'Present product offerings and negotiate contracts'
        ],
        requirements: [
          'Strong sales and negotiation skills',
          'Previous experience in building materials industry preferred'
        ]
      }
  ];

  return (
    <div className="careers-container">
      {/* Hero Section */}
      <header className="hero-section">
        <span className="sub-tag">Join Our Team</span>
        <h1>Careers At Brolichi</h1>
        <p>
          Be part of a growing enterprise that's building Africa's future. 
          We value talent, drive, and a commitment to excellence.
        </p>
      </header>

      {/* Job Board */}
      <section className="job-board">
        <div className="job-board-header">
          <div>
            <span className="sub-tag">Now Hiring</span>
            <h2 className="section-title">Open Positions</h2>
          </div>
          <div className="job-count-tag">3 Roles Available</div>
        </div>

        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div>
                  <div className="job-tags">
                    <span className="tag tag-orange">{job.department}</span>
                    <span className="tag-gray">{job.type}</span>
                  </div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-location">
                    <MapPin size={16} color="#FF8A00" />
                    {job.location}
                  </div>
                </div>
                <button 
                  className="view-details-btn"
                  onClick={() => toggleJob(job.id)}
                >
                  {expandedJobId === job.id ? 'Hide details' : 'View details'}
                  {expandedJobId === job.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              <p className="job-description">{job.description}</p>

              {expandedJobId === job.id && (
                <div className="job-details-content">
                  <div className="job-details-grid">
                    <div className="details-section">
                      <h3>Key Responsibilities</h3>
                      <ul className="details-list">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx}>
<img 
                              src= {checkgreen}
                              alt="check"
                              className="check-icons-img"
                            />                             {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="details-section">
                      <h3>Requirements</h3>
                      <ul className="details-list">
                        {job.requirements.map((item, idx) => (
                          <li key={idx}>
                            <img 
                              src= {checkorange}
                              alt="check"
                              className="check-icons-img"
                            />                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a href="/apply" className="careers-btn apply-now-btn">Apply Now for this Role</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="ctas">
      <div className="ctas-container">
        <h2 className="ctas-title">Ready to Start Your Project ?</h2>

        <p className="ctas-subtitle">
          Contact Brolichi Creation Enterprises today. Get a personalised<br></br>
          quote for your build.
        </p>

        <div className="ctas-buttons">
         <a href="/quotation" className="ctas-btn primary">
            Request a Quotation →
          </a>

          <a href="/contact" className="ctas-btn secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>

      <Footer/>
    </div>
  );
};

export default Careers;
