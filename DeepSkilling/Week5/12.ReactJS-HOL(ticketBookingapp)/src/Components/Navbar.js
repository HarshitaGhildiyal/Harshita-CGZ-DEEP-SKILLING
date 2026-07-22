import React from 'react';

function Navbar({ isLoggedIn, onLogin, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">✈️</span>
        <span className="brand-name">SkyBook</span>
        <span className="brand-tagline">Premium Flight Booking</span>
      </div>
      <div className="navbar-actions">
        {isLoggedIn ? (
          <div className="user-info">
            <div className="user-avatar">
              <span>👤</span>
            </div>
            <span className="user-label">Welcome, Traveler!</span>
            <button className="btn btn-logout" onClick={onLogout}>
              🚪 Logout
            </button>
          </div>
        ) : (
          <button className="btn btn-login" onClick={onLogin}>
            🔐 Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;