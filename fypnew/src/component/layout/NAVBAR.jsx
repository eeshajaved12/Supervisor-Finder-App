import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import { FaUser, FaSignOutAlt, FaHome, FaSearch, FaBook, FaQuestionCircle, FaUserCircle, FaCog, FaBars, FaTimes, FaChevronDown, FaEllipsisV } from 'react-icons/fa';

const NAVBAR = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50" ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side (Logo + Desktop Nav) */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-90 transition">
              <span className="text-2xl mr-2 text-indigo-200">🎓</span>
              <span className="text-xl font-bold">FYP<span className="text-indigo-200">Finder</span></span>
            </Link>
            
            {/* Primary Desktop Nav - Only show when authenticated */}
            {currentUser && (
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
                <NavLink to="/" icon={<FaHome />}>
                  Home
                </NavLink>
                <NavLink to="/find-supervisors" icon={<FaSearch />}>
                  Find Supervisors
                </NavLink>
                <NavLink to="/projects" icon={<FaBook />}>
                  Projects
                </NavLink>
                <NavLink to="/guidelines" icon={<FaQuestionCircle />}>
                  Guidelines
                </NavLink>
              </div>
            )}
          </div>

          {/* Right side (Auth + Mobile button) */}
          <div className="flex items-center">
            {/* Auth dropdown (desktop) */}
            <div className="hidden md:ml-4 md:flex md:items-center">
              {currentUser ? (
                <div className="ml-3 relative">
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-2 focus:outline-none group"
                    aria-expanded={isUserMenuOpen}
                  >
                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-500 transition">
                      <FaUser className="text-sm" />
                    </div>
                    <span className="text-sm font-medium">{currentUser.email.split('@')[0]}</span>
                    <div className="text-white transform transition-transform duration-200">
                      <FaChevronDown className={`text-xs ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  
                  {/* Dropdown menu */}
                  {isUserMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50 animate-fadeIn">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-800 font-medium">Signed in as</p>
                        <p className="text-sm text-gray-500 truncate">{currentUser.email}</p>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition flex items-center"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <FaUserCircle className="mr-3 w-5 text-center" /> Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition flex items-center"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <FaCog className="mr-3 w-5 text-center" /> Settings
                      </Link>
                      <div className="border-t border-gray-100"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition flex items-center"
                      >
                        <FaSignOutAlt className="mr-3 w-5 text-center" /> Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-600 hover:text-white transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-3 py-2 rounded-md text-sm font-medium bg-white text-indigo-700 hover:bg-indigo-50 transition"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none transition" 
                aria-controls="mobile-menu" 
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-indigo-800 transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {currentUser ? (
            <>
              <MobileNavLink to="/" icon={<FaHome />} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/find-supervisors" icon={<FaSearch />} onClick={() => setIsMobileMenuOpen(false)}>
                Find Supervisors
              </MobileNavLink>
              <MobileNavLink to="/projects" icon={<FaBook />} onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink to="/guidelines" icon={<FaQuestionCircle />} onClick={() => setIsMobileMenuOpen(false)}>
                Guidelines
              </MobileNavLink>
              
              {/* Mobile user menu */}
              <div className="border-t border-indigo-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                      <FaUser className="text-lg" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium">{currentUser.email.split('@')[0]}</div>
                    <div className="text-sm font-medium text-indigo-200">Student</div>
                  </div>
                  <button 
                    onClick={toggleUserMenu}
                    className="ml-auto text-white p-1 rounded-full hover:bg-indigo-700 transition"
                  >
                    <FaEllipsisV className={isUserMenuOpen ? 'text-indigo-300' : ''} />
                  </button>
                </div>
                
                {/* Mobile dropdown menu */}
                {isUserMenuOpen && (
                  <div className="mt-3 px-2 space-y-1 animate-fadeIn">
                    <MobileNavLink to="/profile" icon={<FaUserCircle />} onClick={() => {
                      setIsUserMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}>
                      Profile
                    </MobileNavLink>
                    <MobileNavLink to="/settings" icon={<FaCog />} onClick={() => {
                      setIsUserMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}>
                      Settings
                    </MobileNavLink>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700 transition flex items-center"
                    >
                      <FaSignOutAlt className="mr-3 w-5 text-center" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="pt-4 pb-3 space-y-3">
              <MobileNavLink to="/login" icon={<FaUser />} onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </MobileNavLink>
              <MobileNavLink to="/signup" icon={<FaUser />} onClick={() => setIsMobileMenuOpen(false)}>
                Sign Up
              </MobileNavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition text-indigo-100 hover:bg-indigo-600 hover:text-white"
  >
    <span className="mr-2">{icon}</span>
    {children}
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ to, icon, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700 transition flex items-center"
  >
    <span className="mr-3 w-5 text-center">{icon}</span>
    {children}
  </Link>
);

export default NAVBAR;