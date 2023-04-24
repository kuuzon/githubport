// Import React modules
import React from 'react';
import { 
  Routes, 
  Route 
} from 'react-router-dom';

// COMPONENTS:
import Layout from './components/layout/Layout';

// PAGES:
import Home from './pages/Home';
import About from './pages/About';
import GitUsers from './components/features/GitUsers';
import NotFound from './pages/NotFound';

function App() {
  return (  
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path="about" element={<About />} />
        <Route path="users" element={<GitUsers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;