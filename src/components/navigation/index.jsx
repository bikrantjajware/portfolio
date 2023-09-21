import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ isDark, setIsDark }) => {
  const [showDockedMenu, setShowDockedMenu] = useState(false);
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <header className="text-2xl mx-1">
      <nav className="relative flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-3xl">
            Home
          </Link>
          <div onClick={() => setIsDark(!isDark)}>{isDark ? <FaSun /> : <FaMoon />}</div>
        </div>

        {showDockedMenu ? (
          <FaTimes
            className="sm:hidden text-3xl cursor-pointer"
            onClick={() => setShowDockedMenu(false)}
          />
        ) : (
          <FaBars
            onClick={() => setShowDockedMenu(true)}
            className="sm:hidden text-3xl cursor-pointer"
          />
        )}
        <div className="flex sm:hidden absolute top-12">
          {showDockedMenu && (
            <ul className="flex gap-3 flex-col items-center bg-violet-50  min-h-max w-[100vw] shadow-lg py-5">
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
          )}
        </div>

        <div className={`hidden sm:flex items-center relative `}>
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
