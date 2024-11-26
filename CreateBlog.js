/*import React, { useState, useEffect } from "react";

const CreateBlog = () => {
  const [highlights, setHighlights] = useState([
    { id: 1, placeName: "", images: [], experience: "", description: "" },
  ]);
  const [formData, setFormData] = useState({
    title: "",
    coverImages: [],
    authorName: "",
    totalHighlights: 1,
    placeName: "",
    overviewDescription: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("blogFormData"));
    if (savedData) {
      setFormData(savedData.formData);
      setHighlights(savedData.highlights);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleHighlightChange = (index, field, value) => {
    const newHighlights = [...highlights];
    newHighlights[index][field] = value;
    setHighlights(newHighlights);
  };

  const handleImageUpload = (index, event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file instanceof File);

    if (validFiles.length + highlights[index].images.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    const newHighlights = [...highlights];
    newHighlights[index].images = [...newHighlights[index].images, ...validFiles];
    setHighlights(newHighlights);
  };

  const handleCoverImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file instanceof File);

    if (validFiles.length > 5) {
      alert("You can upload a maximum of 5 cover images.");
      return;
    }

    setFormData({ ...formData, coverImages: validFiles });
  };

  const removeImage = (highlightIndex, imageIndex) => {
    const newHighlights = [...highlights];
    newHighlights[highlightIndex].images.splice(imageIndex, 1);
    setHighlights(newHighlights);
  };

  const removeCoverImage = (index) => {
    const newCoverImages = [...formData.coverImages];
    newCoverImages.splice(index, 1);
    setFormData({ ...formData, coverImages: newCoverImages });
  };

  const addHighlight = () => {
    setHighlights([
      ...highlights,
      { id: highlights.length + 1, placeName: "", images: [], experience: "", description: "" },
    ]);
    setFormData({ ...formData, totalHighlights: highlights.length + 1 });
  };

  const removeHighlight = () => {
    if (highlights.length > 1) {
      setHighlights(highlights.slice(0, -1));
      setFormData({ ...formData, totalHighlights: highlights.length - 1 });
    }
  };

  const validateForm = () => {
    const { title, coverImages, authorName, placeName, overviewDescription } = formData;
    if (
      !title.trim() ||
      coverImages.length < 1 ||
      !authorName.trim() ||
      !placeName.trim() ||
      !overviewDescription.trim()
    ) {
      alert("Please fill in all required fields.");
      return false;
    }
    if (highlights.some((highlight) => !highlight.placeName.trim() || !highlight.description.trim())) {
      alert("Each highlight must have a Place Name and Description.");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const dataToSave = { formData, highlights };
    localStorage.setItem("blogFormData", JSON.stringify(dataToSave));
    alert("Form Data saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 p-6">
      <div className="container mx-auto bg-gray-700 p-8 rounded-lg shadow-lg max-w-4xl">
        <form id="blog-form" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Blog</h2>

          {/* Section 1 *
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Section 1</h3>
            <label className="block text-gray-400 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
            <label className="block text-gray-400 mb-2">Cover Images</label>
            <input
              type="file"
              multiple
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
              onChange={handleCoverImageUpload}
            />
            <div className="grid grid-cols-3 gap-2 mb-4">
              {formData.coverImages
                .filter((file) => file instanceof File) // Ensure only valid files are displayed
                .map((image, index) => {
                  try {
                    const imageUrl = URL.createObjectURL(image);
                    return (
                      <div key={index} className="relative">
                        <img
                          src={imageUrl}
                          alt="Preview"
                          className="w-48 h-48 object-cover rounded"
                        />
                        <button
                          type="button"
                          className="absolute top-2 right-2 bg-crimson text-white p-1 rounded"
                          onClick={() => removeCoverImage(index)}
                        >
                          ✕
                        </button>
                      </div>
                    );
                  } catch (error) {
                    console.error("Invalid file for preview:", error);
                    return null;
                  }
                })}
            </div>
          </div>

          {/* Section 2 *
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Section 2: Overview</h3>
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black"
              rows={4}
              value={formData.overviewDescription}
              onChange={(e) => handleInputChange("overviewDescription", e.target.value)}
            ></textarea>
          </div>                    
          {/* Section 3 *
                    {highlights.map((highlight, index) => (
                      <div key={highlight.id} className="mb-6">
                        <hr className="border-gray-600 my-4" />
                        <h3 className="text-xl font-bold text-white mb-4">Highlight {index + 1}</h3>
          
                        {/* Place Name *
                        <label className="block text-gray-400 mb-2">Place Name</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                          value={highlight.placeName}
                          onChange={(e) => handleHighlightChange(index, "placeName", e.target.value)}
                        />
          
                        {/* Images *
                        <label className="block text-gray-400 mb-2">Images</label>
                        <input
                          type="file"
                          multiple
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                          onChange={(e) => handleImageUpload(index, e)}
                        />
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {highlight.images
                            .filter((file) => file instanceof File)
                            .map((image, imgIndex) => {
                              try {
                                const imageUrl = URL.createObjectURL(image);
                                return (
                                  <div key={imgIndex} className="relative">
                                    <img
                                      src={imageUrl}
                                      alt="Preview"
                                      className="w-full h-48 object-cover rounded"
                                    />
                                    <button
                                      type="button"
                                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                                      onClick={() => removeImage(index, imgIndex)}
                                    >
                                      ✕
                                    </button>
                                  </div>
                                );
                              } catch (error) {
                                console.error("Invalid file for preview:", error);
                                return null;
                              }
                            })}
                        </div>
          
                        {/* Getaway Experience *
                        <label className="block text-gray-400 mb-2">Getaway Experience</label>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                          rows={3}
                          value={highlight.experience}
                          onChange={(e) => handleHighlightChange(index, "experience", e.target.value)}
                        ></textarea>
          
                        {/* Description *
                        <label className="block text-gray-400 mb-2">Description</label>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                          rows={3}
                          value={highlight.description}
                          onChange={(e) => handleHighlightChange(index, "description", e.target.value)}
                        ></textarea>
          
                        {/* Remove Highlight *
                        {highlights.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeHighlight(index)}
                            className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 rounded"
                          >
                            Remove Highlight
                          </button>
                        )}
                      </div>
                    ))}
          
                    {/* Add Highlight Button *
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={addHighlight}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded mt-4"
                      >
                        Add Highlight
                      </button>
                    </div>
          

          {/* Submit Button *
          <button
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 rounded mt-6 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
*/











