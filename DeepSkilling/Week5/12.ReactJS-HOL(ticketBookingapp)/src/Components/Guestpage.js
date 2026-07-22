import React from 'react';
import flights from './flightData';

function GuestPage({ onLogin }) {
  return (
    <div className="page guest-page">
      {/* Hero Banner */}
      <div className="hero">
        <div className="hero-content">
          <p className="hero-badge">✈️ Browse as Guest</p>
          <h1 className="hero-title">Explore Available Flights</h1>
          <p className="hero-subtitle">
            You are browsing as a <strong>Guest</strong>. View all available flights below.
            <br />
            <span className="login-cta">🔐 Login to book your tickets!</span>
          </p>
          <button className="btn btn-hero" onClick={onLogin}>
            Login to Book Now →
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">Destinations</span>
          </div>
          <div className="stat">
            <span className="stat-num">6</span>
            <span className="stat-label">Airlines</span>
          </div>
          <div className="stat">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </div>

      {/* Guest Notice */}
      <div className="guest-notice">
        <span className="notice-icon">👁️</span>
        <span>
          <strong>Guest View:</strong> You can browse all flights. Please{' '}
          <button className="inline-login-btn" onClick={onLogin}>login</button>{' '}
          to book tickets.
        </span>
      </div>

      {/* Flights Section */}
      <section className="flights-section">
        <h2 className="section-title">Available Flights</h2>
        <div className="flights-grid">
          {flights.map((flight) => (
            <div className="flight-card" key={flight.id}>
              <div className="flight-header">
                <div className="airline-info">
                  <span className="airline-logo">{flight.logo}</span>
                  <div>
                    <p className="airline-name">{flight.airline}</p>
                    <p className="flight-class">{flight.class}</p>
                  </div>
                </div>
                <div className="flight-badge">{flight.type}</div>
              </div>

              <div className="flight-route">
                <div className="route-point">
                  <p className="route-time">{flight.departure}</p>
                  <p className="route-city">{flight.from}</p>
                </div>
                <div className="route-line">
                  <span className="route-duration">{flight.duration}</span>
                  <div className="line">
                    <div className="dot"></div>
                    <div className="dash"></div>
                    <span className="plane-icon">✈</span>
                    <div className="dash"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="route-point">
                  <p className="route-time">{flight.arrival}</p>
                  <p className="route-city">{flight.to}</p>
                </div>
              </div>

              <div className="flight-footer">
                <div className="price-block">
                  <span className="price-label">Starting from</span>
                  <span className="price">{flight.price}</span>
                </div>
                <button className="btn btn-locked" onClick={onLogin}>
                  🔐 Login to Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GuestPage;