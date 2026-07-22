import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// WAY 4: Switch Statement
// WAY 6: IIFE (Immediately Invoked Function Expression)
// ─────────────────────────────────────────────────────────────────────────────

const courses = [
  {
    id: 1,
    title: 'React.js Complete Bootcamp',
    instructor: 'John Smith',
    level: 'intermediate',
    category: 'Frontend',
    duration: '42 hrs',
    enrolled: 15320,
    rating: 4.9,
    price: 1999,
    isFree: false,
    progress: 65,
    status: 'enrolled',
    icon: '⚛️',
    badge: 'Bestseller',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    instructor: 'Lisa Chen',
    level: 'beginner',
    category: 'Data Science',
    duration: '38 hrs',
    enrolled: 22100,
    rating: 4.8,
    price: 0,
    isFree: true,
    progress: 0,
    status: 'available',
    icon: '🐍',
    badge: 'Free',
  },
  {
    id: 3,
    title: 'Node.js & Express Masterclass',
    instructor: 'Mark Wilson',
    level: 'advanced',
    category: 'Backend',
    duration: '55 hrs',
    enrolled: 9840,
    rating: 4.7,
    price: 2499,
    isFree: false,
    progress: 100,
    status: 'completed',
    icon: '🟩',
    badge: 'Hot',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Sarah Park',
    level: 'beginner',
    category: 'Design',
    duration: '28 hrs',
    enrolled: 17600,
    rating: 4.6,
    price: 1499,
    isFree: false,
    progress: 0,
    status: 'available',
    icon: '🎨',
    badge: 'New',
  },
  {
    id: 5,
    title: 'AWS Cloud Practitioner',
    instructor: 'David Brown',
    level: 'intermediate',
    category: 'Cloud',
    duration: '30 hrs',
    enrolled: 11200,
    rating: 4.8,
    price: 0,
    isFree: true,
    progress: 30,
    status: 'enrolled',
    icon: '☁️',
    badge: 'Free',
  },
  {
    id: 6,
    title: 'Machine Learning A-Z',
    instructor: 'Dr. Andrew Li',
    level: 'advanced',
    category: 'AI/ML',
    duration: '66 hrs',
    enrolled: 29800,
    rating: 4.9,
    price: 3499,
    isFree: false,
    progress: 0,
    status: 'available',
    icon: '🤖',
    badge: 'Bestseller',
  },
];

