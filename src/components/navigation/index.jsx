import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const Navigation = ({ isDark, setIsDark }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="brand-name">
          Home
        </Link>

        <FaBars className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)} />

        <div className={`navbar-menu ${isNavExpanded ? 'expanded' : ''}`}>
          <div className="theme-switch" onClick={() => setIsDark(!isDark)}>
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
          <ul>
            <li>
              <Link to="blogs"> Blog</Link>
            </li>
            <hr />
            <li>
              <Link to="bookshelf"> Bookshelf</Link>
            </li>
            <hr />
            <li>
              <Link to=""> Stuff i'll add</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
