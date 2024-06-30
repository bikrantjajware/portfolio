import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const Navigation = ({ isDark, setIsDark }) => {
  const [showDockedMenu, setShowDockedMenu] = useState(null);
  // const navigate = useNavigate();
  const pagePath = window.location.pathname.replace('/', '');
  const [highlightedLink, setHighlightedLink] = useState(pagePath);
  const highlightStyle =
    'bg-violet-200 rounded-lg dark:bg-violet-900 hover:shadow-lg dark:hover:shadow-black';
  const navlinkStyle = 'text-2xl p-2 dark:hover:text-slate-200 hover:scale-105';

  const dockedMenuModalRef = useRef(null);
  const glassStyle =
    'w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-xl dark:bg-opacity-5 dark:hover:bg-opacity-10';
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
  console.log({ showDockedMenu });
  return (
    <header className="text-2xl">
      <nav className="flex justify-between items-center transition-all duration-200 box-border">
        <div className="flex items-center gap-4 p-4">
          <Link
            to="/"
            className={`${navlinkStyle} ${highlightedLink == '' ? highlightStyle : ''}`}
            onMouseEnter={() => setHighlightedLink('')}
            onMouseLeave={() => setHighlightedLink(pagePath)}>
            Bikrant
          </Link>
          <div
            onClick={() => setIsDark(!isDark)}
            className="hover:scale-[1.8] transition-all duration-300">
            {isDark ? (
              <FaSun className="text-2xl text-yellow-500  hover:animate-spin " />
            ) : (
              <FaMoon className="text-2xl hover:animate-spin" />
            )}
          </div>
        </div>

        {showDockedMenu ? (
          <FaTimes
            className="sm:hidden text-2xl cursor-pointer z-50 text-red-700"
            onClick={() => setShowDockedMenu(false)}
          />
        ) : (
          <FaBars
            onClick={() => setShowDockedMenu(true)}
            className="sm:hidden text-2xl cursor-pointer"
          />
        )}
        <div
          ref={dockedMenuModalRef}
          className={`flex sm:hidden absolute w-[100%] top-[-100%] ${
            showDockedMenu && 'top-[0] animate-showNav'
          }
          
            ${showDockedMenu === false && 'animate-hideNav'}`}>
          <ul
            className={`flex text-purple-900 dark:text-inherit font-medium gap-5 flex-col items-center rounded-b-xl  min-h-max shadow-lg py-5 w-full z-10 fixed ${glassStyle}`}
            onClick={() => setShowDockedMenu(false)}>
            <li>
              <Link to="blogs">Blog</Link>
            </li>
            <li>
              <Link to="bookshelf"> Bookshelf</Link>
            </li>

            <li>
              <Link to=""> Stuff i'll add</Link>
            </li>
          </ul>
        </div>

        <div className={`hidden sm:flex items-center relative `}>
          <ul className="flex p-4">
            <li>
              <Link
                className={`${navlinkStyle} ${highlightedLink == 'blogs' ? highlightStyle : ''}`}
                onMouseEnter={() => setHighlightedLink('blogs')}
                onMouseLeave={() => setHighlightedLink(pagePath)}
                to="blogs">
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`${navlinkStyle} ${
                  highlightedLink == 'bookshelf' ? highlightStyle : ''
                }`}
                onMouseEnter={() => setHighlightedLink('bookshelf')}
                onMouseLeave={() => setHighlightedLink(pagePath)}
                to="bookshelf">
                Bookshelf
              </Link>
            </li>
            <li>
              <Link
                className={`${navlinkStyle} ${highlightedLink == 'stuff' ? highlightStyle : ''}`}
                onMouseEnter={() => setHighlightedLink('stuff')}
                onMouseLeave={() => setHighlightedLink(pagePath)}
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
