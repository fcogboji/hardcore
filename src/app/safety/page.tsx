'use client';

import Link from 'next/link';

export default function HealthAndSafetyPage() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8 max-w-5xl mx-auto max-sm:text-white">
      <nav className="mb-6 flex flex-wrap gap-2 text-blue-600 max-sm:text-white font-medium text-sm sm:text-base">
        <Link href="/">Home</Link>
        <span>Health & Safety</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 max-sm:text-black">
        Putting health & safety at the forefront of all we do
      </h1>

      <section
        className="mt-10 sm:mt-16 h-64 sm:h-[70vh] w-full bg-cover bg-center rounded-lg bg-grey-800 text-black"
        style={{ backgroundImage: "url('/hse.png')" }}
      ></section>

      <section className="my-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 max-sm:text-black mb-2">
          Health, safety and wellbeing at HardCore Builder
        </h2>
        <p className="text-gray-600 max-sm:text-black leading-relaxed text-sm sm:text-base">
          At HardCore Builder, protecting people and promoting a positive culture of health & safety is not just a responsibility; 
          it's a commitment to the safety, health and wellbeing of every individual. 
          Going beyond compliance, we proactively identify and mitigate risk, 
          providing a secure environment where everyone can feel protected and thrive.
        </p>
      </section>

      <section className="mb-8 bg-yellow-600 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 max-sm:text-white mb-2">
          Key Contacts
        </h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-sm sm:text-base max-sm:bg-transparent">
          <p className="font-medium">Denis</p>
          <p className="text-gray-600 max-sm:text-white">Health & Safety Director</p>
          <a href="mailto:lorna.byrne@hardcorebuilder.com" className="text-blue-600 hover:underline max-sm:text-white">
            Email
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 max-sm:text-white mb-2">
          How we protect people at HardCore Builder
        </h3>
        <ul className="list-disc pl-4 sm:pl-6 text-gray-600 max-sm:text-black space-y-1 text-sm sm:text-base">
          <li>Committed leadership</li>
          <li>Integrating safety from the start</li>
          <li>Robust health & safety management system</li>
          <li>Comprehensive training for all</li>
          <li>Supply chain engagement</li>
          <li>Prioritise health and wellbeing</li>
          <li>Assurance for our clients</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 max-sm:text-black mb-2">
          Our health & safety accreditations
        </h3>
        <ul className="list-disc pl-4 sm:pl-6 text-gray-600 max-sm:text-black space-y-1 text-sm sm:text-base">
          <li>ISO 45001 Occupational Health & Safety Management System</li>
          <li>RoSPA Member and Order of Distinction</li>
          <li>SafeContractor™ Member</li>
          <li>Acclaim Health & Safety Accreditation</li>
        </ul>
      </section>
    </main>
  );
}