function CourseDetails() {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // ── WAY 4: Switch — get level chip ───────────────────────────────────────
  function getLevelChip(level) {
    switch (level) {
      case 'beginner':
        return <span className="level-chip chip-beginner">🌱 Beginner</span>;
      case 'intermediate':
        return <span className="level-chip chip-intermediate">⚡ Intermediate</span>;
      case 'advanced':
        return <span className="level-chip chip-advanced">🔥 Advanced</span>;
      default:
        return <span className="level-chip chip-default">📘 All Levels</span>;
    }
  }

  // ── WAY 4: Switch — get badge color ──────────────────────────────────────
  function getBadgeClass(badge) {
    switch (badge) {
      case 'Bestseller': return 'badge-gold';
      case 'Hot':        return 'badge-red';
      case 'Free':       return 'badge-green';
      case 'New':        return 'badge-blue';
      default:           return 'badge-default';
    }
  }

  // ── WAY 4: Switch — get status action ────────────────────────────────────
  function getStatusAction(course) {
    switch (course.status) {
      case 'enrolled':
        return (
          <div className="status-action">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p className="progress-label">{course.progress}% Complete</p>
            <button className="action-btn btn-continue" onClick={() => setSelectedCourse(course)}>
              ▶ Continue Learning
            </button>
          </div>
        );
      case 'completed':
        return (
          <div className="status-action">
            <div className="completed-badge">🏆 Course Completed!</div>
            <button className="action-btn btn-cert" onClick={() => setSelectedCourse(course)}>
              📜 Get Certificate
            </button>
          </div>
        );
      case 'available':
        return (
          <button className="action-btn btn-enroll" onClick={() => setSelectedCourse(course)}>
            {course.isFree ? '🆓 Enroll Free' : `🛒 Enroll ₹${course.price}`}
          </button>
        );
      default:
        return null;
    }
  }

  const filteredCourses = selectedLevel === 'all'
    ? courses
    : courses.filter(c => c.level === selectedLevel);

  return (
    <div className="section-wrapper">
      <div className="way-tags">
        <span className="way-tag orange">WAY 4: Switch Statement</span>
        <span className="way-tag pink">WAY 6: IIFE</span>
      </div>

      <h2 className="section-heading">🎓 Course Details</h2>
      <p className="section-desc">
        Conditional rendering using <code>switch</code> statements and <strong>IIFE</strong> (Immediately Invoked Function Expression).
      </p>

      {/* Level Filter */}
      <div className="filter-bar">
        {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
          <button
            key={level}
            className={`filter-btn ${selectedLevel === level ? 'filter-active' : ''}`}
            onClick={() => setSelectedLevel(level)}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      {/* WAY 6: IIFE — dynamic header message based on filter */}
      <div className="iife-box">
        <strong>🔍 IIFE Result:</strong>{' '}
        {(() => {
          if (selectedLevel === 'all') return `Showing all ${filteredCourses.length} courses`;
          if (selectedLevel === 'beginner') return `🌱 ${filteredCourses.length} beginner-friendly courses to start your journey!`;
          if (selectedLevel === 'intermediate') return `⚡ ${filteredCourses.length} intermediate courses to level up!`;
          if (selectedLevel === 'advanced') return `🔥 ${filteredCourses.length} advanced courses for experts!`;
          return 'Explore our courses';
        })()}
      </div>

      {/* Courses Grid */}
      <div className="cards-grid">
        {filteredCourses.map(course => (
          <div className="card course-card" key={course.id}>
            {/* WAY 4: Switch — badge color */}
            <div className={`course-badge ${getBadgeClass(course.badge)}`}>
              {course.badge}
            </div>

            <div className="course-icon">{course.icon}</div>
            <div className="card-body">
              <h3 className="card-title">{course.title}</h3>
              <p className="card-author">👨‍🏫 {course.instructor}</p>

              <div className="card-meta">
                {/* WAY 4: Switch — level chip */}
                {getLevelChip(course.level)}
                <span className="meta-tag">🕐 {course.duration}</span>
                <span className="meta-tag">⭐ {course.rating}</span>
              </div>

              <p className="enrolled-count">👥 {course.enrolled.toLocaleString()} enrolled</p>

              {/* WAY 6: IIFE — determine price display */}
              <div className="price-display">
                {(() => {
                  if (course.isFree) {
                    return <span className="price-free">FREE</span>;
                  } else if (course.price > 2000) {
                    return (
                      <>
                        <span className="price-amount">₹{course.price}</span>
                        <span className="price-tag premium-price">Premium</span>
                      </>
                    );
                  } else {
                    return <span className="price-amount">₹{course.price}</span>;
                  }
                })()}
              </div>

              {/* WAY 4: Switch — status action */}
              <div className="card-footer">
                {getStatusAction(course)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WAY 6: IIFE — Modal */}
      {(() => {
        if (!selectedCourse) return null;
        return (
          <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCourse(null)}>✕</button>
              <div className="modal-cover" style={{ fontSize: '60px' }}>{selectedCourse.icon}</div>
              <h2 className="modal-title">{selectedCourse.title}</h2>
              <p className="modal-author">by {selectedCourse.instructor}</p>
              <div className="modal-grid">
                <div><strong>Level:</strong> {selectedCourse.level}</div>
                <div><strong>Duration:</strong> {selectedCourse.duration}</div>
                <div><strong>Rating:</strong> ⭐ {selectedCourse.rating}</div>
                <div><strong>Enrolled:</strong> {selectedCourse.enrolled.toLocaleString()}</div>
              </div>
              {/* IIFE inside modal */}
              <div className="modal-status-msg">
                {(() => {
                  switch (selectedCourse.status) {
                    case 'completed': return '🏆 Congratulations! You completed this course.';
                    case 'enrolled':  return `⏳ You are ${selectedCourse.progress}% through this course. Keep going!`;
                    case 'available': return selectedCourse.isFree ? '🆓 This course is FREE. Enroll now!' : `🛒 Enroll for just ₹${selectedCourse.price}`;
                    default: return '';
                  }
                })()}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default CourseDetails;