// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider> {/* AuthContext is available everywhere */}
    <BrowserRouter> {/* Router now also gets context */}
      <App />
    </BrowserRouter>
  </AuthProvider>
);
