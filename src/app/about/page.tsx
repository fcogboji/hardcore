import Link from "next/link";

export default function AboutPage() {
    return (
      <main className="min-h-screen bg-white text-gray-800">
        <section className="bg-grey-300 py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us </h1>
         
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            At HardCore BUILDERS, we’re not just constructing spaces — we’re building legacies.
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-600 text-white text-lg rounded-xl shadow hover:bg-yellow-700">
            <Link href="contact">Let's Talk</Link>
          </button>
        </section>
  
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              With a solid foundation built on integrity and precision, HardCore BUILDERS delivers high-end interior renovations, durable exterior works, and beautifully designed garden spaces. Whether you're transforming your home or upgrading a commercial facility, we provide tailored solutions that elevate both form and function.
            </p>
            <p>
              Our collaborative approach means we listen first. We want to understand your goals, challenges, and vision before laying the first brick. Every project is guided by clear timelines, detailed reporting, and open communication from concept to completion.
            </p>
            <p>
              From cozy residential updates to large-scale commercial builds, our strength lies in versatility, craftsmanship, and consistency. We bring creativity, organization, and experience to every job.
            </p>
            <p className="italic text-yellow-700 font-semibold">
              We're not just contractors. We're your building partners.
            </p>
          </div>
        </section>
  
        <section className="bg-gray-100 py-20 px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Alex Monroe - Founder & CEO',
              'Jasmine Patel - Head of Projects',
              'Liam Chen - Technical Director',
              'Emily Grant - Client Relations Manager',
              'Michael Owens - Senior Site Manager',
              'Chloe Fernandez - Sustainability Lead',
              'Noah Reed - Structural Engineer',
              'Sophie King - Creative Design Lead',
              'Dylan Moore - Site Supervisor'
            ].map((person, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow">
                <p className="font-semibold text-gray-800">{person}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="bg-white py-20 px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
          <div className="max-w-4xl mx-auto space-y-8 text-lg">
            <div>
              <h3 className="text-2xl font-semibold">ConstructionLine Gold Member</h3>
              <p>
                Recognized for high standards in quality, health and safety, and financial stability. It streamlines procurement for clients and highlights our professional credentials.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">CHAS Accredited</h3>
              <p>
                Our commitment to health and safety is backed by CHAS – a leading UK provider of compliance and risk management services.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Federation of Master Builders</h3>
              <p>
                As proud members, we uphold strict codes of conduct and building excellence recognized nationwide.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">TrustMark Registered</h3>
              <p>
                Government-endorsed quality assurance that ensures we deliver trusted services in home improvement and construction.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  