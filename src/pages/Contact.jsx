import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { submitContactForm } from '../mock';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    submitContactForm(formData);
    
    setIsSubmitted(true);
    toast.success('Thank you! We\'ll be in touch soon.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        useCase: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          Ready to accelerate your engineering workflows? Join our pilot program or request a demo.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2 className="contact-info-title">Let's Build the Future Together</h2>
          <p className="contact-info-text">
            Whether you're exploring AI-driven simulation for the first time or looking to scale existing workflows, we're here to help.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <h3 className="detail-title">Pilot Program</h3>
              <p className="detail-text">
                Join early adopters testing Twynetic Orbit in real-world engineering scenarios.
              </p>
            </div>
            <div className="contact-detail">
              <h3 className="detail-title">Custom Solutions</h3>
              <p className="detail-text">
                Work with our team to build tailored AI-simulation workflows for your specific needs.
              </p>
            </div>
            <div className="contact-detail">
              <h3 className="detail-title">Research Collaboration</h3>
              <p className="detail-text">
                Partner with us to advance the state of AI-accelerated physics simulation.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              <CheckCircle2 size={64} className="success-icon" />
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-text">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  required
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="useCase">Use Case *</Label>
                <Select onValueChange={(value) => handleChange('useCase', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automotive">Automotive Aerodynamics</SelectItem>
                    <SelectItem value="aerospace">Aerospace Flow Modeling</SelectItem>
                    <SelectItem value="energy">Energy System Optimization</SelectItem>
                    <SelectItem value="research">Research Collaboration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  placeholder="Tell us about your project and what you're looking to achieve..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="submit-button">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;