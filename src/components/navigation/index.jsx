import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const Navigation = ({ isDark, setIsDark }) => {
  const [showDockedMenu, setShowDockedMenu] = useState(null);
  const navigate = useNavigate();
  console.log(navigate);

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
    <header className="text-2xl px-2">
      <nav className="flex justify-between items-center">
        <div className="flexitems-center gap-4">
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
        <div
          ref={dockedMenuModalRef}
          className={`flex sm:hidden absolute w-[100%] top-[-100%] ${
            showDockedMenu && 'top-[0] animate-showNav'
          }
          
            ${showDockedMenu === false && 'animate-hideNav'}`}>
          <ul className="flex gap-3 flex-col items-center bg-violet-50 rounded-xl  min-h-max w-[100%] shadow-lg py-5">
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
          )
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
