import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import animatedVideo from '../assets/animation.mp4';

import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-video">
        <video 
          src={animatedVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="navbar-video-element"
        />
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/">🏡 Home</Link></li>
        <li><Link to="/library">📚 Library</Link></li>
        <li><Link to="/my-garden">🌱 My Garden</Link></li>
        <li><Link to="/reminders">⏰ Reminders</Link></li>
        <li><Link to="/journal">📓 Journal</Link></li>
        
        <li><Link to="/community">🌍 Community</Link></li>
        <li><Link to="/chatbot">🤖 ChatBot</Link></li>
      
        {user ? (
          <>
            <li>👋 Welcome, {user.name}</li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
