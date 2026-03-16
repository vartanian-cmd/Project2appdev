import { useParams, Link, Navigate } from 'react-router-dom';
import projects from '../data/projects';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <main className="page-wrap">

      <div className="project-detail-hero">
        <div className="container">
          <Link to="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--light)', marginBottom: '2rem' }}>
            Back to Projects
          </Link>
          <h1 style={{ marginBottom: '1rem' }}>{project.title}</h1>
          <p style={{ maxWidth: '640px', fontSize: '1.1rem' }}>{project.description}</p>

          <div className="project-detail-meta">
            <div className="meta-item">
              <label>Year</label>
              <p>{project.year}</p>
            </div>
            <div className="meta-item">
              <label>Role</label>
              <p>{project.role}</p>
            </div>
            {project.github && (
              <div className="meta-item">
                <label>Source Code</label>
                <p><a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--light)' }}>GitHub</a></p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="project-detail-img">
        <img src={project.image} alt={project.title} />
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="project-detail-content">
            <h3 style={{ marginTop: '2rem' }}>Project</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.85' }}>{project.description}</p>

            <h3 style={{ marginTop: '2rem' }}>Tech Stack</h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.875rem', color: 'var(--mid)' }}>
              {project.tech.join(' · ')}
            </p>

            {project.github && (
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
