import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const Navigation = ({ isDark, setIsDark }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <header className="text-2xl mx-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-3xl">
            Home
          </Link>
          <div onClick={() => setIsDark(!isDark)}>{isDark ? <FaSun /> : <FaMoon />}</div>
        </div>
        <FaBars
          className="sm:hidden text-4xl cursor-pointer"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        />

        <div className={`hidden sm:flex items-center relative ${isNavExpanded ? 'expanded' : ''}`}>
          <ul className="flex gap-3">
            <li>
              <Link className="w-[100%]" to="blogs">
                Blog
              </Link>
            </li>
            <hr className="text-slate-400" />
            <li>
              <Link to="bookshelf"> Bookshelf</Link>
            </li>
            <hr className="text-slate-400" />
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
