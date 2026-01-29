import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Using Web3Forms API - Get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Replace with your key from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'cphamilton1000@yahoo.com',
          subject: `New message from ${formData.name} via your website`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to send message. Please try again or email me directly.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Information</h1>
        <p className="contact-subtitle">
          Send me an email and I will respond within the next few days.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:cphamilton1000@yahoo.com">cphamilton1000@yahoo.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/charleshamilton15" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/charleshamilton15
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💻</div>
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/chamilton15" target="_blank" rel="noopener noreferrer">
                github.com/chamilton15
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+16788188431">(678) 818-8431</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>

          {submitted && (
            <div className="success-message">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={loading}
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
                placeholder="your.email@example.com"
                disabled={loading}
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
                rows="6"
                placeholder="Your message..."
                disabled={loading}
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
