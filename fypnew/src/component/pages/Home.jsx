import { useState } from 'react';
import SupervisorCard from '../../component/view/home/SupervisorCardComponent';
import ResearchProjectCard from '../../component/view/home/ResearchProjectCardComponent';
import CardLayout from '../../component/layout/CardLayout';
import SectionContainer from '../../component/layout/SectionContainer';

function App() {
  const [activeTab, setActiveTab] = useState('supervisors');

  const supervisors = [
    {
      name: "Dr. Sarah Johnson",
      title: "Associate Professor",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      researchAreas: ["Machine Learning", "NLP", "Computer Vision"],
      description: "Specializes in NLP and Computer Vision. Currently working on multimodal learning systems.",
      studentCount: 5,
      rating: 4.8,
      reviewCount: 24,
      availableSlots: 2
    },
    {
      name: "Dr. Michael Chen",
      title: "Professor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      researchAreas: ["Data Science", "Big Data", "Cloud Computing"],
      description: "Focuses on scalable data processing systems and distributed computing.",
      studentCount: 8,
      rating: 4.6,
      reviewCount: 18,
      availableSlots: 0
    }
  ];

  const projects = [
    {
      title: "AI-Based Attendance System",
      description: "A facial recognition system for automated university attendance tracking.",
      department: "Computer Science",
      supervisor: {
        name: "Dr. Michael Chen",
        title: "Professor",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      status: "Active",
      deadline: "15 Dec 2023",
      skillsRequired: ["Python", "OpenCV", "Deep Learning"]
    },
    {
      title: "Blockchain for Academic Credentials",
      description: "Developing a decentralized system for secure academic record keeping.",
      department: "Computer Science",
      supervisor: {
        name: "Dr. Sarah Johnson",
        title: "Associate Professor",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      status: "Pending",
      deadline: "30 Nov 2023",
      skillsRequired: ["Blockchain", "Solidity", "Web3"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer 
        title="FYP Supervisor Finder" 
        subtitle="Find the perfect supervisor for your Final Year Project"
        action={
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab('supervisors')}
              className={`px-4 py-2 rounded-md ${activeTab === 'supervisors' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Supervisors
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-md ${activeTab === 'projects' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Research Projects
            </button>
          </div>
        }
      >
        {activeTab === 'supervisors' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supervisors.map((supervisor, index) => (
              <SupervisorCard key={index} {...supervisor} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ResearchProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </SectionContainer>

      <SectionContainer title="Resources">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardLayout 
            title="FYP Guidelines" 
            icon="fas fa-file-alt"
          >
            <p className="text-gray-700 mb-4">Download the official Final Year Project guidelines and submission requirements.</p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition">
              Download PDF
            </button>
          </CardLayout>

          <CardLayout 
            title="Important Dates" 
            icon="fas fa-calendar-check"
          >
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span>Proposal Submission:</span>
                <span className="font-medium">15 Nov 2023</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Mid-Term Evaluation:</span>
                <span className="font-medium">15 Feb 2024</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Final Submission:</span>
                <span className="font-medium">30 Apr 2024</span>
              </li>
            </ul>
          </CardLayout>
        </div>
      </SectionContainer>
    </div>
  );
}

export default App;