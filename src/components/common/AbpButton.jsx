import React from 'react';
import { Link } from 'react-router-dom';

const AbpButton = ({ path, children }) => {
  return (
    <div className="custom-btn">
      <Link to={path}>
        {children}
      </Link>
    </div>
  );
};

export default AbpButton