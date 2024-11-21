import React from 'react';

const PublishedBlog = ({ formData }) => {
  const { highlights } = formData; // Assuming formData contains highlights as an array of objects
  
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <header className="bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Published Blog</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights && highlights.length > 0 ? (
              highlights.map((highlight, index) => (
                <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Highlight {index + 1}</h3>
                  <div className="flex">
                    <img
                      src={highlight.image} // Assuming image URL is part of each highlight object
                      alt="Highlight"
                      className="w-40 h-40 object-cover rounded-lg mr-4"
                    />
                    <div className="text-gray-400">
                      <p className="text-lg">{highlight.name}</p>
                      <p>{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No highlights to display.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PublishedBlog;
