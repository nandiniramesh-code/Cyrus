// src/app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering Children&s Futures
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Light shows the path to possible future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Donate" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg">
                Donate Now
              </Link>
              <Link href="/programs" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full text-lg">
                Our Programs
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          {/* You'll need to add an actual image here */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-600 opacity-50"></div>
          <Image
            src="/home/2151438275.jpg" 
            alt="Children in need"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Image 
              src="/logo.jpg" 
              alt="Cyrus Development Foundation Logo" 
              width={180} 
              height={180}
              className="mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              Cyrus Development Foundation Inc. is dedicated to providing hope and opportunities 
              to children in need. We believe every child deserves a chance at a bright future, 
              and we work tirelessly to make this belief a reality through our comprehensive programs.
            </p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold">
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="relative h-48 w-full">
    <Image 
      src="/home/education.jpg" 
      alt="Education" 
      layout="fill" 
      objectFit="cover" 
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-3 text-gray-800">Education</h3>
    <p className="text-gray-600 mb-4">
      Providing access to quality education and learning resources to children 
      in underserved communities.
    </p>
    <Link href="/programs/education" className="text-blue-600 hover:text-blue-800 font-semibold">
      Learn more →
    </Link>
  </div>
</div>

            {/* Impact Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="relative h-48 w-full">
    <Image 
      src="/home/helth.webp" 
      alt="Education" 
      layout="fill" 
      objectFit="cover" 
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-3 text-gray-800">Health & Nutrition</h3>
    <p className="text-gray-600 mb-4">
    Ensuring children have access to healthcare, nutritious food, and clean water
    to grow healthy and strong.
    </p>
    <Link href="/programs/education" className="text-blue-600 hover:text-blue-800 font-semibold">
      Learn more →
    </Link>
  </div>
</div>
            
            {/* Impact Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="relative h-48 w-full">
    <Image 
      src="/home/Community Development.jpg" 
      alt="Education" 
      layout="fill" 
      objectFit="cover" 
    />
  </div>
  <div className="p-6">Community Development
    <h3 className="text-xl font-bold mb-3 text-gray-800">Health & Nutrition</h3>
    <p className="text-gray-600 mb-4">
    Building stronger communities through infrastructure improvements, economic 
    opportunities, and social support systems.
    </p>
    <Link href="/programs/education" className="text-blue-600 hover:text-blue-800 font-semibold">
      Learn more →
    </Link>
  </div>
</div>
          </div>
        </div>
      </section>


           

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can transform a child&s life. Whether through donation, volunteering,
            or spreading awareness, every action counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Donate" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Donate Now
            </Link>
            <Link href="/Volunteer" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Story 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sarah&s Story</h3>
              <p className="text-gray-600 mb-4">
                &Thanks to the educational program, I am the first in my family to attend college. 
                Now I can pursue my dream of becoming a teacher.&
              </p>
            </div>
            
            {/* Story 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Michael&s Journey</h3>
              <p className="text-gray-600 mb-4">
                &The healthcare initiative provided by Cyrus Foundation saved my life. Today, 
                I&m healthy and able to focus on my education.&
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/stories" className="text-blue-600 hover:text-blue-800 font-semibold">
              Read more stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Add partner logos here */}
            <div className=" rounded">
            <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/charity-logo,-charity-logo-design-template-07335ce3fc85c212d75b5061322caef3_screen.jpg" 
                  alt="Cyrus Development Foundation Logo" 
                  width={160} 
                  height={160}
                  className="rounded-full"
                />
                </Link>
            </div>
            <div className="rounded">
              <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/1600w-E8ndXdfQOwo.webp" 
                  alt="Cyrus Development Foundation Logo" 
                  width={160} 
                  height={160}
                  className="rounded-full"
                />
                </Link></div>
            <div className="rounded">
            <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/1600w-esh0dE-j1YQ.webp"
                  alt="Cyrus Development Foundation Logo" 
                  width={160} 
                  height={160}
                  className="rounded-full"
                />
                </Link>

            </div>
            <div className="rounded">
            <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/images.jpeg" 
                  alt="Cyrus Development Foundation Logo" 
                  width={160} 
                  height={160}
                  className="rounded-full"
                />
                </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}