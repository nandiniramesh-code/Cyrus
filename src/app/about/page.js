// src/app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-600 opacity-40"></div>
          <Image
            src="/about/2151696366.jpg" 
            alt="About Cyrus Development Foundation"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="md:w-1/3">
                <Image 
                  src="/logo.jpg" 
                  alt="Cyrus Development Foundation Logo" 
                  width={300} 
                  height={300}
                  className="rounded-full shadow-lg mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">The Cyrus Development Foundation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Cyrus Development Foundation was established with the vision of empowering communities through targeted interventions and support. With a team of passionate professionals and dedicated volunteers, we strive to uplift marginalized populations and create lasting change in their lives.
                </p>
                <p className="text-lg text-gray-700">
                  Our foundation focuses on implementing projects that resonate with the needs and aspirations of the communities we serve. Through collaborative efforts and sustainable practices, we aim to create a positive impact that endures for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6 flex justify-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                Our mission is to empower individuals and communities by expanding access to education, healthcare, economic and agricultural resources—fostering resilience, self-sufficiency, and sustainable development for long-term well-being and equity.
              </p>
            </div>
            
            {/* Goal */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6 flex justify-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Our Goal</h3>
              <p className="text-gray-700 text-lg">
                The primary goal of the Cyrus Development Foundation is to implement strategic programs that address the pressing challenges faced by underserved communities. We envision a world where every individual has the tools, support, and resources necessary to lead a fulfilling life. By focusing on education, healthcare, and agriculture, we seek to break the cycle of poverty and empower individuals to achieve their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Focus Areas</h2>
          
          {/* Education */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-md h-64 relative">
                  <Image 
                    src="/about/2151696366.jpg" 
                    alt="Education Programs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
                <p className="text-gray-700 text-lg mb-4">
                  At Cyrus Development Foundation, we believe that education is a fundamental right and a powerful tool for transformation. Our education initiatives are designed to enhance access to quality learning experiences for children and adults alike.
                </p>
                <p className="text-gray-700 text-lg">
                  We provide scholarships, learning materials, and training programs that equip individuals with the knowledge and skills needed to succeed. By partnering with local schools and educators, we aim to create a positive impact on the educational landscape of the communities we serve.
                </p>
                <Link href="/Education" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                  Learn more about our education programs →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Healthcare */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-md h-64 relative">
                  <Image 
                    src="/about/africa-humanitarian-aid-doctor-taking-care-patient.jpg "
                    alt="Healthcare Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Healthcare Services</h3>
                <p className="text-gray-700 text-lg mb-4">
                  Access to quality healthcare is essential for the well-being of individuals and communities. The Cyrus Development Foundation is committed to improving healthcare services through a range of initiatives, including health education, medical outreach programs, and partnerships with local healthcare providers.
                </p>
                <p className="text-gray-700 text-lg">
                  We focus on preventive care, maternal and child health, and addressing the needs of vulnerable populations. Our goal is to ensure that everyone has access to the healthcare they need to lead healthy, productive lives.
                </p>
                <Link href="\HealthcareServices" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                  Learn more about our healthcare initiatives →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Agriculture */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-md h-64 relative">
                  <Image 
                    src="/about/male-farmer-who-is-using-shovel-dig-soil-his-rice-fields.jpg" 
                    alt="Agricultural Programs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Agriculture</h3>
                <p className="text-gray-700 text-lg mb-4">
                  Agriculture is a cornerstone of many communities, providing food security and economic opportunities. The Cyrus Development Foundation recognizes the importance of sustainable agricultural practices and works to support farmers through training, access to resources, and innovative farming techniques.
                </p>
                <p className="text-gray-700 text-lg">
                  Our agricultural programs aim to promote food sovereignty, enhance crop yields, and encourage environmentally friendly practices. By empowering farmers, we contribute to the overall resilience and sustainability of the communities we serve.
                </p>
                <Link href="/Agriculture" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                  Learn more about our agricultural programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-xl">Students Supported</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-xl">Healthcare Initiatives</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">75+</div>
              <p className="text-xl">Agricultural Projects</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us / Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Together, we can make a meaningful difference in the lives of those in need. Whether through donations, volunteering, or partnerships, your support empowers our foundation to continue its vital work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Donate" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Donate Now
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-blue-100 text-blue-900 font-bold py-3 px-8 rounded-full border border-blue-900 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}