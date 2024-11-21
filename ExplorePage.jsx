import React, { useEffect, useState } from 'react';

const ExplorePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-12 gap-4">
      <aside className="col-span-3 bg-white shadow-md p-4 h-screen sticky top-0">
        {/* Add Sidebar content if needed */}
      </aside>
      <main className="col-span-9">
        <div className="grid grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <div className="carousel">{/* Carousel with images */}</div>
              <div className="p-4">
                <h3 className="text-xl">{blog.title}</h3>
                <p className="text-gray-600">{blog.author}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
