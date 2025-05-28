// components/ResearchProjectCard.jsx
import React from 'react';

const ResearchProjectCard = ({
  title,
  description,
  department,
  supervisor,
  status,
  deadline,
  skillsRequired
}) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Completed': 'bg-blue-100 text-blue-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 hover:border-indigo-300 transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{department} Department</p>
        </div>
        <span className={`${statusColors[status] || 'bg-gray-100 text-gray-800'} text-xs px-2 py-1 rounded-full`}>
          {status}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      
      <div className="flex items-center mb-4">
        <img 
          src={supervisor.image || "https://via.placeholder.com/40"} 
          alt={supervisor.name} 
          className="h-8 w-8 rounded-full mr-2" 
        />
        <div>
          <p className="text-sm font-medium">Supervisor: {supervisor.name}</p>
          <p className="text-xs text-gray-500">{supervisor.title}</p>
        </div>
      </div>
      
      <div className="mb-3">
        <p className="text-xs font-medium text-gray-700 mb-1">Skills Required:</p>
        <div className="flex flex-wrap gap-1">
          {skillsRequired.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {deadline && (
        <p className="text-xs text-gray-600">
          <i className="far fa-clock mr-1"></i> Deadline: {deadline}
        </p>
      )}
    </div>
  );
};

export default ResearchProjectCard;