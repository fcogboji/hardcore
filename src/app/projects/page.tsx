import Image from 'next/image';

const projects = [
  { name: 'Open Air', image: '/open-air.png' },
  { name: 'Office', image: '/office.png' },
  { name: 'Meeting', image: '/meeting.png' },
  { name: 'Cafe', image: '/cafe.png' },
];

const ProjectsPage = () => {
  return (
    <div className="py-20 px-2 md:px-16 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="text-center">
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
