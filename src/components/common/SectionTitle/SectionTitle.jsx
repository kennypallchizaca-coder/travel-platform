import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ subtitle, title, alignment = 'center' }) => {
  return (
    <div className={`section-title title-${alignment}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
