import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaStar, FaRegStar } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Portfolio Website', description: 'My personal portfolio built with React', isFavorite: true },
    { id: 2, name: 'E-commerce App', description: 'Online store with payment integration', isFavorite: false },
    { id: 3, name: 'Task Manager', description: 'Productivity app for daily tasks', isFavorite: true },
  ]);

  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddProject = () => {
    if (newProject.name.trim() === '') return;
    
    const project = {
      id: Date.now(),
      name: newProject.name,
      description: newProject.description,
      isFavorite: false
    };
    
    setProjects([...projects, project]);
    setNewProject({ name: '', description: '' });
    setShowAddForm(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const toggleFavorite = (id) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, isFavorite: !project.isFavorite } : project
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">My Projects</h1>
          <p className="text-lg text-indigo-600">Manage and showcase your work</p>
        </div>

        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
            <FaPlus /> Add Project
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 animate-fade-in">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Add New Project</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows="3"
                  placeholder="Enter project description"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProject}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-800">{project.name}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(project.id)}
                    className="text-yellow-400 hover:text-yellow-500 transition duration-300"
                  >
                    {project.isFavorite ? <FaStar size={20} /> : <FaRegStar size={20} />}
                  </button>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
              {project.isFavorite && (
                <div className="bg-yellow-50 px-4 py-2 text-sm text-yellow-800 flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> Favorite
                </div>
              )}
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <FaPlus className="text-indigo-500 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No projects yet</h3>
            <p className="text-gray-500 mb-4">Add your first project to get started</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
            >
              <FaPlus /> Add Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;