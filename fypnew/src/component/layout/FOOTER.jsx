import React from 'react'

function FOOTER() {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-12 pb-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* App Info */}
      <div className="col-span-1">
        <div className="flex items-center mb-4">
          <i className="fas fa-user-graduate text-2xl mr-2 text-indigo-400" />
          <span className="text-xl font-bold">FYP<span className="text-indigo-400">Finder</span></span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Connecting students with the perfect supervisors for their Final Year Projects.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-twitter text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-facebook text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-linkedin text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-github text-lg" />
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="col-span-1">
        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Find Supervisors
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Project Gallery
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Submission Guidelines
            </a>
          </li>
        </ul>
      </div>
      {/* Resources */}
      <div className="col-span-1">
        <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> FYP Handbook
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Research Methodology
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Thesis Templates
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
              <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400" /> Past Projects
            </a>
          </li>
        </ul>
      </div>
      {/* Contact */}
      <div className="col-span-1">
        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <i className="fas fa-map-marker-alt mt-1 mr-3 text-indigo-400" />
            <span className="text-gray-400">Computer Science Department<br />University Campus</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-3 text-indigo-400" />
            <span className="text-gray-400">fyp-support@university.edu</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt mr-3 text-indigo-400" />
            <span className="text-gray-400">+1 (555) 123-4567</span>
          </li>
        </ul>
      </div>
    </div>
    {/* Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2023 FYPFinder. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default FOOTER
