// src/app/get-involved/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Get Involved</h1>
            <p className="text-xl mt-4">Join us in creating meaningful change</p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-600 opacity-40"></div>
          <Image
            src="/GET INVOLVED/MAIN.jpg" 
            alt="Get Involved with Cyrus Development Foundation"
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Make a Difference</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Cyrus Development Foundation, we believe that positive change happens when passionate individuals and organizations come together with a shared vision. There are many ways you can contribute to our mission of empowering communities through education, healthcare, and agricultural initiatives.
            </p>
            <p className="text-lg text-gray-700">
              Whether you choose to donate, volunteer, partner with us, or spread awareness, your involvement makes a significant impact on the communities we serve. Together, we can create lasting change and build a better future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Donate Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-red-100 relative">
                <Image 
                  src="/GET INVOLVED/54502.jpg "
                  alt="Donate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Donate</h3>
                <p className="text-gray-700 mb-4">
                  Your financial contribution helps us implement programs that create lasting impact in communities.
                </p>
                <Link href="#donate" className="text-red-600 hover:text-red-800 font-semibold">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Volunteer Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-100 relative">
                <Image 
                  src="/GET INVOLVED/different-people-doing-volunteer-work-with-food.jpg"
                  alt="Volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Volunteer</h3>
                <p className="text-gray-700 mb-4">
                  Share your time, skills, and passion by volunteering for our various programs and initiatives.
                </p>
                <Link href="#volunteer" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Partner Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-green-100 relative">
                <Image 
                  src="/GET INVOLVED/handshake-businessmen.jpg" 
                  alt="Partner With Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Partner With Us</h3>
                <p className="text-gray-700 mb-4">
                  Collaborate with us to leverage resources and expertise for greater community impact.
                </p>
                <Link href="#partner" className="text-green-600 hover:text-green-800 font-semibold">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Fundraise Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-yellow-100 relative">
                <Image 
                  src="/GET INVOLVED/woman-hand-holding-plant-growing-from-coins-bottle.jpg" 
                  alt="Fundraise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Fundraise</h3>
                <p className="text-gray-700 mb-4">
                  Start your own fundraising campaign to support our projects and spread awareness.
                </p>
                <Link href="#fundraise" className="text-yellow-600 hover:text-yellow-800 font-semibold">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 bg-white" id="donate">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/GET INVOLVED/54502.jpg" 
                  alt="Donate to Our Cause"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Donate</h2>
                <p className="text-lg text-gray-700 mb-4">
                  You, me, we all have the power to change a life. At Cyrus Development Foundation, we help people learn, grow, and build a better future. Your donation can send a child to school, bring care to someone in need, or give a family a warm meal.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Every act of generosity is hope and every hope is a seed of change. Donate today—and be the reason someone has a tomorrow.
                </p>
                <h3 className="text-xl font-bold mb-4 text-gray-800">How Your Donation Helps:</h3>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>$25 can provide school supplies for a child</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>$50 can supply essential medications for a medical camp</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>$100 can provide quality seeds for a farmer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>$250 can sponsor a child&s education for a year</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/Donate" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block">
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-gray-50" id="volunteer">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/GET INVOLVED/different-people-doing-volunteer-work-with-food.jpg" 
                  alt="Volunteer With Us"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Volunteer</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Volunteers are the heart and soul of our organization. By contributing your time, skills, and passion, you can make a direct impact on the communities we serve. We offer various volunteering opportunities across our programs in education, healthcare, and agriculture.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you can commit to a few hours, days, or months, your contribution is valuable to us. Volunteering with Cyrus Development Foundation is also an opportunity for personal growth, learning, and connecting with like-minded individuals.
                </p>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Volunteer Opportunities:</h3>
                <ul className="text-gray-700 mb-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div>
                      <span className="font-semibold">Teaching Assistant:</span> Support our education programs by assisting teachers and mentoring students.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div>
                      <span className="font-semibold">Healthcare Volunteer:</span> Assist in our medical camps and health education initiatives.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div>
                      <span className="font-semibold">Agricultural Support:</span> Help farmers implement sustainable practices and improve productivity.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div>
                      <span className="font-semibold">Administrative Support:</span> Assist with office tasks, communications, and event organization.
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/Volunteer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block">
                    Volunteer With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white" id="partner">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/GET INVOLVED/handshake-businessmen.jpg" 
                  alt="Partner With Us"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Partner With Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Partnerships are essential to our success and sustainability. By collaborating with like-minded organizations, businesses, and institutions, we can leverage resources, expertise, and networks to create greater impact in the communities we serve.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We welcome partnerships in various forms, from program implementation and funding to knowledge sharing and advocacy. Together, we can develop innovative solutions to address complex challenges and create lasting change.
                </p>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Partnership Opportunities:</h3>
                <ul className="text-gray-700 mb-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <span className="font-semibold">Corporate Partnerships:</span> CSR initiatives, employee engagement, and financial support.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <span className="font-semibold">Institutional Collaborations:</span> Joint projects with universities, research institutions, and NGOs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <span className="font-semibold">Technical Partnerships:</span> Expertise sharing and capacity building.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <span className="font-semibold">Community Partnerships:</span> Collaboration with local organizations and community leaders.
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/Partnerpage" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block">
                    Become a Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section className="py-16 bg-gray-50" id="fundraise">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/GET INVOLVED/woman-hand-holding-plant-growing-from-coins-bottle.jpg" 
                  alt="Fundraise for Cyrus Foundation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Fundraise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Start your own fundraising campaign to support our work and spread awareness about our cause. Whether it&s a birthday, marathon, or special event, you can turn it into an opportunity to make a difference.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Fundraising is not only about collecting funds; it&s also about building a community of supporters and raising awareness about the issues we address. Your initiative can inspire others to join our mission and contribute to sustainable development.
                </p>
                <h3 className="text-xl font-bold mb-4 text-gray-800">How to Start Fundraising:</h3>
                <ol className="text-gray-700 mb-6 space-y-3 list-decimal pl-5">
                  <li className="pl-2">
                    <span className="font-semibold">Choose a cause</span> within our foundation that resonates with you.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Set up your fundraising page</span> using our online platform.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Share your story</span> about why you&re passionate about the cause.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Spread the word</span> through social media, email, and personal connections.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Thank your supporters</span> and keep them updated on the impact.
                  </li>
                </ol>
                <div className="mt-6">
                  <Link href="/start-fundraising" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block">
                    Start Fundraising
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Voices of Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image 
                    src="/placeholder-volunteer-1.jpg" 
                    alt="Sarah K."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="italic mb-4 text-center">
                &Volunteering with Cyrus Foundation has been one of the most rewarding experiences of my life. Seeing the direct impact of our work on children&s education is something I&ll cherish forever.&
              </p>
              <p className="text-center font-semibold">
                Sarah K., Education Volunteer
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image 
                    src="/placeholder-partner-1.jpg" 
                    alt="Globex Corp"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="italic mb-4 text-center">
                &Our partnership with Cyrus Foundation has allowed us to extend our CSR initiatives to communities we couldn&t reach before. Their dedication and professionalism make them an ideal partner.&
              </p>
              <p className="text-center font-semibold">
                James T., Corporate Partner
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image 
                    src="/placeholder-fundraiser-1.jpg" 
                    alt="Michael R."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="italic mb-4 text-center">
                &I raised funds for Cyrus Foundation during my marathon, and the support I received was overwhelming. It made my run more meaningful knowing it was helping farmers access better resources.&
              </p>
              <p className="text-center font-semibold">
                Michael R., Community Fundraiser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">How can I volunteer if I only have limited time?</h3>
                <p className="text-gray-700">
                  We understand that time constraints can be a challenge. We offer flexible volunteering opportunities, including one-time events, weekend programs, and remote volunteering options that can accommodate various schedules.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Is my donation tax-deductible?</h3>
                <p className="text-gray-700">
                  Yes, Cyrus Development Foundation is a registered non-profit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Can I specify which program my donation supports?</h3>
                <p className="text-gray-700">
                  Absolutely! When making a donation, you can specify whether you&d like your contribution to support education, healthcare, agriculture, or a specific project within these areas. We respect donor intentions and ensure funds are allocated accordingly.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">How do I know my donation is making an impact?</h3>
                <p className="text-gray-700">
                  Transparency is important to us. We regularly share impact reports, stories, and updates through our newsletter, social media, and annual reports. Donors receive updates about the programs they&ve supported and the difference their contributions have made.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Can my company partner with Cyrus Development Foundation?</h3>
                <p className="text-gray-700">
                  Yes, we welcome corporate partnerships! We work with companies of all sizes to develop meaningful CSR initiatives, employee engagement opportunities, and strategic philanthropy programs that align with both our mission and your corporate values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
  );
}