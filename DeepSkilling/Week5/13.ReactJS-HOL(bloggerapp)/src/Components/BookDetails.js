import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// WAY 1: if / else Statement
// WAY 5: Element Variables
// ─────────────────────────────────────────────────────────────────────────────

const books = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    rating: 4.8,
    pages: 464,
    status: 'available',
    cover: '🟦',
    description: 'A handbook of agile software craftsmanship. Every developer should read this.',
    year: 2008,
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    genre: 'Programming',
    rating: 4.7,
    pages: 352,
    status: 'borrowed',
    cover: '🟥',
    description: 'Your journey to mastery — timeless advice for software developers.',
    year: 1999,
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    rating: 4.9,
    pages: 320,
    status: 'available',
    cover: '🟨',
    description: 'An easy and proven way to build good habits and break bad ones.',
    year: 2018,
  },
  {
    id: 4,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Productivity',
    rating: 4.6,
    pages: 296,
    status: 'reserved',
    cover: '🟩',
    description: 'Rules for focused success in a distracted world.',
    year: 2016,
  },
];

function BookDetails() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [filter, setFilter] = useState('all');

  // ── WAY 1: if/else — determine status label & color ───────────────────────
  function getStatusInfo(status) {
    if (status === 'available') {
      return { label: 'Available', className: 'status-available', icon: '✅' };
    } else if (status === 'borrowed') {
      return { label: 'Borrowed', className: 'status-borrowed', icon: '📤' };
    } else {
      return { label: 'Reserved', className: 'status-reserved', icon: '🔒' };
    }
  }

  // ── WAY 5: Element Variable — determine action button ─────────────────────
  function getActionButton(book) {
    let btn;
    if (book.status === 'available') {
      btn = <button className="action-btn btn-borrow" onClick={() => setSelectedBook(book)}>📖 View Details</button>;
    } else if (book.status === 'borrowed') {
      btn = <button className="action-btn btn-return" disabled>📤 Currently Borrowed</button>;
    } else {
      btn = <button className="action-btn btn-reserve" disabled>🔒 Reserved</button>;
    }
    return btn;
  }

  const filteredBooks = filter === 'all'
    ? books
    : books.filter(b => b.status === filter);

  return (
    <div className="section-wrapper">
      {/* Way badges */}
      <div className="way-tags">
        <span className="way-tag purple">WAY 1: if / else</span>
        <span className="way-tag indigo">WAY 5: Element Variable</span>
      </div>

      <h2 className="section-heading">📚 Book Details</h2>
      <p className="section-desc">Conditional rendering using <code>if/else</code> statements and <strong>element variables</strong>.</p>

      {/* Filter bar */}
      <div className="filter-bar">
        {['all', 'available', 'borrowed', 'reserved'].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'filter-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* WAY 1: if/else in JSX via function — book grid */}
      <div className="cards-grid">
        {filteredBooks.map(book => {
          const statusInfo = getStatusInfo(book.status);   // WAY 1 used
          const actionBtn = getActionButton(book);          // WAY 5 used
          return (
            <div className="card book-card" key={book.id}>
              <div className="card-cover">{book.cover}</div>
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-author">by {book.author}</p>
                <div className="card-meta">
                  <span className="meta-tag">{book.genre}</span>
                  <span className="meta-tag">{book.pages} pages</span>
                  <span className="meta-tag">⭐ {book.rating}</span>
                </div>
                <span className={`status-badge ${statusInfo.className}`}>
                  {statusInfo.icon} {statusInfo.label}
                </span>
                <p className="card-desc">{book.description}</p>
                <div className="card-footer">
                  {actionBtn}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* WAY 1: if/else — show detail modal */}
      {selectedBook !== null ? (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBook(null)}>✕</button>
            <div className="modal-cover">{selectedBook.cover}</div>
            <h2 className="modal-title">{selectedBook.title}</h2>
            <p className="modal-author">by {selectedBook.author}</p>
            <div className="modal-grid">
              <div><strong>Genre:</strong> {selectedBook.genre}</div>
              <div><strong>Year:</strong> {selectedBook.year}</div>
              <div><strong>Pages:</strong> {selectedBook.pages}</div>
              <div><strong>Rating:</strong> ⭐ {selectedBook.rating}/5</div>
            </div>
            <p className="modal-desc">{selectedBook.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BookDetails;