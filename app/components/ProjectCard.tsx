// components/ProjectCard.tsx

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg dark:shadow-md bg-white dark:bg-zinc-900 transition-all hover:bg-gray-200 dark:hover:bg-gray-600  hover:scale-105 duration-300">
      <div className="relative w-full h-56">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
