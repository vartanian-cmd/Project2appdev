import { useParams, Link, Navigate } from 'react-router-dom';
import posts from '../data/posts';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="page-wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Link to="/blog" className="blog-back">Back to Blog</Link>
          <div className="blog-detail-header">
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {post.tags.map(t => <span key={t} className="tag tag-accent">{t}</span>)}
            </div>
            <h1 style={{ marginBottom: '1rem' }}>{post.title}</h1>
            <p style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.8rem', color: 'var(--mid)' }}>
              By Alex Vartanian {post.date}
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '0 clamp(1rem, 4vw, 3rem)' }}>
        <div className="blog-detail-cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
      </div>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-detail-body">
            <p>{post.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
}