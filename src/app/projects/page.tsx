import Image from 'next/image'; // Importing the Next.js Image component for optimized images

// Array of project data, each with a name and image path
const projects = [
  { name: 'Open Air', image: '/open-air.png' },
  { name: 'Office', image: '/office.png' },
  { name: 'Meeting', image: '/meeting.png' },
  { name: 'Cafe', image: '/cafe.png' },
];

// Functional component to display the Projects page
const ProjectsPage = () => {
  return (
    // Main container with vertical padding and responsive horizontal padding
    <div className="py-20 px-2 md:px-16 bg-gray-100">
      
      {/* Page title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Projects
      </h2>

      {/* Grid layout for project cards; two columns on medium screens and above */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mapping through each project and rendering it */}
        {projects.map((project) => (
          <div key={project.name} className="text-center">
            {/* Project name as subheading */}
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>

            {/* Project image using Next.js Image component */}
            <Image
              src={project.image} // Image path
              alt={project.name}  // Alternative text for accessibility
              width={600}         // Width of the image
              height={600}        // Height of the image
              className="rounded-lg mx-auto" // Rounded corners and centered image
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; // Exporting the component to be used in other parts of the app
