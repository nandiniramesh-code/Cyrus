"use client";

import React from 'react';

export default function HealthcareServices() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-8">Healthcare Services</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Healthcare Mission</h2>
          <p className="mb-6 text-gray-700">
            The Cyrus Foundation is committed to improving access to quality healthcare in underserved communities worldwide. 
            We believe that healthcare is a fundamental human right, and we work tirelessly to provide medical services, 
            preventive care, and health education to those who need it most.
          </p>
          <p className="text-gray-700">
            Through partnerships with local healthcare providers, international medical professionals, and community organizations, 
            we develop sustainable healthcare solutions tailored to the specific needs of each community we serve.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Services</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Mobile Health Clinics</h3>
            <p className="text-gray-700">
              Our mobile clinics bring essential healthcare services directly to remote and rural communities. 
              Equipped with basic diagnostic tools, medications, and staffed by trained healthcare professionals, 
              these units provide primary care, maternal and child health services, and management of common illnesses.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Preventive Care Programs</h3>
            <p className="text-gray-700">
              We focus on preventing illness through vaccination campaigns, nutrition programs, and regular 
              health screenings. Our preventive care initiatives have significantly reduced the incidence of 
              preventable diseases in communities where we operate.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Maternal and Child Health</h3>
            <p className="text-gray-700">
              Our specialized programs support mothers through pregnancy, childbirth, and early childhood development. 
              We provide prenatal care, skilled birth attendance, postnatal support, and pediatric services to ensure 
              healthy outcomes for mothers and children.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Health Education</h3>
            <p className="text-gray-700">
              Knowledge is power in healthcare. We conduct community workshops on hygiene practices, disease prevention, 
              nutrition, and family planning. Our health education initiatives empower communities to take charge of their 
              wellbeing through informed decision-making.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Medical Training</h3>
            <p className="text-gray-700">
              We invest in building local healthcare capacity by training community health workers, nurses, and midwives. 
              These trained professionals become advocates for health in their communities, ensuring the sustainability of 
              our programs.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Impact</h2>
          <p className="mb-6 text-gray-700">
            Since our founding, we have:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Provided medical care to over 100,000 patients</li>
            <li>Established 25 community health centers across 8 countries</li>
            <li>Trained more than 500 community health workers</li>
            <li>Reduced maternal mortality by 40% in our target communities</li>
            <li>Achieved 85% vaccination coverage in previously underserved areas</li>
          </ul>
          <p className="text-gray-700">
            We measure our success not just in numbers but in the lasting improvements to community health outcomes 
            and healthcare systems that continue long after our direct involvement ends.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Our Approach</h2>
          <p className="mb-6 text-gray-700">
            At the Cyrus Foundation, we believe in:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-emerald-600">Community Partnership</h3>
              <p className="text-gray-700">
                We work with communities as equal partners, ensuring our programs address their priorities and build on existing strengths.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-emerald-600">Sustainable Solutions</h3>
              <p className="text-gray-700">
                We develop healthcare models that communities can maintain and grow independently over time.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-emerald-600">Holistic Care</h3>
              <p className="text-gray-700">
                We address healthcare within the broader context of wellbeing, considering social, environmental, and economic factors.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-emerald-600">Cultural Respect</h3>
              <p className="text-gray-700">
                We honor local healing traditions and integrate them appropriately into our healthcare approaches.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Support Our Healthcare Initiatives</h2>
          <p className="mb-6 text-gray-700">
            Your support can help us expand our healthcare services to reach more communities in need. 
            Whether through donations of medical supplies, financial contributions, or volunteering your 
            professional expertise, you can make a difference.
          </p>
          <div className="mt-6">
            <a 
              href="/get-involved" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
            >
              Get Involved Today
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}