import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './component/pages/Home'
import FindSupervisors from './component/pages/FindSupervisors'
import Guidelines from './component/pages/Guidelines'
import Projects from './component/pages/Projects'
import NAVBAR from './component/layout/NAVBAR'
import FOOTER from './component/layout/FOOTER'
import Login from './component/Auth/Login'
import Signup from './component/Auth/signup' // Fixed case sensitivity
import ProtectedRoute from './component/Auth/ProtectedRoute'

const App = () => {
  return (
    <>
      <NAVBAR />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Routes */}
          <Route path="/find-supervisors" element={
            <ProtectedRoute>
              <FindSupervisors />
            </ProtectedRoute>
          } />
          <Route path="/guidelines" element={
            <ProtectedRoute>
              <Guidelines />
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <FOOTER />
    </>
  )
}

export default App