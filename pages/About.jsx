import aboutImg from '../assets/about.jpeg';
import resumePdf from '../assets/resume.pdf';

const specializations = [
  'Object Oriented Programming',
  'Database Creation with GUI',
  'Game Development (Unity)',
  'Mobile App Development (React Native)',
];

const skillGroups = [
  { label: 'Experienced In', items: ['React', 'React Native', 'Expo', 'Javascript', 'Java', 'Lua', 'Python'] },
];

export default function About() {
  return (
    <main className="page-wrap">
      <section className="section">
        <div className="container">
          <p className="section-label">About Me</p>

          <div className="about-grid">
            
            
              <img
                src={aboutImg}
              />
           

            
            <div className="about-text">
              <h2>Professional Summary</h2>

              <p>
                I'm Alex Vartanian, I am 22 years old, and currently enrolled in California State University, Bakersfield as a Computer Science major. I have 3+ years of experience
                in software development. I have experience in a variety of programming languages and am currently working on projects to further my experience in the field.
              </p>


              
              <h4 style={{ margin: '2rem 0 0.75rem', fontSize: '0.875rem', fontFamily: 'var(--ff-mono)', letterSpacing: '0.1em', color: 'var(--mid)', textTransform: 'uppercase' }}>
                Specializations
              </h4>
              <ul className="specializations">
                {specializations.map(s => <li key={s}>{s}</li>)}
              </ul>


              <h4 style={{ margin: '2rem 0 0.75rem', fontSize: '0.875rem', fontFamily: 'var(--ff-mono)', letterSpacing: '0.1em', color: 'var(--mid)', textTransform: 'uppercase' }}>
                Technical Skills
              </h4>
              {skillGroups.map(group => (
                <div key={group.label} style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--ff-mono)' }}>{group.label}</p>
                  <div className="skills-grid">
                    {group.items.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={resumePdf}
                  download="resume.pdf"
                  className="btn btn-primary"
                >
                   Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
