import React from 'react';
import './Header.css';

const Header = ({ activeSection, isScrolled }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certification', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`header-main ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="header-logo">
          Vetri<span>selvan</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`}>
          <ul className="header-nav-list">
            {navItems.map(item => (
              <li key={item.id} className="header-nav-item">
                <a
                  href={`#${item.id}`}
                  className={`header-nav-link ${activeSection === item.id ? 'header-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header-hamburger ${menuOpen ? 'header-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
