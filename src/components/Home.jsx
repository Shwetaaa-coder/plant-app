import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <header className="home-header">
        <h1>Welcome to Plantiful 🌿</h1>
        <p>Your all-in-one Gardening Planner to keep your plants healthy and your garden thriving year-round.</p>
      </header>

      <section className="features-section">
        <h2>What You Can Do</h2>
        <div className="features-cards">

          <div className="feature-card">
            <h3>⏰ Personalized Care Reminders</h3>
            <p>Never miss watering, fertilizing, or pruning with smart reminders tailored to each plant’s needs and seasons.</p>
          </div>

          <div className="feature-card">
            <h3>🌱 Garden Layout Planner</h3>
            <p>Design your garden visually. Optimize sunlight, spacing, and soil conditions to help your plants flourish.</p>
          </div>

          <div className="feature-card">
            <h3>🌍 Community Sharing</h3>
            <p>Connect with fellow gardeners, share tips, and get inspired by their gardens and experiences.</p>
          </div>

        </div>
      </section>

      <section className="about-section">
        <h2>Why Plantiful?</h2>
        <p>
          Gardening is rewarding but can get overwhelming. Plantiful simplifies your routine by organizing tasks, tracking plant health, and helping you plan smartly — all in one easy-to-use app.
        </p>
      </section>
    </main>
  );
};

export default Home;
