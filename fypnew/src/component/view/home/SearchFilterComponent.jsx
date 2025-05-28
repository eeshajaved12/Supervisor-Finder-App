import React from 'react'

function SearchFilterComponent() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
  <h3 className="font-bold text-lg mb-4 flex items-center">
    <i className="fas fa-filter mr-2 text-indigo-600" /> Filter Supervisors
  </h3>
  {/* Department Dropdown */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500">
      <option>All Departments</option>
      <option>Computer Science</option>
      <option>Electrical Engineering</option>
      <option>Mechanical Engineering</option>
    </select>
  </div>
  {/* Research Areas */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Research Areas</label>
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="checkbox" className="rounded text-indigo-600" />
        <span className="ml-2 text-sm">Artificial Intelligence</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="rounded text-indigo-600" />
        <span className="ml-2 text-sm">Data Science</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="rounded text-indigo-600" />
        <span className="ml-2 text-sm">Cybersecurity</span>
      </label>
    </div>
  </div>
  {/* Availability */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
      <option>Any Availability</option>
      <option>Accepting Students</option>
      <option>Limited Slots</option>
    </select>
  </div>
  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition">
    Apply Filters
  </button>
</div>
    </div>
  )
}

export default SearchFilterComponent
