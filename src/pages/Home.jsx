import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cpu, Network } from 'lucide-react';
import TileModal from '../components/TileModal';
import { tileDetails } from '../mock';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tileKey) => {
    setSelectedTile(tileDetails[tileKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTile(null), 300);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Driven Physics Intelligence
          </h1>
          <p className="hero-subtitle">
            Accelerating engineering workflows with intelligent simulation, neural operators, and digital twins.
          </p>
          <div className="hero-buttons">
            <Link to="/technology" className="btn-primary">
              See How It Works
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request a Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Suspense fallback={<div className="spline-loader">Loading 3D Scene...</div>}>
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </Suspense>
        </div>
      </section>

      {/* 3-Tile Layout */}
      <section className="tiles-section">
        <h2 className="section-title">Our Core Technologies</h2>
        <div className="tiles-grid">
          <div className="tile" onClick={() => openModal('intelligent')}>
            <div className="tile-icon">
              <Zap size={48} />
            </div>
            <h3 className="tile-title">Intelligent Simulation</h3>
            <p className="tile-description">
              AI-driven flow and performance prediction for rapid design iteration.
            </p>
            <button className="tile-button">
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          <div className="tile" onClick={() => openModal('physics')}>
            <div className="tile-icon">
              <Cpu size={48} />
            </div>
            <h3 className="tile-title">Physics + AI</h3>
            <p className="tile-description">
              Neural operators learning from physics data for scalable simulations.
            </p>
            <button className="tile-button">
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          <div className="tile" onClick={() => openModal('twins')}>
            <div className="tile-icon">
              <Network size={48} />
            </div>
            <h3 className="tile-title">Digital Twins</h3>
            <p className="tile-description">
              Live, evolving models that mirror real-world systems.
            </p>
            <button className="tile-button">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">Our Vision</h2>
          <p className="about-text">
            Twynetic Orbit is pioneering the next generation of engineering simulation. We combine cutting-edge AI with computational physics to transform how products are designed, tested, and optimized.
          </p>
          <p className="about-text">
            Our platform leverages NVIDIA Omniverse, Physics NeMo, and Warp to deliver real-time, AI-driven insights that drastically reduce development cycles for automotive, aerospace, and energy companies.
          </p>
        </div>
      </section>

      <TileModal isOpen={isModalOpen} onClose={closeModal} tile={selectedTile} />
    </div>
  );
};

export default Home;