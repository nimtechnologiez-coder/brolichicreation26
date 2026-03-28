import React, { useState } from 'react';
import { X, Upload, Send } from 'lucide-react';
import './JobModal.css';

const JobModal = ({ isOpen, onClose, jobTitle, jobId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: jobTitle || '',
    resume: null,
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = new FormData();
    data.append('job_id', jobId);
    data.append('name', formData.fullName);
    data.append('email', formData.email);
    data.append('cover_letter', formData.coverLetter);
    if (formData.resume) {
      data.append('resume', formData.resume);
    }

    fetch('https://admin.brolichi.com/api/apply/', {
      method: 'POST',
      body: data,
    })
    .then(res => res.json())
    .then(result => {
      if (result.status === 'success') {
        alert(result.message);
        setIsSubmitting(false);
        onClose();
      } else {
        alert('Error: ' + result.message);
        setIsSubmitting(false);
      }
    })
    .catch(err => {
      console.error('Submission error:', err);
      alert('An error occurred. Please try again.');
      setIsSubmitting(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Apply for this Role</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              readOnly
              className="readonly-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Resume</label>
            <div className="file-upload-wrapper">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
              />
              <div className="file-upload-design">
                <Upload size={20} />
                <span>{formData.resume ? formData.resume.name : 'Choose a file (PDF, DOC)'}</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              placeholder="Describe your enquiry in detail..."
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-app-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                Send Application <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
