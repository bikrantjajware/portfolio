import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';

import Blogs from './pages/blogs';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`App ${isDark ? 'dark-mode' : ''}`}>
      <Navigation setIsDark={setIsDark} isDark={isDark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
