import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  nowrap?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = React.memo(({ 
  title, 
  subtitle, 
  alignment = 'left',
  nowrap = false
}) => {
  return (
    <div className={`section-title title-${alignment} ${nowrap ? 'title-nowrap' : ''}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2 className="title">{title}</h2>
    </div>
  );
});

export default SectionTitle;
