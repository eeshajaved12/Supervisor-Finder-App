import React from 'react'

function SupervisorAvailabilityCalendar() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
  <h3 className="font-bold text-lg mb-4 flex items-center">
    <i className="fas fa-calendar-alt mr-2 text-indigo-600" /> Availability Calendar
  </h3>
  {/* Calendar Header */}
  <div className="flex justify-between items-center mb-4">
    <button className="p-1 rounded-full hover:bg-gray-100">
      <i className="fas fa-chevron-left" />
    </button>
    <span className="font-medium">November 2023</span>
    <button className="p-1 rounded-full hover:bg-gray-100">
      <i className="fas fa-chevron-right" />
    </button>
  </div>
  {/* Weekdays */}
  <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs text-gray-500">
    <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
  </div>
  {/* Calendar Days */}
  <div className="grid grid-cols-7 gap-1">
    {/* Previous Month */}
    <div className="h-10 text-gray-400 flex items-center justify-center text-sm">29</div>
    <div className="h-10 text-gray-400 flex items-center justify-center text-sm">30</div>
    <div className="h-10 text-gray-400 flex items-center justify-center text-sm">31</div>
    {/* Current Month */}
    <div className="h-10 flex items-center justify-center text-sm">1</div>
    <div className="h-10 flex items-center justify-center text-sm">2</div>
    <div className="h-10 flex items-center justify-center text-sm bg-indigo-100 rounded-full">3</div>
    <div className="h-10 flex items-center justify-center text-sm">4</div>
    {/* ... more days ... */}
    <div className="h-10 flex items-center justify-center text-sm border-2 border-indigo-500 rounded-full relative">
      15
      <span className="absolute bottom-0 w-1 h-1 bg-indigo-500 rounded-full" />
    </div>
    {/* ... more days ... */}
  </div>
  {/* Legend */}
  <div className="mt-4 flex items-center justify-center space-x-4 text-xs">
    <div className="flex items-center">
      <div className="w-3 h-3 bg-indigo-100 rounded-full mr-1" />
      <span>Available</span>
    </div>
    <div className="flex items-center">
      <div className="w-3 h-3 border-2 border-indigo-500 rounded-full mr-1" />
      <span>Meeting Day</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default SupervisorAvailabilityCalendar
