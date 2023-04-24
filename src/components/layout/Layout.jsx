// Import react modules
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className="app" id={theme}>
      <Header />
      {/* Wrap all content in column-direction flexbox */}
      <div className="contentWindow">
        <Outlet />
      </div>
      <Footer />
    </div> 
  )
};

export default Layout