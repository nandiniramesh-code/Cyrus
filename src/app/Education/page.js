"use client";

import React from 'react';

export default function Education() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-8">Education Initiatives</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Educational Mission</h2>
          <p className="mb-6 text-gray-700">
            At the Cyrus Foundation, we believe that education is a fundamental right and a powerful tool for 
            sustainable development. Our educational initiatives aim to provide accessible, quality education 
            to underserved communities around the world, fostering a new generation of informed and empowered individuals.
          </p>
          <p className="text-gray-700">
            We work closely with local partners to develop programs that are culturally relevant, 
            practically applicable, and designed to meet the unique needs of each community we serve.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Programs</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Literacy Development</h3>
            <p className="text-gray-700">
              Our literacy programs focus on building fundamental reading and writing skills among 
              children and adults alike. Through community learning centers and mobile classrooms, 
              we bring educational resources to remote and underserved areas.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Digital Learning</h3>
            <p className="text-gray-700">
              We bridge the digital divide by establishing technology centers equipped with computers 
              and internet access. Our digital literacy curriculum helps students develop essential 
              skills needed in today's technology-driven world.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Teacher Training</h3>
            <p className="text-gray-700">
              We invest in local educators through comprehensive training programs, providing them with 
              new teaching methodologies, resources, and ongoing professional development to enhance 
              the quality of education in their communities.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Scholarship Programs</h3>
            <p className="text-gray-700">
              Our scholarship initiatives identify promising students who face financial barriers and 
              provide them with the support needed to continue their education at secondary and university levels.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Impact</h2>
          <p className="mb-6 text-gray-700">
            Since our founding, our educational programs have reached over 50,000 students across 
            12 countries. We've established 35 community learning centers, trained more than 1,200 teachers, 
            and provided scholarships to 750 deserving students.
          </p>
          <p className="text-gray-700">
            Our approach focuses on creating sustainable educational systems that can continue to grow 
            and evolve with community needs long after our direct involvement ends.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Get Involved</h2>
          <p className="mb-6 text-gray-700">
            There are many ways to support our educational initiatives – from volunteering as a teacher 
            or mentor, to donating educational materials, to providing financial support for our programs.
          </p>
          <div className="mt-6">
            <a 
              href="/get-involved" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
            >
              Learn How You Can Help
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}