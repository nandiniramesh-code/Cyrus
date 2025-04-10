// Volunteer/page.js

"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function VolunteerPage() {
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Volunteer With Us</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Make an Impact</h2>
        <p className="text-lg mb-4">
          Volunteers are the heart and soul of our organization. By contributing your time, skills, and passion, 
          you can make a direct impact on the communities we serve. We offer various volunteering opportunities 
          across our programs in education, healthcare, and agriculture.
        </p>
        
        <p className="mb-4">
          Whether you can commit to a few hours, days, or months, your contribution is valuable to us. 
          Volunteering with Cyrus Development Foundation is also an opportunity for personal growth, 
          learning, and connecting with like-minded individuals.
        </p>
        
        <div className="mt-6">
          <button 
            onClick={handleApplyClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-xl mb-2">Teaching Assistant</h3>
            <p>
              Support our education programs by assisting teachers and mentoring students. Help create engaging learning 
              materials, provide one-on-one support to students who need extra help, and participate in educational 
              events and workshops.
            </p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-xl mb-2">Healthcare Volunteer</h3>
            <p>
              Assist in our medical camps and health education initiatives. Support healthcare professionals during 
              community outreach programs, help organize health awareness campaigns, and contribute to preventive 
              healthcare education in underserved communities.
            </p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-xl mb-2">Agricultural Support</h3>
            <p>
              Help farmers implement sustainable practices and improve productivity. Share knowledge about eco-friendly 
              farming techniques, assist with demonstration farms, and support agricultural training programs aimed at 
              increasing food security and farmer incomes.
            </p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-xl mb-2">Administrative Support</h3>
            <p>
              Assist with office tasks, communications, and event organization. Help maintain our databases, support 
              fundraising efforts, create content for our newsletters and social media, and coordinate community events 
              and volunteer activities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Volunteer With Us */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Volunteer With Us?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="text-green-500 font-bold mr-2">✓</div>
            <p><span className="font-medium">Make a meaningful difference</span> in communities that need it most</p>
          </div>
          
          <div className="flex items-start">
            <div className="text-green-500 font-bold mr-2">✓</div>
            <p><span className="font-medium">Gain valuable experience</span> in development work and community engagement</p>
          </div>
          
          <div className="flex items-start">
            <div className="text-green-500 font-bold mr-2">✓</div>
            <p><span className="font-medium">Develop new skills</span> while sharing your expertise with others</p>
          </div>
          
          <div className="flex items-start">
            <div className="text-green-500 font-bold mr-2">✓</div>
            <p><span className="font-medium">Connect with like-minded individuals</span> passionate about sustainable development</p>
          </div>
        </div>
      </div>
      
      {/* Volunteer Process */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Volunteer Process</h2>
        
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="border rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h3 className="font-medium text-lg mb-2">Apply</h3>
            <p>Complete our volunteer application form indicating your areas of interest and availability.</p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h3 className="font-medium text-lg mb-2">Interview</h3>
            <p>Have a conversation with our volunteer coordinator to discuss your skills and our current needs.</p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h3 className="font-medium text-lg mb-2">Orientation</h3>
            <p>Participate in our volunteer orientation program to learn about our mission, values, and programs.</p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h3 className="font-medium text-lg mb-2">Begin Your Journey</h3>
            <p>Start volunteering with ongoing support from our dedicated team.</p>
          </div>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Volunteer Testimonial</h2>
        <blockquote className="italic">
          "Volunteering with the Cyrus Development Foundation has been one of the most rewarding experiences of my life. 
          Working alongside dedicated team members and seeing the direct impact of our efforts on community members has 
          given me a new perspective on what sustainable development really means. I started as an agricultural support 
          volunteer but have learned so much more about community engagement and resilience."
        </blockquote>
        <p className="mt-4 font-medium">— Amina K., Volunteer since 2023</p>
      </div>
      
      {/* Ready to Join */}
      <div className="mb-8 text-center bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to Join Us?</h2>
        <p className="mb-6">
          Your time and skills can create lasting change. Join our community of dedicated volunteers and help us build 
          a better future for the communities we serve.
        </p>
        <button 
          onClick={handleApplyClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
        >
          Apply Now
        </button>
      </div>

      {/* Volunteer Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Volunteer Application Form</h2>
                <button 
                  onClick={handleCloseForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                    <input 
                      type="text" 
                      id="state" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
                    <input 
                      type="text" 
                      id="zip" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Volunteer Position Interest *</label>
                  <div className="grid md:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="teaching" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="teaching" className="ml-2 text-sm text-gray-700">Teaching Assistant</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="healthcare" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="healthcare" className="ml-2 text-sm text-gray-700">Healthcare Volunteer</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="agriculture" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="agriculture" className="ml-2 text-sm text-gray-700">Agricultural Support</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="admin" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="admin" className="ml-2 text-sm text-gray-700">Administrative Support</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Availability *</label>
                  <select 
                    id="availability" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your availability</option>
                    <option value="few-hours">A few hours per week</option>
                    <option value="one-day">One day per week</option>
                    <option value="multiple-days">Multiple days per week</option>
                    <option value="full-time">Full-time (temporary)</option>
                    <option value="flexible">Flexible/As needed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Days</label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="monday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="monday" className="ml-2 text-sm text-gray-700">Monday</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tuesday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="tuesday" className="ml-2 text-sm text-gray-700">Tuesday</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="wednesday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="wednesday" className="ml-2 text-sm text-gray-700">Wednesday</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="thursday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="thursday" className="ml-2 text-sm text-gray-700">Thursday</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="friday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="friday" className="ml-2 text-sm text-gray-700">Friday</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="saturday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="saturday" className="ml-2 text-sm text-gray-700">Saturday</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="sunday" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="sunday" className="ml-2 text-sm text-gray-700">Sunday</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Education Background</label>
                  <textarea 
                    id="education" 
                    rows="2" 
                    placeholder="Please describe your educational background and any relevant certifications"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Previous Volunteer Experience</label>
                  <textarea 
                    id="experience" 
                    rows="3" 
                    placeholder="Please describe any previous volunteer or relevant work experience"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills & Qualifications</label>
                  <textarea 
                    id="skills" 
                    rows="3" 
                    placeholder="Please list any special skills, languages, or qualifications you have that may be helpful for your volunteer role"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Motivation for Volunteering *</label>
                  <textarea 
                    id="motivation" 
                    rows="3" 
                    placeholder="Please tell us why you want to volunteer with the Cyrus Development Foundation"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="emergency-name" className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name *</label>
                  <input 
                    type="text" 
                    id="emergency-name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="emergency-phone" className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone *</label>
                  <input 
                    type="tel" 
                    id="emergency-phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="emergency-relation" className="block text-sm font-medium text-gray-700 mb-1">Relationship to Emergency Contact</label>
                  <input 
                    type="text" 
                    id="emergency-relation" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="reference-name" className="block text-sm font-medium text-gray-700 mb-1">Reference Name</label>
                  <input 
                    type="text" 
                    id="reference-name" 
                    placeholder="Someone who can vouch for your character or skills"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="reference-contact" className="block text-sm font-medium text-gray-700 mb-1">Reference Contact Information</label>
                  <input 
                    type="text" 
                    id="reference-contact" 
                    placeholder="Phone or email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="agreement" 
                    className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="agreement" className="ml-2 text-sm text-gray-700">
                    I understand that submitting this application does not guarantee a volunteer position. I agree to undergo 
                    an interview process and any necessary background checks based on the position I am applying for.
                  </label>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    type="button" 
                    onClick={handleCloseForm}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}