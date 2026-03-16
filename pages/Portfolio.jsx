import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Portfolio() {
  return (
    <main className="page-wrap">
      <section className="section">
        <div className="container">
          <div className="portfolio-header">
            <p className="section-label">Portfolio</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid" style={{ marginTop: '2.5rem' }}>
            {projects.map(project => (
              <Link to={`/portfolio/${project.slug}`} key={project.id} className="card project-card">
                <div className="project-card-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.excerpt}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--light)', fontFamily: 'var(--mono)', marginBottom: '0.75rem' }}>
                    {project.tech.join(' · ')}
                  </p>
                  <div className="project-card-footer">
                    <span className="project-link">Case Study →</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--light)' }}>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