import React, { useState } from "react";

const CreateBlog = () => {
  const [highlights, setHighlights] = useState([
    { id: 1, placeName: "", images: [], experience: "", description: "" },
  ]);
  const [formData, setFormData] = useState({
    title: "",
    coverImages: [],
    authorName: "",
    totalHighlights: 1,
    overviewDescription: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleHighlightChange = (index, field, value) => {
    const newHighlights = [...highlights];
    newHighlights[index][field] = value;
    setHighlights(newHighlights);
  };

  const handleImageUpload = (index, event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file instanceof File);

    if (validFiles.length + highlights[index].images.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    const newHighlights = [...highlights];
    newHighlights[index].images = [...newHighlights[index].images, ...validFiles];
    setHighlights(newHighlights);
  };

  const handleCoverImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file instanceof File);

    if (validFiles.length > 5) {
      alert("You can upload a maximum of 5 cover images.");
      return;
    }

    setFormData({ ...formData, coverImages: validFiles });
  };

  const removeImage = (highlightIndex, imageIndex) => {
    const newHighlights = [...highlights];
    newHighlights[highlightIndex].images.splice(imageIndex, 1);
    setHighlights(newHighlights);
  };

  const removeCoverImage = (index) => {
    const newCoverImages = [...formData.coverImages];
    newCoverImages.splice(index, 1);
    setFormData({ ...formData, coverImages: newCoverImages });
  };

  const addHighlight = () => {
    setHighlights([
      ...highlights,
      { id: highlights.length + 1, placeName: "", images: [], experience: "", description: "" },
    ]);
    setFormData({ ...formData, totalHighlights: highlights.length + 1 });
  };

  const removeHighlight = (index) => {
    if (highlights.length > 1) {
      const newHighlights = highlights.filter((_, i) => i !== index);
      setHighlights(newHighlights);
      setFormData({ ...formData, totalHighlights: highlights.length - 1 });
    }
  };

  const validateForm = () => {
    const { title, coverImages, authorName, overviewDescription } = formData;

    if (!title.trim() || coverImages.length < 1 || !authorName.trim() || !overviewDescription.trim()) {
      alert("Please fill in all required fields.");
      return false;
    }

    if (highlights.some((highlight) => !highlight.placeName.trim() || !highlight.description.trim())) {
      alert("Each highlight must have a Place Name and Description.");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      title: "",
      coverImages: [],
      authorName: "",
      totalHighlights: 1,
      overviewDescription: "",
    });
    setHighlights([{ id: 1, placeName: "", images: [], experience: "", description: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const dataToSave = { formData, highlights };
    localStorage.setItem("blogFormData", JSON.stringify(dataToSave));
    alert("Form Data saved successfully!");
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 p-6">
      <div className="container mx-auto bg-gray-700 p-8 rounded-lg shadow-lg max-w-4xl">
        <form id="blog-form" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Blog</h2>

          {/* Section 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Section 1</h3>

            {/* Title */}
            <label className="block text-gray-400 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />

            {/* Author Name and Total Highlights */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-gray-400 mb-2">Author Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black"
                  value={formData.authorName}
                  onChange={(e) => handleInputChange("authorName", e.target.value)}
                />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-400 mb-2">Highlights</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black"
                  value={formData.totalHighlights}
                  readOnly
                />
              </div>
            </div>

            {/* Cover Images */}
            <label className="block text-gray-400 mb-2">Cover Images</label>
            <input
              type="file"
              multiple
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
              onChange={handleCoverImageUpload}
            />
            <div className="grid grid-cols-3 gap-2 mb-4">
              {formData.coverImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                    onClick={() => removeCoverImage(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Section 2: Overview</h3>
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black"
              rows={4}
              value={formData.overviewDescription}
              onChange={(e) => handleInputChange("overviewDescription", e.target.value)}
            ></textarea>
          </div>

          {/* Section 3 */}
          {highlights.map((highlight, index) => (
            <div key={highlight.id} className="mb-6">
              <hr className="border-gray-600 my-4" />
              <h3 className="text-xl font-bold text-white mb-4">Highlight {index + 1}</h3>

              {/* Place Name */}
              <label className="block text-gray-400 mb-2">Place Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                value={highlight.placeName}
                onChange={(e) => handleHighlightChange(index, "placeName", e.target.value)}
              />

              {/* Images */}
              <label className="block text-gray-400 mb-2">Images</label>
              <input
                type="file"
                multiple
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                onChange={(e) => handleImageUpload(index, e)}
              />
              <div className="grid grid-cols-3 gap-2 mb-4">
                {highlight.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                      onClick={() => removeImage(index, imgIndex)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Getaway Experience */}
              <label className="block text-gray-400 mb-2">Getaway Experience</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                rows={3}
                value={highlight.experience}
                onChange={(e) => handleHighlightChange(index, "experience", e.target.value)}
              ></textarea>

              {/* Description */}
              <label className="block text-gray-400 mb-2">Description</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-500 text-black mb-4"
                rows={3}
                value={highlight.description}
                onChange={(e) => handleHighlightChange(index, "description", e.target.value)}
              ></textarea>

              {/* Remove Highlight */}
              {highlights.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeHighlight(index)}
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 rounded"
                >
                  Remove Highlight
                </button>
              )}
            </div>
          ))}

          {/* Add Highlight Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={addHighlight}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded mt-4"
            >
              Add Highlight
            </button>
          </div>

          {/* Submit Button */}
          <button
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 rounded mt-6 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;





