import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      title: "Automotive Aerodynamics",
      description: "Optimize vehicle performance with AI-driven aerodynamic analysis. Reduce drag, improve downforce, and accelerate development cycles.",
      image: "https://images.unsplash.com/photo-1760550878518-7c6ba0124c8b",
      benefits: [
        "Drag coefficient optimization",
        "Cooling system analysis",
        "Real-time design iteration",
        "Wind tunnel validation"
      ]
    },
    {
      title: "Aerospace Flow Modeling",
      description: "Advanced CFD for aircraft and spacecraft design. Predict performance across flight regimes with unprecedented speed and accuracy.",
      image: "https://images.unsplash.com/photo-1734444555950-e253c772adb6",
      benefits: [
        "Supersonic flow analysis",
        "Wing design optimization",
        "Propulsion system modeling",
        "Thermal management"
      ]
    },
    {
      title: "Energy System Optimization",
      description: "Enhance efficiency of power generation and distribution systems. Model complex fluid dynamics in turbines, heat exchangers, and more.",
      image: "https://images.unsplash.com/photo-1732559207172-570f74930b07",
      benefits: [
        "Turbine blade optimization",
        "Heat exchanger design",
        "Power plant efficiency",
        "Renewable energy systems"
      ]
    }
  ];

  return (
    <div className="applications-page">
      <section className="app-hero">
        <h1 className="page-title">Applications</h1>
        <p className="page-subtitle">
          Transforming engineering workflows across industries with AI-accelerated physics simulation.
        </p>
      </section>

      {/* Applications Grid */}
      <section className="applications-section">
        {applications.map((app, index) => (
          <div key={index} className="application-card">
            <div className="app-image-container">
              <img src={app.image} alt={app.title} className="app-image" />
            </div>
            <div className="app-content">
              <h2 className="app-title">{app.title}</h2>
              <p className="app-description">{app.description}</p>
              <div className="app-benefits">
                <h4 className="benefits-title">Key Capabilities:</h4>
                <ul className="benefits-list">
                  {app.benefits.map((benefit, idx) => (
                    <li key={idx} className="benefit-item">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="section-title">Trusted by Industry Leaders</h2>
        <p className="partners-subtitle">Collaborating with the world's top technology and engineering companies</p>
        <div className="partners-grid">
          <div className="partner-logo">NVIDIA</div>
          <div className="partner-logo">GPU Partner</div>
          <div className="partner-logo">Research Labs</div>
          <div className="partner-logo">Industry Partner</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="app-cta-section">
        <h2 className="cta-title">See It in Action</h2>
        <p className="cta-text">
          Discover how Twynetic Orbit can accelerate your engineering workflows.
        </p>
        <Link to="/contact" className="btn-primary">
          Request a Demo
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Applications;