// Partner/page.js

"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function PartnerPage() {
  const [showForm, setShowForm] = useState(false);

  const handlePartnerClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Partner With Us</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          Partnerships are essential to our success and sustainability. By collaborating with like-minded 
          organizations, businesses, and institutions, we can leverage resources, expertise, and networks 
          to create greater impact in the communities we serve.
        </p>
        
        <p className="mb-6">
          We welcome partnerships in various forms, from program implementation and funding to knowledge 
          sharing and advocacy. Together, we can develop innovative solutions to address complex challenges 
          and create lasting change.
        </p>
      </div>

      {/* Partnership Opportunities */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Partnership Opportunities</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-medium text-xl mb-3 text-blue-700">Corporate Partnerships</h3>
            <p>
              Engage your company in meaningful CSR initiatives that align with your values. We offer various 
              ways for businesses to contribute, from financial support to employee engagement programs that 
              boost morale while making a difference.
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>• Corporate Social Responsibility (CSR) initiatives</li>
              <li>• Employee volunteering programs</li>
              <li>• Matched giving programs</li>
              <li>• Cause-related marketing</li>
              <li>• Sustainable supply chain collaboration</li>
            </ul>
          </div>
          
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-medium text-xl mb-3 text-blue-700">Institutional Collaborations</h3>
            <p>
              Partner with us on research, innovation, and implementation. We work with universities, research 
              institutions, and NGOs to develop evidence-based approaches to sustainable development and 
              community empowerment.
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>• Joint research projects</li>
              <li>• Student internship programs</li>
              <li>• Knowledge exchange initiatives</li>
              <li>• Co-development of curricula</li>
              <li>• Collaborative impact assessment</li>
            </ul>
          </div>
          
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-medium text-xl mb-3 text-blue-700">Technical Partnerships</h3>
            <p>
              Share expertise and build capacity. Technical partnerships allow us to enhance our programs 
              through specialized knowledge and skills, while offering partners the opportunity to apply 
              their expertise in meaningful contexts.
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>• Technical advisory services</li>
              <li>• Training and capacity building</li>
              <li>• Technology transfer</li>
              <li>• Infrastructure development support</li>
              <li>• Monitoring and evaluation expertise</li>
            </ul>
          </div>
          
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-medium text-xl mb-3 text-blue-700">Community Partnerships</h3>
            <p>
              Work directly with communities we serve. We believe in community-led development and partner 
              with local organizations and leaders to ensure our programs are relevant, effective, and 
              sustainable in the long term.
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>• Local NGO collaborations</li>
              <li>• Community leadership engagement</li>
              <li>• Grassroots initiative support</li>
              <li>• Local knowledge integration</li>
              <li>• Sustainable community ownership models</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Current Partners */}
      <div className="mb-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Current Partners</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3">
                
              <span className="text-gray-500 text-xs">Partner Logo</span>
            </div>
            <p className="font-medium">Global Health Initiative</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3">
              <span className="text-gray-500 text-xs">Partner Logo</span>
            </div>
            <p className="font-medium">EduTech Solutions</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3">
              <span className="text-gray-500 text-xs">Partner Logo</span>
            </div>
            <p className="font-medium">Sustainability First</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3">
              <span className="text-gray-500 text-xs">Partner Logo</span>
            </div>
            <p className="font-medium">Community Builders Network</p>
          </div>
        </div>
      </div>
      
      {/* Partnership Process */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Partnership Process</h2>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 border-l-4 border-blue-600 pl-4">
            <h3 className="font-medium text-lg mb-2">1. Initial Conversation</h3>
            <p>We begin with a discussion to understand your organization's goals, values, and interests to identify potential alignment.</p>
          </div>
          
          <div className="flex-1 border-l-4 border-blue-600 pl-4">
            <h3 className="font-medium text-lg mb-2">2. Explore Opportunities</h3>
            <p>Together, we explore specific partnership opportunities that align with both organizations' missions and objectives.</p>
          </div>
          
          <div className="flex-1 border-l-4 border-blue-600 pl-4">
            <h3 className="font-medium text-lg mb-2">3. Formalize Agreement</h3>
            <p>We develop a partnership agreement that outlines roles, responsibilities, timeframes, and expected outcomes.</p>
          </div>
          
          <div className="flex-1 border-l-4 border-blue-600 pl-4">
            <h3 className="font-medium text-lg mb-2">4. Implement & Evaluate</h3>
            <p>We implement our partnership activities and regularly evaluate progress to ensure we're creating the intended impact.</p>
          </div>
        </div>
      </div>
      
      {/* Partner Testimonial */}
      <div className="mb-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-2xl font-semibold mb-4">Partner Testimonial</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xs">Partner Photo</span>
          </div>
          <div>
            <blockquote className="italic text-lg mb-4">
              "Our partnership with Cyrus Development Foundation has allowed us to extend our impact in ways 
              we couldn't have achieved alone. Their deep community connections combined with our technical 
              expertise created a powerful synergy that has transformed local agricultural practices and 
              improved food security for thousands of families."
            </blockquote>
            <p className="font-medium">— Dr. Sarah Johnson, Director of Global Partnerships, Sustainable Futures Institute</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mb-8 text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to Create Impact Together?</h2>
        <p className="mb-6 text-lg">
          Join our network of partners working to create sustainable change in communities around the world.
        </p>
        <button 
          onClick={handlePartnerClick}
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors text-lg"
        >
          Become a Partner
        </button>
      </div>

      {/* Partnership Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Partnership Inquiry Form</h2>
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
                    <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                    <input 
                      type="text" 
                      id="orgName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="orgType" className="block text-sm font-medium text-gray-700 mb-1">Organization Type *</label>
                    <select 
                      id="orgType" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select organization type</option>
                      <option value="business">Business/Corporation</option>
                      <option value="ngo">NGO/Non-profit</option>
                      <option value="government">Government Agency</option>
                      <option value="academic">Academic/Research Institution</option>
                      <option value="foundation">Foundation</option>
                      <option value="community">Community Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Contact Person's Name *</label>
                    <input 
                      type="text" 
                      id="contactName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title/Position</label>
                    <input 
                      type="text" 
                      id="contactTitle" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Organization Website</label>
                  <input 
                    type="url" 
                    id="website" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest *</label>
                  <div className="grid md:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="corporate" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="corporate" className="ml-2 text-sm text-gray-700">Corporate Partnership</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="institutional" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="institutional" className="ml-2 text-sm text-gray-700">Institutional Collaboration</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="technical" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="technical" className="ml-2 text-sm text-gray-700">Technical Partnership</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="community" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="community" className="ml-2 text-sm text-gray-700">Community Partnership</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest *</label>
                  <div className="grid md:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="education" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="education" className="ml-2 text-sm text-gray-700">Education Programs</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="healthcare" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="healthcare" className="ml-2 text-sm text-gray-700">Healthcare Services</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="agriculture" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="agriculture" className="ml-2 text-sm text-gray-700">Agricultural Development</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="sustainability" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="sustainability" className="ml-2 text-sm text-gray-700">Environmental Sustainability</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="economic" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="economic" className="ml-2 text-sm text-gray-700">Economic Empowerment</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="other-area" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="other-area" className="ml-2 text-sm text-gray-700">Other</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="partnershipGoals" className="block text-sm font-medium text-gray-700 mb-1">Partnership Goals and Vision *</label>
                  <textarea 
                    id="partnershipGoals" 
                    rows="3" 
                    placeholder="Please describe what you hope to achieve through this partnership"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-1">Resources and Contributions</label>
                  <textarea 
                    id="resources" 
                    rows="3" 
                    placeholder="Please describe the resources, expertise, or other contributions your organization can bring to this partnership"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Proposed Timeline</label>
                  <select 
                    id="timeline" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a timeframe</option>
                    <option value="immediate">Immediate (0-3 months)</option>
                    <option value="short">Short-term (3-6 months)</option>
                    <option value="medium">Medium-term (6-12 months)</option>
                    <option value="long">Long-term (1+ years)</option>
                    <option value="ongoing">Ongoing/Open-ended</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea 
                    id="additionalInfo" 
                    rows="3" 
                    placeholder="Please share any other information that might be relevant to this partnership"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="agreement" 
                    className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="agreement" className="ml-2 text-sm text-gray-700">
                    I understand that this is an initial inquiry and does not constitute a formal agreement. The Cyrus Development 
                    Foundation will review this submission and contact me to discuss potential partnership opportunities.
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
                    Submit Inquiry
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