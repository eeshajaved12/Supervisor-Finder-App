import React from 'react'

function ProjectProposalCard() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 hover:border-indigo-300 transition">
  <div className="flex justify-between items-start">
    <div>
      <h3 className="font-bold text-lg mb-1">AI-Based Attendance System</h3>
      <p className="text-gray-600 text-sm mb-2">Submitted: 15 Oct 2023</p>
    </div>
    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Approved</span>
  </div>
  <p className="text-gray-700 text-sm mb-4">A facial recognition system for automated university attendance tracking.</p>
  {/* Supervisor Info */}
  <div className="flex items-center mb-4">
    <img src="https://via.placeholder.com/40" alt="Supervisor" className="h-8 w-8 rounded-full mr-2" />
    <div>
      <p className="text-sm font-medium">Assigned to: Dr. Michael Chen</p>
      <p className="text-xs text-gray-500">Computer Science</p>
    </div>
  </div>
  {/* Actions */}
  <div className="flex space-x-2">
    <button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-1 rounded text-sm font-medium transition">
      <i className="fas fa-eye mr-1" /> View
    </button>
    <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-1 rounded text-sm font-medium transition">
      <i className="fas fa-download mr-1" /> Download
    </button>
  </div>
</div>
    </div>
  )
}

export default ProjectProposalCard
