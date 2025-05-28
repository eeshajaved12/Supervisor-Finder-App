import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaTrash, FaEdit, FaEnvelope, FaPhone, FaUniversity } from 'react-icons/fa';

const FindSupervisors = () => {
  const [supervisors, setSupervisors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "s.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      department: "Computer Science",
      specialization: "Artificial Intelligence"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "m.chen@university.edu",
      phone: "+1 (555) 987-6543",
      department: "Electrical Engineering",
      specialization: "Robotics"
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      email: "e.wilson@university.edu",
      phone: "+1 (555) 456-7890",
      department: "Mechanical Engineering",
      specialization: "Thermodynamics"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSupervisor, setNewSupervisor] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    specialization: ''
  });

  const filteredSupervisors = supervisors.filter(supervisor =>
    supervisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supervisor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supervisor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setSupervisors(supervisors.filter(supervisor => supervisor.id !== id));
  };

  const handleAddSupervisor = () => {
    const newId = supervisors.length > 0 ? Math.max(...supervisors.map(s => s.id)) + 1 : 1;
    setSupervisors([...supervisors, { ...newSupervisor, id: newId }]);
    setNewSupervisor({
      name: '',
      email: '',
      phone: '',
      department: '',
      specialization: ''
    });
    setIsAddModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8">Find Supervisors</h1>
        
        {/* Search and Add Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by name, department or specialization..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-full md:w-auto flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition duration-200"
          >
            <FaUserPlus className="mr-2" />
            Add Supervisor
          </button>
        </div>

        {/* Supervisors Grid */}
        {filteredSupervisors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSupervisors.map((supervisor) => (
              <div key={supervisor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{supervisor.name}</h2>
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDelete(supervisor.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <FaUniversity className="mr-2 text-indigo-500" />
                      <span>{supervisor.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-indigo-500" />
                      <span>{supervisor.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="mr-2 text-indigo-500" />
                      <span>{supervisor.phone}</span>
                    </div>
                    <div className="mt-3">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                        {supervisor.specialization}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No supervisors found matching your search.</p>
          </div>
        )}

        {/* Add Supervisor Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Supervisor</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newSupervisor.name}
                      onChange={(e) => setNewSupervisor({...newSupervisor, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newSupervisor.email}
                      onChange={(e) => setNewSupervisor({...newSupervisor, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newSupervisor.phone}
                      onChange={(e) => setNewSupervisor({...newSupervisor, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Department</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newSupervisor.department}
                      onChange={(e) => setNewSupervisor({...newSupervisor, department: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Specialization</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newSupervisor.specialization}
                      onChange={(e) => setNewSupervisor({...newSupervisor, specialization: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddSupervisor}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Add Supervisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindSupervisors;