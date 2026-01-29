import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Charlie Hamilton
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to="/resume"
            className={location.pathname === '/resume' ? 'active' : ''}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
