// Mock data for Twynetic Orbit frontend

export const tileDetails = {
  intelligent: {
    title: "Intelligent Simulation",
    description: "Harness the power of AI-driven flow and performance prediction to accelerate engineering workflows.",
    details: [
      "Neural network-powered CFD predictions",
      "Real-time aerodynamic analysis",
      "Reduced simulation time by 1000x",
      "Physics-informed machine learning models",
      "Seamless CAD integration"
    ]
  },
  physics: {
    title: "Physics + AI",
    description: "Neural operators that learn from physics data to create intelligent, scalable simulation tools.",
    details: [
      "Physics-informed neural networks (PINNs)",
      "Transfer learning across simulation domains",
      "Adaptive mesh refinement with AI",
      "Multi-scale modeling capabilities",
      "Integration with NVIDIA PhysicsNeMo"
    ]
  },
  twins: {
    title: "Digital Twins",
    description: "Live, evolving models that mirror real-world systems for continuous optimization.",
    details: [
      "Real-time sensor data integration",
      "Predictive maintenance analytics",
      "Performance optimization loops",
      "Cloud-native digital twin platform",
      "NVIDIA Omniverse compatibility"
    ]
  }
};

export const contactFormSubmissions = [];

export const submitContactForm = (formData) => {
  const submission = {
    ...formData,
    timestamp: new Date().toISOString(),
    id: Date.now()
  };
  contactFormSubmissions.push(submission);
  return submission;
};