import React, { useState, useEffect } from 'react';

const BlogForm = () => {
  const [highlights, setHighlights] = useState([{ id: 1, placeName: '', experience: '', description: '', images: [] }]);
  const [formData, setFormData] = useState({
    coverImages: [], // Changed to an array to allow multiple images
    title: '',
    authorName: '',
    location: '',
    description: '',
  });

  // Load data from local storage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('blogFormData'));
    if (savedData) {
      setFormData(savedData.formData);
      setHighlights(savedData.highlights);
    }
  }, []);

  const handleHighlightChange = (index, field, value) => {
    const newHighlights = [...highlights];
    newHighlights[index][field] = value;
    setHighlights(newHighlights);
  };

  const handleImageUpload = (index, event) => {
    const files = Array.from(event.target.files);
    if (files.length + highlights[index].images.length > 5) {
      alert('You can upload a maximum of 5 images.');
      return;
    }
    const newHighlights = [...highlights];
    newHighlights[index].images = [...newHighlights[index].images, ...files];
    setHighlights(newHighlights);
  };

  const removeImage = (highlightIndex, imageIndex) => {
    const newHighlights = [...highlights];
    newHighlights[highlightIndex].images.splice(imageIndex, 1);
    setHighlights(newHighlights);
  };

  const addHighlight = () => {
    setHighlights([...highlights, { id: highlights.length + 1, placeName: '', experience: '', description: '', images: [] }]);
  };

  const removeHighlight = (index) => {
    if (index === 0) return; // Prevent removing the first highlight
    const newHighlights = highlights.filter((_, i) => i !== index);
    setHighlights(newHighlights);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save data to local storage
    const dataToSave = { formData, highlights };
    localStorage.setItem('blogFormData', JSON.stringify(dataToSave));
    console.log('Form Data saved to local storage:', dataToSave);
  };

  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
          <div className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-md sticky top-0">
            <div className="mb-6">
              <img
                alt="Logo"
                className="w-full h-20 object-cover rounded"
                src="https://storage.googleapis.com/a1aa/image/X19AThP2SXJUJ9ZPEpw2D8D6a4you03fbHnYf5vRxRye9DlnA.jpg"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">AI Chats</h2>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-400">Chat with our AI assistant for travel recommendations.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-user-circle text-4xl text-gray-400"></i>
                <div className="ml-4">
                  <h4 className="text-white font-bold">John Doe</h4>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-gray-200" href="#">
                    <i className="fas fa-cog mr-2"></i> Settings
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200" href="#">
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 ml-6 overflow-y-auto h-screen">
            <form id="blog-form" onSubmit={handleSubmit}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Section 1</h2>
                <div className="mb-4 flex items-center">
                  <label className="block text-gray-400 mb-2" htmlFor="cover-images">
                    Cover Images
                  </label>
                  <input
                    className="w-1/2 p-2 border border-gray-300 rounded"
                    id="cover-images"
                    name="cover-images"
                    type="file"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      if (files.length < 1 || files.length > 5) {
                        alert('You must select between 1 and 5 images.');
                        return;
                      }
                      setFormData({ ...formData, coverImages: files });
                    }}
                  />
                  <div className="image-preview mt-2 grid grid-cols-2 gap-2 ml-4">
                    {formData.coverImages && Array.from(formData.coverImages).map((image, index) => (
                      <div key={index}>
                        <img
                          alt="Image Preview"
                          className="w-full h-20 object-cover rounded"
                          src={URL.createObjectURL(image)}
                        />
                        <button
                          className="text-gray-400 hover:text-gray-200"
                          onClick={() => {
                            const newCoverImages = Array.from(formData.coverImages);
                            newCoverImages.splice(index, 1);
                            setFormData({ ...formData, coverImages: newCoverImages });
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-black"
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2" htmlFor="author-name">
                    Author Name
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-black"
                    id="author-name"
                    name="author-name"
                    type="text"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-black"
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <hr className="mb-4" />
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Section 2 - Overview</h2>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                  <hr className="mb-4" />
                </section>
              </section>
              {highlights.map((highlight, index) => (
                <section key={highlight.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Highlight {index + 1}</h2>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor ={`place-name-${index}`}>
                      Place Name
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      id={`place-name-${index}`}
                      name={`place-name-${index}`}
                      type="text"
                      value={highlight.placeName}
                      onChange={(e) => handleHighlightChange(index, 'placeName', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor={`experience-${index}`}>
                      Getaway Experience
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      id={`experience-${index}`}
                      name={`experience-${index}`}
                      rows={2}
                      value={highlight.experience}
                      onChange={(e) => handleHighlightChange(index, 'experience', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor={`description-${index}`}>
                      Description
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      id={`description-${index}`}
                      name={`description-${index}`}
                      rows={10}
                      value={highlight.description}
                      onChange={(e) => handleHighlightChange(index, 'description', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor={`images-${index}`}>
                      Images
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      id={`images-${index}`}
                      name={`images-${index}`}
                      type="file"
                      multiple
                      onChange={(e) => handleImageUpload(index, e)}
                    />
                    <div className="image-preview mt-2 grid grid-cols-2 gap-2 ml-4">
                      {highlight.images && Array.from(highlight.images).map((image, imageIndex) => (
                        <div key={imageIndex}>
                          <img
                            alt="Image Preview"
                            className="w-full h-20 object-cover rounded"
                            src={URL.createObjectURL(image)}
                          />
                          <button
                            className="text-gray-400 hover:text-gray-200"
                            onClick={() => removeImage(index, imageIndex)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    {index > 0 && (
                      <button
                        className="text-red-500 hover:text-red-400"
                        onClick={() => removeHighlight(index)}
                      >
                        Remove Highlight
                      </button>
                    )}
                    <button
                      className="text-blue-500 hover:text-blue-400"
                      onClick={addHighlight}
                    >
                      Add Highlight
                    </button>
                  </div>
                  <hr className="mb-4" />
                </section>
              ))}
              <button
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;