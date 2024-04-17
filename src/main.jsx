import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// CHOICE: Compiled CSS file & raw SCSS file (no difference)
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* (iii) Import Provider into main.js */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)