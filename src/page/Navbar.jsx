import '../styles/App.scss';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <h1> Math Magicians</h1>
      <ul className="nav-items">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="container" className="links">
            Calculator
          </Link>
        </li>
        <li id="quotelink" style={{ border: 'none' }}>
          <Link to="quote" className="links">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
