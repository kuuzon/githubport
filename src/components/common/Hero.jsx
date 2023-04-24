import React from 'react';
import AbpButton from './AbpButton';

const Hero = ({ children, values: { title, content, path } }) => {
  return (
    <div className="hero-banner">
      <h1>{title}</h1>
      <p>{content}</p>
      <AbpButton path={path}>
        {children}
      </AbpButton>
    </div>
  );
};

export default Hero