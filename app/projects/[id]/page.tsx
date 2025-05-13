// app/projects/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import portfolioData from "@/data/data";

interface PageProps {
  params: {
    id: string;
  };
}
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

// Since params is an async value, mark the function as async to handle it
export default async function ProjectDetail({ params }: PageProps) {
  // Await the params.id before proceeding to fetch the project
  const  id  = (await params).id;

  // Make sure that the id is valid
  if (!id || typeof id !== "string") {
    return notFound();
  }

  const projects = portfolioData.projects;
  const index = projects.findIndex((project) => project.id === id);

  // If the project doesn't exist, return 404
  if (index === -1) return notFound();

  const project = projects[index];
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-gray-600 text-lg">{project.description}</p>

      <div className="mt-10 flex justify-between text-blue-600 font-medium">
        {prevProject ? (
          <Link href={`/projects/${prevProject.id}`} className="hover:underline text-black dark:text-white">
            ← {prevProject.title}
          </Link>
        ) : <div />}
        
        {nextProject ? (
          <Link href={`/projects/${nextProject.id}`} className="hover:underline text-black dark:text-white">
            {nextProject.title} →
          </Link>
        ) : <div />}
      </div>

      <div className="fixed top-3 left-3 text-sm text-blue-500">
        <Link href="/#projects" className="hover:underline text-black dark:text-white">
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
}
