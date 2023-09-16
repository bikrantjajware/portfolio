import React from 'react';
import { useState } from 'react';
import './style.css';

const Blogs = () => {
  const [title, setTitle] = useState('');
  const [content, setcontent] = useState('');
  return (
    <div className="blog-container">
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea></textarea>
      </form>
    </div>
  );
};

export default Blogs;
