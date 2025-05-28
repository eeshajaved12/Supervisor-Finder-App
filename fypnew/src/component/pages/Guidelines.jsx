import React from 'react';
import { Link } from 'react-router-dom';

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FYP Guidelines</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Everything you need to know about completing your Final Year Project successfully
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <Link to="/" className="text-gray-500 hover:text-indigo-600">
                  <i className="fas fa-home mr-1" /> Home
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 text-xs" />
                <span className="ml-4 text-indigo-600 font-medium">Guidelines</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <h2 className="text-lg font-semibold mb-4 text-indigo-700">Quick Links</h2>
              <nav className="space-y-2">
                <a href="#overview" className="block py-2 px-3 rounded hover:bg-indigo-50 text-gray-700 hover:text-indigo-600">
                  <i className="fas fa-info-circle mr-2" /> Overview
                </a>
                <a href="#timeline" className="block py-2 px-3 rounded hover:bg-indigo-50 text-gray-700 hover:text-indigo-600">
                  <i className="fas fa-calendar-alt mr-2" /> Project Timeline
                </a>
                <a href="#proposal" className="block py-2 px-3 rounded hover:bg-indigo-50 text-gray-700 hover:text-indigo-600">
                  <i className="fas fa-file-alt mr-2" /> Proposal Guidelines
                </a>
                <a href="#submission" className="block py-2 px-3 rounded hover:bg-indigo-50 text-gray-700 hover:text-indigo-600">
                  <i className="fas fa-upload mr-2" /> Submission Process
                </a>
                <a href="#faqs" className="block py-2 px-3 rounded hover:bg-indigo-50 text-gray-700 hover:text-indigo-600">
                  <i className="fas fa-question-circle mr-2" /> FAQs
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview Section */}
            <section id="overview" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-info-circle text-indigo-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
              </div>
              <p className="text-gray-600 mb-4">
                The Final Year Project (FYP) is a capstone experience that demonstrates your ability to apply the knowledge and skills acquired during your studies. It's an opportunity to work on a substantial piece of work that showcases your expertise in your chosen field.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-semibold text-indigo-700 mb-2">Key Objectives</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Demonstrate independent research and problem-solving skills</li>
                  <li>Apply theoretical knowledge to practical problems</li>
                  <li>Develop project management and time management skills</li>
                  <li>Enhance technical writing and presentation abilities</li>
                </ul>
              </div>
            </section>

            {/* Timeline Section */}
            <section id="timeline" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-calendar-alt text-indigo-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Project Timeline</h2>
              </div>
              
              <div className="relative">
                {/* Timeline */}
                <div className="border-l-2 border-indigo-200 pl-8 pb-8 space-y-8">
                  {/* Timeline Item 1 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Project Selection</h3>
                    <p className="text-sm text-gray-500 mb-2">Week 1-2</p>
                    <p className="text-gray-600">Choose your project topic and secure a supervisor</p>
                  </div>
                  
                  {/* Timeline Item 2 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Proposal Submission</h3>
                    <p className="text-sm text-gray-500 mb-2">Week 3-4</p>
                    <p className="text-gray-600">Submit your detailed project proposal for approval</p>
                  </div>
                  
                  {/* Timeline Item 3 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Mid-Term Review</h3>
                    <p className="text-sm text-gray-500 mb-2">Week 8-9</p>
                    <p className="text-gray-600">Present your progress and receive feedback</p>
                  </div>
                  
                  {/* Timeline Item 4 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Final Submission</h3>
                    <p className="text-sm text-gray-500 mb-2">Week 14-15</p>
                    <p className="text-gray-600">Submit your complete project report and deliverables</p>
                  </div>
                  
                  {/* Timeline Item 5 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Presentation & Defense</h3>
                    <p className="text-sm text-gray-500 mb-2">Week 16</p>
                    <p className="text-gray-600">Present your work to the evaluation committee</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Proposal Guidelines Section */}
            <section id="proposal" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-file-alt text-indigo-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Proposal Guidelines</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">1. Title Page</h3>
                  <p className="text-gray-600">Include project title, your name, supervisor's name, and submission date</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">2. Introduction</h3>
                  <p className="text-gray-600">Brief background, problem statement, and objectives of your project</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">3. Literature Review</h3>
                  <p className="text-gray-600">Summary of existing research related to your project</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">4. Methodology</h3>
                  <p className="text-gray-600">Detailed description of your research methods and implementation plan</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">5. Expected Outcomes</h3>
                  <p className="text-gray-600">What you hope to achieve and potential contributions</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">6. References</h3>
                  <p className="text-gray-600">Properly formatted citations of all sources used</p>
                </div>
              </div>
            </section>

            {/* Submission Process Section */}
            <section id="submission" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-upload text-indigo-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Submission Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-file-signature" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1. Complete All Requirements</h3>
                    <p className="text-gray-600">Ensure your project meets all the specified requirements before submission.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-check-circle" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">2. Supervisor Approval</h3>
                    <p className="text-gray-600">Get final approval from your project supervisor.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-file-pdf" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">3. Prepare Documents</h3>
                    <p className="text-gray-600">Convert your report to PDF format and prepare all supplementary files.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-cloud-upload-alt" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">4. Online Submission</h3>
                    <p className="text-gray-600">Upload all files through the FYP submission portal before the deadline.</p>
                    <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      <i className="fas fa-external-link-alt mr-2" /> Go to Submission Portal
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-question-circle text-indigo-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800">When should I start working on my FYP?</h3>
                  <p className="text-gray-600 mt-1">It's recommended to start brainstorming ideas and discussing with potential supervisors at least 2-3 months before the official start date.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800">How often should I meet with my supervisor?</h3>
                  <p className="text-gray-600 mt-1">Most departments recommend weekly or bi-weekly meetings, but this can vary based on your project requirements and supervisor's preference.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800">What happens if I miss a deadline?</h3>
                  <p className="text-gray-600 mt-1">Late submissions may incur penalties. In exceptional circumstances, you may request an extension through proper channels with valid reasons.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Can I change my project topic after approval?</h3>
                  <p className="text-gray-600 mt-1">Topic changes are possible in the early stages but require approval from your supervisor and department. Significant changes later in the term are generally discouraged.</p>
                </div>
                
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-800">How is the FYP graded?</h3>
                  <p className="text-gray-600 mt-1">Grading typically considers your written report, implementation (if applicable), presentation, and defense. Specific criteria vary by department.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl text-indigo-200 mb-6 max-w-3xl mx-auto">
            Contact the FYP coordinator or your supervisor for project-specific questions
          </p>
          <div className="space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50">
              <i className="fas fa-envelope mr-2" /> Email Coordinator
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-indigo-600">
              <i className="fas fa-calendar-alt mr-2" /> Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;