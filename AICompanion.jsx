import React from 'react';
import { useNavigate } from 'react-router-dom';

const AICompanion = () => {
  const navigate = useNavigate();

  const handleCreateBlogClick = () => {
    navigate('/create-blog'); // Navigate to Create Blog page
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to AI Travel Companion</h1>
        <button 
          onClick={handleCreateBlogClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded mb-8"
        >
          Create a Blog
        </button>
      </div>
    </div>
  );
};

export default AICompanion;
