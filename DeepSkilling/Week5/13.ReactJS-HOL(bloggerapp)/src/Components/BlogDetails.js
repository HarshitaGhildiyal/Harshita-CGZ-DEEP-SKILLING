import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// WAY 2: Ternary Operator ( condition ? A : B )
// WAY 3: Short-circuit &&
// ─────────────────────────────────────────────────────────────────────────────

const blogs = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    author: 'Sahil Tanwwar',
    category: 'React',
    readTime: '6 min',
    date: '2026-07-10',
    likes: 342,
    isLiked: false,
    isFeatured: true,
    isPremium: false,
    tags: ['React', 'Hooks', 'useState', 'useEffect'],
    excerpt: 'A comprehensive guide to understanding and using React Hooks in your functional components.',
    image: '⚛️',
  },
  {
    id: 2,
    title: 'Mastering CSS Grid Layout',
    author: 'Priya Sharma',
    category: 'CSS',
    readTime: '8 min',
    date: '2026-07-14',
    likes: 218,
    isLiked: false,
    isFeatured: false,
    isPremium: true,
    tags: ['CSS', 'Grid', 'Layout', 'Frontend'],
    excerpt: 'Deep dive into CSS Grid — build complex, responsive layouts with ease.',
    image: '🎨',
  },
  {
    id: 3,
    title: 'JavaScript ES2024 New Features',
    author: 'Amit Verma',
    category: 'JavaScript',
    readTime: '5 min',
    date: '2026-07-18',
    likes: 476,
    isLiked: false,
    isFeatured: true,
    isPremium: false,
    tags: ['JS', 'ES2024', 'Features'],
    excerpt: 'Explore all the exciting new features introduced in the latest ECMAScript specification.',
    image: '🟨',
  },
  {
    id: 4,
    title: 'Node.js REST API Best Practices',
    author: 'Rahul Gupta',
    category: 'Backend',
    readTime: '10 min',
    date: '2026-07-20',
    likes: 189,
    isLiked: false,
    isFeatured: false,
    isPremium: true,
    tags: ['Node.js', 'API', 'Express', 'Backend'],
    excerpt: 'Build scalable and maintainable REST APIs using Node.js and Express with best practices.',
    image: '🟩',
  },
  {
    id: 5,
    title: 'TypeScript for React Developers',
    author: 'Sahil Tanwwar',
    category: 'TypeScript',
    readTime: '7 min',
    date: '2026-07-21',
    likes: 531,
    isLiked: false,
    isFeatured: true,
    isPremium: false,
    tags: ['TypeScript', 'React', 'Types'],
    excerpt: 'A practical guide to integrating TypeScript into your existing React projects.',
    image: '🔷',
  },
  {
    id: 6,
    title: 'Docker & Kubernetes Fundamentals',
    author: 'Neha Singh',
    category: 'DevOps',
    readTime: '12 min',
    date: '2026-07-19',
    likes: 263,
    isLiked: false,
    isFeatured: false,
    isPremium: true,
    tags: ['Docker', 'Kubernetes', 'DevOps', 'Cloud'],
    excerpt: 'Learn containerization and orchestration from scratch with hands-on examples.',
    image: '🐳',
  },
];

function BlogDetails() {
  const [blogList, setBlogList] = useState(blogs);
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  // Toggle like using ternary
  const toggleLike = (id) => {
    setBlogList(prev =>
      prev.map(b =>
        b.id === id
          ? { ...b, isLiked: !b.isLiked, likes: b.isLiked ? b.likes - 1 : b.likes + 1 }
          : b
      )
    );
  };

  const filtered = blogList
    .filter(b => showPremiumOnly ? b.isPremium : true)
    .filter(b =>
      searchQuery === '' ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="section-wrapper">
      <div className="way-tags">
        <span className="way-tag green">WAY 2: Ternary Operator</span>
        <span className="way-tag teal">WAY 3: Short-circuit &&</span>
      </div>

      <h2 className="section-heading">✍️ Blog Details</h2>
      <p className="section-desc">
        Conditional rendering using <code>ternary (? :)</code> and <code>&amp;&amp;</code> short-circuit operators.
      </p>

      {/* Controls */}
      <div className="controls-bar">
        <input
          className="search-input"
          placeholder="🔍 Search blogs..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {/* WAY 2: Ternary for toggle text */}
        <button
          className={`toggle-filter ${showPremiumOnly ? 'filter-on' : ''}`}
          onClick={() => setShowPremiumOnly(!showPremiumOnly)}
        >
          {showPremiumOnly ? '💎 Premium Only' : '📰 All Blogs'}
        </button>
      </div>

      {/* WAY 3: && - Show result count only if searching */}
      {searchQuery && (
        <p className="search-result-info">
          Found <strong>{filtered.length}</strong> blog{filtered.length !== 1 ? 's' : ''} for "{searchQuery}"
        </p>
      )}

      {/* WAY 2: Ternary — show empty state OR grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <span>🔍</span>
          <p>No blogs found matching your filters.</p>
          <button onClick={() => { setSearchQuery(''); setShowPremiumOnly(false); }}>
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="cards-grid">
          {filtered.map(blog => (
            <div className={`card blog-card ${blog.isFeatured ? 'card-featured' : ''}`} key={blog.id}>

              {/* WAY 3: && — show featured badge only if featured */}
              {blog.isFeatured && (
                <div className="featured-ribbon">⭐ Featured</div>
              )}

              <div className="blog-image">{blog.image}</div>

              <div className="card-body">
                <div className="blog-meta-top">
                  <span className="blog-category">{blog.category}</span>
                  {/* WAY 3: && — show premium badge only if premium */}
                  {blog.isPremium && (
                    <span className="premium-badge">💎 Premium</span>
                  )}
                </div>

                <h3 className="card-title">{blog.title}</h3>

                <div className="blog-author-row">
                  <span>👤 {blog.author}</span>
                  <span>🕐 {blog.readTime} read</span>
                  <span>📅 {blog.date}</span>
                </div>

                {/* WAY 2: Ternary — show/hide excerpt */}
                <p className="card-desc">
                  {expandedId === blog.id
                    ? blog.excerpt
                    : blog.excerpt.substring(0, 80) + '...'}
                </p>

                {/* WAY 2: Ternary — toggle read more text */}
                <button
                  className="read-more-btn"
                  onClick={() => setExpandedId(expandedId === blog.id ? null : blog.id)}
                >
                  {expandedId === blog.id ? '▲ Show less' : '▼ Read more'}
                </button>

                {/* WAY 3: && - show tags only when expanded */}
                {expandedId === blog.id && (
                  <div className="tags-row">
                    {blog.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                )}

                <div className="card-footer">
                  <button
                    className={`like-btn ${blog.isLiked ? 'liked' : ''}`}
                    onClick={() => toggleLike(blog.id)}
                  >
                    {/* WAY 2: Ternary for like icon */}
                    {blog.isLiked ? '❤️' : '🤍'} {blog.likes}
                  </button>

                  {/* WAY 3: && — show "New" badge if posted today */}
                  {blog.date === '2026-07-21' && (
                    <span className="new-badge">🆕 New</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogDetails;