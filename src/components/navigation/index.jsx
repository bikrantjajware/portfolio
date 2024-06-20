import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const Navigation = ({ isDark, setIsDark }) => {
  const [showDockedMenu, setShowDockedMenu] = useState(null);
  const navigate = useNavigate();
  const pagePath = window.location.pathname.replace('/', '');
  console.log({ pagePath });
  const dockedMenuModalRef = useRef(null);

  const [mouseOverItem, setMouseOverItem] = useState(pagePath);
  useEffect(() => {
    const listener = (e) => {
      console.log('call listener');
      if (dockedMenuModalRef?.current && dockedMenuModalRef.current.contains(e.target)) {
        return;
      }
      setShowDockedMenu(false);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      // TODO: move this docked  menu logic into separate component so that the listener can be removed when its not rendered
      console.log('removing listener');
      document.removeEventListener('mousedown', listener);
    };
  }, [dockedMenuModalRef]);
  const highlightStyle = 'bg-violet-200 rounded-lg m-2 p-1';
  console.log({ showDockedMenu });
  return (
    <header className="text-2xl dark:text-slate-300 px-2">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={`text-3xl ${pagePath == '' || mouseOverItem == '' ? highlightStyle : ''}`}>
            Bikrant
          </Link>
          <div onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <FaSun className="text-3xl text-yellow-500 hover:text-4xl hover:animate-spin  duration-500" />
            ) : (
              <FaMoon className="text-3xl hover:text-4xl hover:animate-spin transition-all duration-500" />
            )}
          </div>
        </div>

        {showDockedMenu ? (
          <FaTimes
            className="sm:hidden text-3xl cursor-pointer z-10"
            onClick={() => setShowDockedMenu(false)}
          />
        ) : (
          <FaBars
            onClick={() => setShowDockedMenu(true)}
            className="sm:hidden text-3xl cursor-pointer"
          />
        )}
        <div
          ref={dockedMenuModalRef}
          className={`flex sm:hidden absolute w-[100%] top-[-100%] ${
            showDockedMenu && 'top-[0] animate-showNav'
          }
          
            ${showDockedMenu === false && 'animate-hideNav'}`}>
          <ul
            className="flex gap-3 flex-col items-center bg-slate-800 rounded-b-xl  min-h-max shadow-lg py-5 w-full"
            onClick={() => setShowDockedMenu(false)}>
            <li>
              <Link
                className={`${
                  pagePath == 'blogs' || mouseOverItem == 'blogs' ? highlightStyle : ''
                }`}
                to="blogs">
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

        <div className={`hidden sm:flex items-center relative `}>
          <ul className="flex gap-3">
            <li>
              <Link
                // className="w-[100%] className={`${pagePath == 'blogs' ? highlightStyle : ''}`}"
                className={`w-[100%] ${
                  pagePath == 'blogs' || mouseOverItem == 'blogs' ? highlightStyle : ''
                }`}
                to="blogs">
                Blog
              </Link>
            </li>
            <hr className="text-slate-400" />
            <li>
              <Link
                className={`${
                  pagePath == 'bookshelf' || mouseOverItem == 'bookshelf' ? highlightStyle : ''
                }`}
                to="bookshelf">
                Bookshelf
              </Link>
            </li>
            <hr className="text-slate-400" />
            <li>
              <Link
                className={`${
                  pagePath == 'stuff' || mouseOverItem == 'stuff' ? highlightStyle : ''
                }`}
                onMouseEnter={() => {
                  setMouseOverItem('stuff');
                }}
                onMouseLeave={() => {
                  setMouseOverItem('');
                }}
                to="/stuff">
                Stuff i'll add
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
