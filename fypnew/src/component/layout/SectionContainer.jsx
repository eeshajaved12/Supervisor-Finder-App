// components/SectionContainer.jsx
import React from 'react';

const SectionContainer = ({ 
  children, 
  title, 
  subtitle, 
  action,
  className = ''
}) => {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="flex justify-between items-end mb-4">
        <div>
          {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;