// components/CardLayout.jsx
import React from 'react';

const CardLayout = ({ 
  children, 
  title, 
  icon, 
  headerAction,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 border border-gray-200 ${className}`}>
      {(title || headerAction) && (
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h3 className="font-bold text-lg flex items-center">
              {icon && <i className={`${icon} mr-2 text-indigo-600`} />}
              {title}
            </h3>
          )}
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default CardLayout;