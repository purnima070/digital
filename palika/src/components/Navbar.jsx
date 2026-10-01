import { Link } from "react-router-dom";
import { Menu, UserRound } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <div className="logo-icon">SP</div>

          <div>
            <h2>Smart Palika</h2>
            <span>Digital Local Government</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/notices">Notices</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-button">
            <UserRound size={17} />
            Login
          </Link>

          <button className="menu-button">
            <Menu size={22} />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;