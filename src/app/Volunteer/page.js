"use client";

import React from 'react';
import Link from 'next/link';

export default function Volunteer() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-8">Volunteer With Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Make an Impact</h2>
          <p className="mb-6 text-gray-700">
            Volunteers are the heart and soul of our organization. By contributing your time, skills, and passion, 
            you can make a direct impact on the communities we serve. We offer various volunteering opportunities 
            across our programs in education, healthcare, and agriculture.
          </p>
          <p className="text-gray-700">
            Whether you can commit to a few hours, days, or months, your contribution is valuable to us. 
            Volunteering with Cyrus Development Foundation is also an opportunity for personal growth, 
            learning, and connecting with like-minded individuals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Volunteer Opportunities</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-medium mb-3 text-emerald-700">Teaching Assistant</h3>
              <p className="text-gray-700">
                Support our education programs by assisting teachers and mentoring students. Help create 
                engaging learning materials, provide one-on-one support to students who need extra help, 
                and participate in educational events and workshops.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-medium mb-3 text-emerald-700">Healthcare Volunteer</h3>
              <p className="text-gray-700">
                Assist in our medical camps and health education initiatives. Support healthcare professionals 
                during community outreach programs, help organize health awareness campaigns, and contribute 
                to preventive healthcare education in underserved communities.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-medium mb-3 text-emerald-700">Agricultural Support</h3>
              <p className="text-gray-700">
                Help farmers implement sustainable practices and improve productivity. Share knowledge about 
                eco-friendly farming techniques, assist with demonstration farms, and support agricultural 
                training programs aimed at increasing food security and farmer incomes.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-medium mb-3 text-emerald-700">Administrative Support</h3>
              <p className="text-gray-700">
                Assist with office tasks, communications, and event organization. Help maintain our databases, 
                support fundraising efforts, create content for our newsletters and social media, and coordinate 
                community events and volunteer activities.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Why Volunteer With Us?</h2>
          
          <div className="mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="text-emerald-700">Make a meaningful difference</strong> in communities that need it most
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="text-emerald-700">Gain valuable experience</strong> in development work and community engagement
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="text-emerald-700">Develop new skills</strong> while sharing your expertise with others
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="text-emerald-700">Connect with like-minded individuals</strong> passionate about sustainable development
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Volunteer Process</h2>
          
          <div className="relative">
            <div className="absolute left-4 inset-y-0 w-0.5 bg-emerald-200"></div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-medium mb-2 text-emerald-700">Apply</h3>
              <p className="text-gray-700">
                Complete our volunteer application form indicating your areas of interest and availability.
              </p>
            </div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-medium mb-2 text-emerald-700">Interview</h3>
              <p className="text-gray-700">
                Have a conversation with our volunteer coordinator to discuss your skills and our current needs.
              </p>
            </div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-medium mb-2 text-emerald-700">Orientation</h3>
              <p className="text-gray-700">
                Participate in our volunteer orientation program to learn about our mission, values, and programs.
              </p>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-medium mb-2 text-emerald-700">Begin Your Journey</h3>
              <p className="text-gray-700">
                Start volunteering with ongoing support from our dedicated team.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Volunteer Testimonial</h2>
          
          <div className="bg-emerald-50 p-6 rounded-lg">
            <p className="italic mb-4 text-gray-700">
              "Volunteering with the Cyrus Development Foundation has been one of the most rewarding experiences of my life. 
              Working alongside dedicated team members and seeing the direct impact of our efforts on community members has 
              given me a new perspective on what sustainable development really means. I started as an agricultural support 
              volunteer but have learned so much more about community engagement and resilience."
            </p>
            <p className="text-right text-gray-600">— Amina K., Volunteer since 2023</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Ready to Join Us?</h2>
          <p className="mb-6 text-gray-700">
            Your time and skills can create lasting change. Join our community of dedicated volunteers and help 
            us build a better future for the communities we serve.
          </p>
          <div className="mt-6">
            <Link 
              href="/Volunteer-Application" 
              className="inline-block px-8 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              href="/contact" 
              className="inline-block ml-4 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 font-medium rounded-md hover:bg-emerald-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}