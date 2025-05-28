import React from 'react'

function SupervisorCardComponent() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
  {/* Supervisor Image & Basic Info */}
  <div className="flex p-4">
    <div className="flex-shrink-0 mr-4">
      <img src="https://via.placeholder.com/100" alt="Supervisor" className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500" />
    </div>
    <div>
      <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
      <p className="text-gray-600 text-sm">Associate Professor</p>
      <div className="flex flex-wrap gap-1 mt-1">
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Machine Learning</span>
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">AI</span>
      </div>
    </div>
  </div>
  {/* Details */}
  <div className="px-4 pb-4">
    <p className="text-gray-700 text-sm mb-3">Specializes in NLP and Computer Vision. Currently accepting 2 more students.</p>
    {/* Stats */}
    <div className="flex justify-between text-sm text-gray-600">
      <div className="flex items-center">
        <i className="fas fa-user-graduate mr-1 text-indigo-500" />
        <span>5 Students</span>
      </div>
      <div className="flex items-center">
        <i className="fas fa-star mr-1 text-yellow-500" />
        <span>4.8 (24)</span>
      </div>
    </div>
    {/* Action Button */}
    <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition">
      View Profile
    </button>
  </div>
</div>
    </div>
  )
}

export default SupervisorCardComponent
