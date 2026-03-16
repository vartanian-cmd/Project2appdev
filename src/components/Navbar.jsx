import { NavLink, Link} from 'react-router-dom';

export default function Navbar() {
  

  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="nav-logo">
            Alex<span> </span>Vartanian
          </Link>

          <div className="nav-links">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/resume" className={navClass}>Resume</NavLink>
            <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>

            <NavLink to="/blog" className={navClass}>Blog</NavLink>

            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </div>

        
        </div>
      </nav>

   
    </>
  );
}
