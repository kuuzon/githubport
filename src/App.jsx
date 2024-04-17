// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        {/* ERROR 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;