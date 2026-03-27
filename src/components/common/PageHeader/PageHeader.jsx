import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url(${backgroundImage})` }}>
      <div className="container page-header-container">
        <span className="page-subtitle animate-on-scroll">{subtitle}</span>
        <h1 className="page-title animate-on-scroll">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
