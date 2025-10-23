import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      title: "CAD Import",
      description: "Import 3D CAD models from any major design software",
      details: "Supports STEP, IGES, STL, and native formats"
    },
    {
      title: "Voxelization",
      description: "Convert geometry into GPU-optimized voxel representation",
      details: "Adaptive mesh refinement for optimal performance"
    },
    {
      title: "AI Prediction",
      description: "Neural operators predict flow fields and performance metrics",
      details: "Physics-informed neural networks trained on validated data"
    },
    {
      title: "Visualization",
      description: "Interactive 3D visualization of results in real-time",
      details: "NVIDIA Omniverse integration for photorealistic rendering"
    }
  ];

  return (
    <div className="technology-page">
      <section className="tech-hero">
        <h1 className="page-title">How It Works</h1>
        <p className="page-subtitle">
          Our AI-driven pipeline transforms traditional CFD workflows into real-time engineering insights.
        </p>
      </section>

      {/* Interactive Pipeline */}
      <section className="pipeline-section">
        <h2 className="section-title">The Twynetic Orbit Pipeline</h2>
        <div className="pipeline-container">
          <div className="pipeline-steps">
            {pipelineSteps.map((step, index) => (
              <div
                key={index}
                className={`pipeline-step ${activeStep === index ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  {activeStep === index && (
                    <p className="step-details">{step.details}</p>
                  )}
                </div>
                {index < activeStep && (
                  <CheckCircle2 className="step-check" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-section">
        <h2 className="section-title">Powered by Industry Leaders</h2>
        <div className="tech-stack-grid">
          <div className="tech-card">
            <h3 className="tech-card-title">NVIDIA Omniverse</h3>
            <p className="tech-card-text">
              Real-time 3D collaboration and simulation platform for complex engineering workflows.
            </p>
          </div>
          <div className="tech-card">
            <h3 className="tech-card-title">Physics NeMo</h3>
            <p className="tech-card-text">
              Neural operators and physics-informed ML models for accurate simulation predictions.
            </p>
          </div>
          <div className="tech-card">
            <h3 className="tech-card-title">NVIDIA Warp</h3>
            <p className="tech-card-text">
              GPU-accelerated Python framework for high-performance simulation and graphics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tech-cta-section">
        <h2 className="cta-title">Ready to Transform Your Workflow?</h2>
        <p className="cta-text">
          Join leading engineering teams using AI-accelerated simulation.
        </p>
        <Link to="/contact" className="btn-primary">
          Request a Demo
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Technology;