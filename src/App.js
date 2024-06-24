import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';

import Blogs from './pages/blogs';
import { useState } from 'react';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <div className="my-dark-bg text-slate-800 dark:text-slate-400">
        <Navigation setIsDark={setIsDark} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
