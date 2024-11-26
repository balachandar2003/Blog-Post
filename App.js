import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './CreateBlog';  // Assuming CreateBlog is in the same directory
import Homepage from './HomePage';  // Assuming Homepage is your main page
import ExplorePage from './ExplorePage'; // Assuming BlogExplore is another page
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CreateBlog" element={<CreateBlog />} />
        <Route path="/ExplorePage" element={<ExplorePage />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
