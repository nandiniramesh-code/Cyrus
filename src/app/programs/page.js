// src/app/programs/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
            <p className="text-xl mt-4">Sustainable solutions for lasting impact</p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-600 opacity-40"></div>
          <Image
            src="/Our Programs/african-children-enjoying-life.jpg" 
            alt="Our Programs"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Transformative Programs</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Cyrus Development Foundation, we implement strategic programs that address the pressing challenges faced by underserved communities. Our interventions focus on three key areas that we believe are fundamental to sustainable development and improved quality of life.
            </p>
            <p className="text-lg text-gray-700">
              Through our integrated approach, we strive to create lasting change that empowers individuals and communities to achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-16 bg-gray-50" id="education">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden shadow-lg h-64 w-64 mx-auto relative">
                  <Image 
                    src="/Our Programs/african-children-enjoying-life.jpg" 
                    alt="Education Programs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Education Programs</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Cyrus Development Foundation, we believe that education is a fundamental right and a powerful tool for transformation. Our education initiatives are designed to enhance access to quality learning experiences for children and adults alike.
                </p>
                <p className="text-lg text-gray-700">
                  We provide scholarships, learning materials, and training programs that equip individuals with the knowledge and skills needed to succeed. By partnering with local schools and educators, we aim to create a positive impact on the educational landscape of the communities we serve.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Educational Initiative 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-blue-100 relative">
                  <Image 
                    src="/Our Programs/group-african-kids-learning-together.jpg" 
                    alt="Scholarship Program"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Scholarship Program</h3>
                  <p className="text-gray-700 mb-4">
                    Our scholarship program provides financial support to talented students from underprivileged backgrounds, covering tuition fees, books, and other educational expenses.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Elementary to university level support</li>
                    <li>Merit and need-based scholarships</li>
                    <li>Mentoring and guidance</li>
                  </ul>
                </div>
              </div>
              
              {/* Educational Initiative 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-blue-100 relative">
                  <Image 
                    src="/Our Programs/african-woman-teaching-kids-class.jpg" 
                    alt="Learning Materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Learning Resources</h3>
                  <p className="text-gray-700 mb-4">
                    We provide essential learning materials to schools and community centers, ensuring that students have the tools they need to engage effectively in their education.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Textbooks and reference materials</li>
                    <li>Educational technology resources</li>
                    <li>School supplies for students in need</li>
                  </ul>
                </div>
              </div>
              
              {/* Educational Initiative 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-blue-100 relative">
                  <Image 
                    src="/Our Programs/medium-shot-smiley-kid-writing.jpg" 
                    alt="Teacher Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Teacher Training</h3>
                  <p className="text-gray-700 mb-4">
                    Our teacher training initiatives focus on enhancing the capacity of educators to deliver quality education through innovative teaching methodologies and approaches.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Professional development workshops</li>
                    <li>Modern teaching techniques</li>
                    <li>Classroom management skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Programs */}
      <section className="py-16 bg-white" id="healthcare">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-12">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden shadow-lg h-64 w-64 mx-auto relative">
                  <Image 
                    src="/Our Programs/helth/african-american-boy-getting-checkup-by-doctor.jpg" 
                    alt="Healthcare Programs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-green-700">Healthcare Programs</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Access to quality healthcare is essential for the well-being of individuals and communities. The Cyrus Development Foundation is committed to improving healthcare services through a range of initiatives, including health education, medical outreach programs, and partnerships with local healthcare providers.
                </p>
                <p className="text-lg text-gray-700">
                  We focus on preventive care, maternal and child health, and addressing the needs of vulnerable populations. Our goal is to ensure that everyone has access to the healthcare they need to lead healthy, productive lives.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Healthcare Initiative 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-green-100 relative">
                  <Image 
                    src="/Our Programs/helth/outreach-1140x500.jpg" 
                    alt="Medical Outreach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Medical Outreach</h3>
                  <p className="text-gray-700 mb-4">
                    Our mobile medical camps bring essential healthcare services to remote and underserved communities, providing consultations, treatments, and referrals.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Regular medical camps in rural areas</li>
                    <li>Essential medication distribution</li>
                    <li>Health screenings and early diagnosis</li>
                  </ul>
                </div>
              </div>
              
              {/* Healthcare Initiative 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-green-100 relative">
                  <Image 
                    src="/Our Programs/helth/mom-and-baby-looking-at-camera.jpeg" 
                    alt="Maternal & Child Health"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Maternal & Child Health</h3>
                  <p className="text-gray-700 mb-4">
                    We prioritize the health of mothers and children through specialized programs that focus on prenatal care, safe deliveries, and child development.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Prenatal and postnatal care</li>
                    <li>Nutrition programs for children</li>
                    <li>Immunization campaigns</li>
                  </ul>
                </div>
              </div>
              
              {/* Healthcare Initiative 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-green-100 relative">
                  <Image 
                    src="/Our Programs/helth/3o3bpd57qf8gqtdc.jpeg" 
                    alt="Health Education"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Health Education</h3>
                  <p className="text-gray-700 mb-4">
                    Our health education initiatives raise awareness about preventive healthcare, hygiene practices, and disease management in communities.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Community health workshops</li>
                    <li>Hygiene and sanitation training</li>
                    <li>Disease prevention education</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Programs */}
      <section className="py-16 bg-gray-50" id="agriculture">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden shadow-lg h-64 w-64 mx-auto relative">
                  <Image 
                    src="/Agriculture Programs/Agriculture Programs.jpeg" 
                    alt="Agriculture Programs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-yellow-600">Agriculture Programs</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Agriculture is a cornerstone of many communities, providing food security and economic opportunities. The Cyrus Development Foundation recognizes the importance of sustainable agricultural practices and works to support farmers through training, access to resources, and innovative farming techniques.
                </p>
                <p className="text-lg text-gray-700">
                  Our agricultural programs aim to promote food sovereignty, enhance crop yields, and encourage environmentally friendly practices. By empowering farmers, we contribute to the overall resilience and sustainability of the communities we serve.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Agriculture Initiative 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-yellow-100 relative">
                  <Image 
                    src="/Agriculture Programs/images.jpeg" 
                    alt="Farmer Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Farmer Training</h3>
                  <p className="text-gray-700 mb-4">
                    We provide comprehensive training to farmers, equipping them with knowledge about modern farming techniques, crop management, and sustainable practices.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Sustainable farming methods</li>
                    <li>Crop diversification strategies</li>
                    <li>Pest and disease management</li>
                  </ul>
                </div>
              </div>
              
              {/* Agriculture Initiative 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-yellow-100 relative">
                  <Image 
                    src="/Agriculture Programs/Agriculture Programs.jpeg" 
                    alt="Access to Resources"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Resource Access</h3>
                  <p className="text-gray-700 mb-4">
                    Our initiatives help farmers gain access to quality seeds, tools, and other essential resources needed for successful agricultural production.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Quality seed distribution</li>
                    <li>Agricultural tool support</li>
                    <li>Irrigation system assistance</li>
                  </ul>
                </div>
              </div>
              
              {/* Agriculture Initiative 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-yellow-100 relative">
                  <Image 
                    src="/Agriculture Programs/VBA-training-1-770x447.png" 
                    alt="Market Linkages"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Market Linkages</h3>
                  <p className="text-gray-700 mb-4">
                    We help farmers connect with markets, ensuring they receive fair prices for their produce and can sustain their agricultural activities.
                  </p>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li>Cooperative formation support</li>
                    <li>Market access facilitation</li>
                    <li>Value addition training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Program Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4 text-center">200+</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Schools Supported</h3>
              <p className="text-center">
                Our education programs have reached over 200 schools, benefiting thousands of students across multiple regions.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4 text-center">15,000+</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Patients Treated</h3>
              <p className="text-center">
                Our healthcare initiatives have provided medical services to over 15,000 individuals in underserved communities.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4 text-center">5,000+</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Farmers Trained</h3>
              <p className="text-center">
                Our agricultural programs have empowered more than 5,000 farmers with skills and resources for sustainable farming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Support Our Programs</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            You, me, we all have the power to change a life. Every act of generosity is hope and every hope is a seed of change. Donate today—and be the reason someone has a tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Donate" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Donate Now
            </Link>
            <Link href="/Volunteer" className="bg-transparent hover:bg-blue-100 text-blue-900 font-bold py-3 px-8 rounded-full border border-blue-900 text-lg">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}