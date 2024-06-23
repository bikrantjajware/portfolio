import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const Navigation = ({ isDark, setIsDark }) => {
  const [showDockedMenu, setShowDockedMenu] = useState(null);
  // const navigate = useNavigate();
  const pagePath = window.location.pathname.replace('/', '');
  const [highlightedLink, setHighlightedLink] = useState(pagePath);
  const highlightStyle = 'bg-violet-200 rounded-lg';
  const navlinkStyle = 'text-2xl p-2';

  const dockedMenuModalRef = useRef(null);

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
      <nav className="flex justify-between items-center transition-all duration-1000 box-border">
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
            className="hover:scale-[1.8] transition-all duration-500">
            {isDark ? (
              <FaSun className="text-2xl text-yellow-500  hover:animate-spin duration-500" />
            ) : (
              <FaMoon className="text-2xl hover:animate-spin duration-500" />
            )}
          </div>
        </div>

        {showDockedMenu ? (
          <FaTimes
            className="sm:hidden text-2xl cursor-pointer z-10"
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
            className="flex gap-3 flex-col items-center bg-pink-800 rounded-b-xl  min-h-max shadow-lg py-5 w-full z-10"
            onClick={() => setShowDockedMenu(false)}>
            <li>
              <Link to="blogs">Blog</Link>
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
          <ul className="flex gap-3 p-4">
            <li>
              <Link
                className={`${navlinkStyle} ${highlightedLink == 'blogs' ? highlightStyle : ''}`}
                onMouseEnter={() => setHighlightedLink('blogs')}
                onMouseLeave={() => setHighlightedLink(pagePath)}
                to="blogs">
                Blog
              </Link>
            </li>
            <hr className="text-slate-400" />
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
            <hr className="text-slate-400" />
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
