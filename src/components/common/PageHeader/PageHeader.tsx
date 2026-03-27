import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = React.memo(({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="page-header" 
      style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})` } : {}}
    >
      <div className="container">
        <div className="page-header-content animate-on-scroll">
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
});

export default PageHeader;
