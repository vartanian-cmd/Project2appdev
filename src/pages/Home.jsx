import { Link } from 'react-router-dom';
import homeimage from '../assets/homeimage.jpg';

export default function Home() {
  return (
    <main className="page-wrap">
 
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="hero">
            <div className="hero-content">
              <p className="hero-eyebrow">Computer Science Undergraduate</p>
             <h1>
                Alex Vartanian<br />
              </h1>
              <p className="hero-desc">
                I'm Alex Vartanian — a computer science undergraduate at California State University Bakersfield. I have a passion for software development. I'm actively seeking internship opportunities and Project Ideas.
              </p>
            </div>

            <div className="hero-img-wrap">
              <div className="hero-img-frame">
                <img
                  src={homeimage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}