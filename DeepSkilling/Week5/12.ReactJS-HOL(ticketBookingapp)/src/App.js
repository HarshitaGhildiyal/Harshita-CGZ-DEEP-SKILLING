import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <main className="main-content">
        {isLoggedIn ? (
          <UserPage onLogout={handleLogout} />
        ) : (
          <GuestPage onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
}

export default App;