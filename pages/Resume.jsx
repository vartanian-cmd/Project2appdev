const experience = [
  {
    role: 'Database Team Project',
    date: 'October 2025',
    description: 'Created a fully functional database system with a user-friendly GUI using MySQL. The project included features such as data entry, querying, and reporting, demonstrating strong skills in database design and documented well using a technical document.',
  },
  {
    role: 'A* algorithm Pathfinding Project',
    date: 'March 2025',
    description: 'Re-created popular game Pacman using the enemy pathfinding as a way to showcase the A* Search algorithm',
  },
];

const education = [
  {
    degree: '(In Progress) B.S. Computer Science',
    school: 'California State University Bakersfield',
    year: 'Present',
    note: 'Active member of the Computer Science Robotics Club and regularly participates in various extracurricular activities',
  },
  {
    degree: 'Associate in Math and Sciences',
    school: 'Antelope Valley College',
    year: '2025',
    note: 'Coursework included high-level Math and Physics Courses',
  },
  {
    degree: 'Associate in Computer Science',
    school: 'Antelope Valley College',
    year: '2025',
    note: 'Coursework included basic level programming, Data structures, and Discrete Structures',
},
];

export default function Resume() {
  return (
    <main className="page-wrap">
      <section className="section">
        <div className="container">
          <p className="section-label">Resume</p>
          <h2 style={{ marginBottom: '3rem' }}>Professional Profile</h2>

          <div>
            
            <div>
             
              <div className="resume-section">
                <h3>Professional Summary</h3>
                <p>
                  Computer science undergraduate with 3+ years of experience with React, React Native, JavaScript, Java, Luna, Python, and Unity. 
                </p>
                <p style={{ marginTop: '1rem' }}>
                  I've helped build and maintain multiple systems, including Mobile applications, Web applications, Game applications, and a full working database, including a GUI. 
                </p>
              </div>

              
              <div className="resume-section">
                <h3>Experience</h3>
                {experience.map((job, i) => (
                  <div key={i} className="timeline-item">
                    <div>
                      <div className="timeline-role">{job.role}</div>
                      <div className="timeline-company">{job.company}</div>
                      <p className="timeline-desc">{job.description}</p>
                    </div>
                    <div className="timeline-date">{job.date}</div>
                  </div>
                ))}
              </div>

             
              <div className="resume-section">
                <h3>Education</h3>
                {education.map((edu, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-year">{edu.year}</div>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.4rem' }}>{edu.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
