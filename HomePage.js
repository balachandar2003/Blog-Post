import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for client-side routing

const Homepage = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <header className="bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">
            <Link to="/" className="hover:text-gray-400">Travel AI Companion</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link className="text-white hover:text-gray-400" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-400" to="/explore">
                  Explore
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-400" to="/createblog">
                  Create Blog
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-400" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-400" to="/destinations">
                  Destinations
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Your Personal Travel Assistant</h2>
          <p className="text-gray-400 text-lg">
            Discover new destinations, plan your trips, and get personalized recommendations with our AI-powered travel companion.
          </p>
          <Link to="/get-started" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Get Started
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                alt="A beautiful view of the Eiffel Tower in Paris during sunset"
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://storage.googleapis.com/a1aa/image/i0cPhbjPBu5uM5juxiqbHEaLtBt42g5jYJqRfifDe7cjXBlnA.jpg"
              />
              <h3 className="text-xl font-bold text-white mt-4">Paris, France</h3>
              <p className="text-gray-400 mt-2">Experience the romance and charm of the City of Light.</p>
              <Link className="text-blue-400 hover:underline mt-4 block" to="/paris">
                Learn more
              </Link>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                alt="A stunning view of the Colosseum in Rome with a clear blue sky"
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://storage.googleapis.com/a1aa/image/ENfzeEbvr9hM20xYGhKQfshiawkxA9lopBo1tkyUI0cZXBlnA.jpg"
              />
              <h3 className="text-xl font-bold text-white mt-4">Rome, Italy</h3>
              <p className="text-gray-400 mt-2">Dive into history and explore the ancient wonders of Rome.</p>
              <Link className="text-blue-400 hover:underline mt-4 block" to="/rome">
                Learn more
              </Link>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                alt="A panoramic view of the New York City skyline at night"
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://storage.googleapis.com/a1aa/image/OzETy5aZsMo4PFGvJXXBhEI6i4EVK8ggG9m3bOO1nK97Ko8E.jpg"
              />
              <h3 className="text-xl font-bold text-white mt-4">New York, USA</h3>
              <p className="text-gray-400 mt-2">Discover the vibrant life and iconic landmarks of the Big Apple.</p>
              <Link className="text-blue-400 hover:underline mt-4 block" to="/new-york">
                Learn more
              </Link>
            </article>
            {/* Additional destinations */}
            <article className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                alt="A beautiful view of the Great Wall of China"
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://storage.googleapis.com/a1aa/image/TptY5ePMbzxwkyhWokMSaQhM5Qt9vAzGfxSxTQNe9iHfg-JCw.jpg"
              />
              <h3 className="text-xl font-bold text-white mt-4">Beijing, China</h3>
              <p className="text-gray-400 mt-2">Explore the rich history and culture of China’s ancient capital.</p>
              <Link className="text-blue-400 hover:underline mt-4 block" to="/beijing">
                Learn more
              </Link>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                alt="A stunning view of the Sydney Opera House"
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://storage.googleapis.com/a1aa/image/ABaUNOhEoMlKkzKb0pcEgVuqQ8J6yn1M9QuSFXS4HZfIl7W3lg.jpg"
              />
              <h3 className="text-xl font-bold text-white mt-4">Sydney, Australia</h3>
              <p className="text-gray-400 mt-2">Visit the iconic Sydney Opera House and enjoy the harbor views.</p>
              <Link className="text-blue-400 hover:underline mt-4 block" to="/sydney">
                Learn more
              </Link>
            </article>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-search-location text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Discover</h3>
              <p className="text-gray-400">Find new and exciting destinations tailored to your preferences.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-map-marked-alt text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Plan</h3>
              <p className="text-gray-400">Create detailed travel itineraries with our AI-powered planner.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-plane-departure text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Travel</h3>
              <p className="text-gray-400">Enjoy a seamless travel experience with real-time assistance.</p>
            </div>
            {/* Additional how it works steps */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-cogs text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Customize</h3>
              <p className="text-gray-400">Personalize your travel experience based on your preferences and needs.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-users text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
              <p className="text-gray-400">Join a community of travelers and share your experiences.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; 2024 Travel AI Companion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
