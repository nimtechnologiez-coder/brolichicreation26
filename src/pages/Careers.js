import React, { useState, useEffect } from 'react';
import './Careers.css';

import checkgreen from '../images/check-green.webp';
import checkorange from '../images/check-orange.webp';
import { 
  ChevronDown, 
  ChevronUp, 
  MapPin, 

} from 'lucide-react';
import Footer from '../components/Footer';
import JobModal from '../components/JobModal';


const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://brolichicreationbackend26.onrender.com/api/jobs/')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setLoading(false);
      });
  }, []);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };


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
          <div className="job-count-tag">{jobs.length} Roles Available</div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Loading jobs...</div>
        ) : (
          <div className="jobs-list">
            {jobs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>No open positions at the moment.</div>
            ) : (
                jobs.map((job) => (
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
                        <button 
                            className="careers-btn apply-now-btn"
                            onClick={() => openModal(job)}
                        >
                            Apply Now for this Role
                        </button>

                        </div>
                    )}
                    </div>
                ))
            )}
          </div>
        )}
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
      
      {selectedJob && (
        <JobModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          jobId={selectedJob.id}
          jobTitle={selectedJob.title} 
        />
      )}
    </div>

  );
};

export default Careers;
