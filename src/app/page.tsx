import Image from "next/image"; // Importing the Image component from Next.js for optimized image rendering

// An array of service objects that contain image path, title, and description
const services = [
  {
    image: "/cafe.png", // Path to the image for the first service
    title: "Interior Renovation", // Title of the first service
    description:
      "High-quality refurbishments to transform your living or working space with modern, functional designs.", // Description for the first service
  },
  {
    image: "/office.png", // Image for the second service
    title: "Exterior Renovation", // Title of the second service
    description:
      "Private and commercial exterior upgrades that enhance both durability and visual appeal.", // Description for the second service
  },
  {
    image: "/gate.jpg", // Image for the third service
    title: "Garden Gate", // Title of the third service
    description:
      "Custom-designed garden structures and landscaping to bring your outdoor vision to life.", // Description for the third service
  },
];

// Home page component
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with background image */}
      <section
        className="mt-20 h-screen w-full bg-cover"
        style={{ backgroundImage: "url('/bg-image.png')" }} // Inline style to set the background image
      >
        {/* Overlay content inside the hero section */}
        <div className="bg-opacity-60 p-8 rounded-2xl shadow-2xl text-center">
          {/* Heading of the hero section */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            HardCore BUILDERS
          </h1>
          {/* Descriptive paragraph with line breaks */}
          <p className="text-lg md:text-2xl max-w-xl mx-auto font-bold text-white">
            Office Interior Design
            <br />
            Transform your office with interior design from HardCore Builders
            <br />
            Home · Expertise · Office Interior Design
            <br />
            Workplace interior design that&rsquo;s crafted around your business
            <br />
            Discover how HardCore Builders office design service can transform
            your workspace into an invigorating environment that enhances your
            culture and inspires your people. Contact us today to discuss your
            project.
            <br />
            Specialists in Interior Refurbishments, Exterior Renovations, and
            Garden Building
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        {/* Grid layout to display each service */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Loop through each service and display using ServiceCard */}
          {services.map((service, index) => (
            <ServiceCard
              key={index} // Unique key for each item in the list
              image={service.image} // Passing image to ServiceCard
              title={service.title} // Passing title to ServiceCard
              description={service.description} // Passing description to ServiceCard
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800 py-20 px-6 md:px-16 text-white">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        {/* List of reasons to choose the company */}
        <ul className="max-w-3xl mx-auto space-y-6 text-lg list-disc list-inside">
          <li>Experienced team with over 10 years in the industry</li>
          <li>Transparent pricing and reliable timelines</li>
          <li>High-quality craftsmanship and materials</li>
          <li>Dedicated to client satisfaction from start to finish</li>
        </ul>
      </section>

      {/* Footer would go here if added in the future */}
    </main>
  );
}

// Reusable component to display each service card
function ServiceCard({
  image, // Image path
  title, // Title of the service
  description, // Description of the service
}: {
  image: string; // Declaring that 'image' is a string
  title: string; // Declaring that 'title' is a string
  description: string; // Declaring that 'description' is a string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 text-center">
      {/* Container for image with a fixed height */}
      <div className="relative w-full h-40 mb-4">
        <Image
          src={image} // The image source passed as prop
          alt={title} // Alternative text for accessibility
          fill // Automatically fills the container
          className="object-cover rounded-md" // Covers the container and rounds corners
        />
      </div>
      {/* Title of the service */}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      {/* Description of the service */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
