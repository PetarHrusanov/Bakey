import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: #734338;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #734338;
    margin-bottom: 1.5rem;
  }
  
  .info-item {
    margin-bottom: 1.5rem;
    
    h3 {
      color: #734338;
      margin-bottom: 0.5rem;
    }
  }
`;

const ContactForm = styled.form`
  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #734338;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #e6a4a4;
    }
  }

  textarea {
    height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #e6a4a4;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d88c8c;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just simulate a successful submission
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <Header>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with any questions or special orders.</p>
      </Header>

      <ContactGrid>
        <ContactInfo>
          <h2>Get in Touch</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Baker Street</p>
            <p>City, State 12345</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
            <p>Saturday: 8:00 AM - 6:00 PM</p>
            <p>Sunday: 8:00 AM - 3:00 PM</p>
          </div>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <SubmitButton type="submit">Send Message</SubmitButton>
          {status === 'success' && (
            <Message className="success">
              Thank you for your message! We'll get back to you soon.
            </Message>
          )}
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
}

export default Contact;
