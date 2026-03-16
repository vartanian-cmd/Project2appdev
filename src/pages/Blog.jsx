import { Link } from 'react-router-dom';
import posts from '../data/posts';

export default function Blog() {
  return (
    <main className="page-wrap">
      <section className="section">
        <div className="container">
          <p className="section-label">Blog</p>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>Recent Posts</h2>
          </div>
          <div className="blog-grid">
            {posts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="card blog-card">
                <div className="blog-card-img">
                  <img src={post.coverImage} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-date">{post.date}</span>
                    {post.tags.slice(0, 1).map(t => <span key={t} className="tag tag-accent">{t}</span>)}
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-read-more">Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}