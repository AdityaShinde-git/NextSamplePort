// components/Projects.tsx

import Link from "next/link";
import portfolioData from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const truncateText = (text: string, wordLimit: number): string => {
    if (!text) return '';

    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  // Truncate the project description to a specified word limit

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
        <p className="text-gray-600 dark:text-gray-400">
          A curated gallery of recent projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ">
      
      
      {portfolioData.projects.map((project) => (
        
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="block border rounded-xl p-4 hover:shadow-lg hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          <img src={project.image} alt={project.title} className="rounded-md mb-3" />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className=" text-gray-700 text-sm dark:text-gray-200">{truncateText(project.description, 20)}</p>
        </Link>
      ))}
     
    </div>
    </section>
  );
};

export default Projects;
