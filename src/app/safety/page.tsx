// app/health-and-safety/page.tsx
'use client';

import Link from 'next/link';

export default function HealthAndSafetyPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <nav className="mb-6 flex gap-4 text-blue-600 font-medium">
        <Link href="/">Home</Link>
        {/*<span>/</span>*/}
        <span>Health & Safety</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Putting health & safety at the forefront of all we do
      </h1>
      <section
        className="mt-20 h-screen w-full bg-cover"
        style={{ backgroundImage: "url('/hse.png')" }}
      >
        
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Health, safety and wellbeing at HardCore Builder
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At HardCore Builder, protecting people and promoting a positive culture of health & safety is not just a responsibility; 
          it's a commitment to the safety, health and wellbeing of every individual. 
          Going beyond compliance, we proactively identify and mitigate risk, 
          providing a secure environment where everyone can feel protected and thrive.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Contacts</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="font-medium">Denis</p>
          <p className="text-gray-600">Health & Safety Director</p>
          <a href="mailto:lorna.byrne@hardcorebuilder.com" className="text-blue-600 hover:underline">
            Email
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">How we protect people at HardCore Builder</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
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
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Our health & safety accreditations</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>ISO 45001 Occupational Health & Safety Management System</li>
          <li>RoSPA Member and Order of Distinction</li>
          <li>SafeContractor™ Member</li>
          <li>Acclaim Health & Safety Accreditation</li>
        </ul>
      </section>
    </main>
  );
}
