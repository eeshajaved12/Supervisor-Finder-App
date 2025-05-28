import React from 'react'

function StudentSupervisorMatchingProgress() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
  <h3 className="font-bold text-lg mb-4 flex items-center">
    <i className="fas fa-tasks mr-2 text-indigo-600" /> Your FYP Progress
  </h3>
  {/* Progress Steps */}
  <div className="space-y-6">
    {/* Step 1 */}
    <div className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs mr-3 mt-0.5">
        1
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">Find Supervisor</h4>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Completed</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">Matched with Dr. Sarah Johnson</p>
      </div>
    </div>
    {/* Step 2 */}
    <div className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs mr-3 mt-0.5">
        2
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">Proposal Submission</h4>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">In Progress</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">Draft due by 30 Nov 2023</p>
      </div>
    </div>
    {/* Step 3 */}
    <div className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs mr-3 mt-0.5">
        3
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium text-gray-400">Project Implementation</h4>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">Pending</span>
        </div>
      </div>
    </div>
  </div>
  {/* Progress Bar */}
  <div className="mt-6">
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>40% Complete</span>
      <span>2 of 5 steps</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '40%'}} />
    </div>
  </div>
</div>
    </div>
  )
}

export default StudentSupervisorMatchingProgress
