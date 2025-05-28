// components/SupervisorCard.jsx
import React from 'react';

const SupervisorCard = ({ 
  name, 
  title, 
  image, 
  researchAreas, 
  description, 
  studentCount, 
  rating, 
  reviewCount,
  availableSlots
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex p-4">
        <div className="flex-shrink-0 mr-4">
          <img 
            src={image || "https://via.placeholder.com/100"} 
            alt={name} 
            className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500" 
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{title}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {researchAreas.map((area, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <i className="fas fa-user-graduate mr-1 text-indigo-500" />
            <span>{studentCount} Students</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star mr-1 text-yellow-500" />
            <span>{rating} ({reviewCount})</span>
          </div>
        </div>
        <div className="text-xs text-indigo-600 mb-3">
          {availableSlots > 0 
            ? `Accepting ${availableSlots} more student(s)` 
            : 'Currently not accepting students'}
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default SupervisorCard;