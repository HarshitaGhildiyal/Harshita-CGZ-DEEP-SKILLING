import React, { useState } from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('book');
  const [showContent, setShowContent] = useState(true);

  // ─── WAY 5: Element Variable ───────────────────────────────────────
  let activeComponent;
  if (activeTab === 'book') {
    activeComponent = <BookDetails />;
  } else if (activeTab === 'blog') {
    activeComponent = <BlogDetails />;
  } else {
    activeComponent = <CourseDetails />;
  }

  const tabs = [
    { id: 'book',   label: '📚 Book Details',   color: '#6c63ff' },
    { id: 'blog',   label: '✍️ Blog Details',    color: '#00c896' },
    { id: 'course', label: '🎓 Course Details',  color: '#ff6b6b' },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">📖</span>
          <span className="brand-name">BloggerApp</span>
        </div>
        <div className="nav-right">
          <span className="cr-badge">Conditional Rendering Demo</span>
          {/* WAY 3: Short-circuit && */}
          {showContent && (
            <span className="online-dot" title="Content Visible">● Live</span>
          )}
          <button
            className="toggle-btn"
            onClick={() => setShowContent(!showContent)}
          >
            {/* WAY 2: Ternary Operator */}
            {showContent ? '🙈 Hide All' : '👁️ Show All'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <p className="hero-badge">⚛️ React Conditional Rendering</p>
        <h1 className="hero-title">Blogger<span className="hero-accent">App</span></h1>
        <p className="hero-sub">
          Exploring <strong>6 ways</strong> of Conditional Rendering in React
        </p>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'tab-active' : ''}`}
              style={activeTab === tab.id ? { '--tab-color': tab.color } : {}}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* WAY 4: Switch Statement rendered via helper */}
      <div className="cr-legend">
        <p className="legend-title">🧪 Active Rendering Method:</p>
        {/* WAY 6: IIFE */}
        {(() => {
          switch (activeTab) {
            case 'book':
              return <span className="legend-tag purple">if/else + Element Variable</span>;
            case 'blog':
              return <span className="legend-tag green">Ternary Operator + &&</span>;
            case 'course':
              return <span className="legend-tag red">Switch + IIFE</span>;
            default:
              return null;
          }
        })()}
      </div>

      {/* Main Content — WAY 3 (&&) and WAY 5 (Element Variable) */}
      <main className="main">
        {showContent && activeComponent}

        {/* WAY 2: Ternary — show placeholder when hidden */}
        {!showContent ? (
          <div className="hidden-msg">
            <span>🙈</span>
            <p>Content is hidden. Click <strong>"Show All"</strong> to reveal.</p>
          </div>
        ) : null}
      </main>

      <footer className="footer">
        <p>BloggerApp · Built with React · All 6 Conditional Rendering Ways</p>
      </footer>
    </div>
  );
}

export default App;