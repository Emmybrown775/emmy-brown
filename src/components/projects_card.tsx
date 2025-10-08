import { ExternalLink, Github } from "@deemlol/next-icons";
import Image from "next/image";
import { FeaturedProject } from "./projects";
import Link from "next/link";

interface ProjectsCardProps {
  className?: string;
  project: FeaturedProject;
  fliped: boolean;
}

export default function ProjectsCard({
  className = "",
  project,
  fliped = false,
}: ProjectsCardProps) {
  return (
    <div className={`${className}`}>
      <div className="relative mb-10  rounded shadow-[4px_4px_10px_rgba(0,0,0,0.1)] shadow-primary-light md:hidden">
        <div className="absolute inset-0 rounded  bg-[url('/images/github.png')] bg-cover bg-center opacity-10 z-0" />

        {/* Optional Color Tint Overlay */}
        <div className="absolute rounded inset-0 bg-secondary opacity-10 z-10" />
        <div className="relative space-y-7 opacity-100 z-50 px-5 py-6">
          <div>
            <h3 className="font-mono text-secondary text-sm">
              Featured Project
            </h3>
            <h1 className="font-sans font-bold text-lg">{project.title}</h1>
          </div>
          <div>
            <p className="font-sans">{project.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm">{project.tools.join(" ")}</h3>

            <div className="flex gap-5">
              <Link href={project.github_link}>
                <Github />
              </Link>
              <Link href={project.url}>
                <ExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {fliped ? (
        <div className="grid-cols-12 hidden mb-32 md:grid gap-4 text-start">
          {/* Text section first */}
          <div className="col-span-5 z-10">
            <h3 className="text-sm font-mono pb-1 text-secondary">
              Featured Project
            </h3>
            <h2 className="text-2xl font-bold font-sans text-header">
              {project.title}
            </h2>
            <div className="bg-primary-light py-4 px-3 pr-10 -mr-24 z-[100] my-7 rounded shadow-[4px_4px_10px_rgba(0,0,0,0.1)] shadow-text">
              <p className="text-lg font-sans text-text text-end">
                {project.description}
              </p>
            </div>
            <h4 className="font-sans text-sm">{project.tools.join(" · ")}</h4>
            <div className="flex justify-start pt-6 gap-5">
              <Link href={project.github_link}>
                <Github className="hover:text-secondary transition-colors duration-150" />
              </Link>
              <Link href={project.github_link}>
                <ExternalLink className="hover:text-secondary transition-colors duration-150" />
              </Link>
            </div>
          </div>

          {/* Image section second */}
          <div className="relative col-span-7 aspect-[16/9]">
            <Image
              src={project.image}
              alt="image"
              className="w-full h-full object-contain object-top"
            />
            <div className="absolute inset-0 md:bg-secondary transition-all duration-300 opacity-65 mix-blend-normal hover:opacity-0"></div>
          </div>
        </div>
      ) : (
        <div className=" grid-cols-12 hidden mb-32 md:grid gap-4 text-end">
          <div className="relative col-span-7 aspect-[16/9]">
            <Image
              src={project.image}
              alt="image"
              className="w-full h-full object-contain object-top"
            />
            <div className="absolute inset-0 md:bg-secondary transition-all duration-300 opacity-65 mix-blend-normal hover:opacity-0"></div>
          </div>

          <div className="col-span-5 z-10 ">
            <h3 className="text-sm font-mono pb-1 text-secondary">
              Featured Project
            </h3>
            <h2 className="text-2xl font-bold font-sans text-header">
              {project.title}
            </h2>
            <div className="bg-primary-light py-4 px-3 pl-10 -ml-24 z-[100] my-7 rounded shadow-[4px_4px_10px_rgba(0,0,0,0.1)] shadow-text">
              <p className="text-lg font-sans text-text text-start">
                {project.description}
              </p>
            </div>
            <h4 className="font-sans text-sm">{project.tools.join(" · ")}</h4>
            <div className="flex justify-end pt-6 gap-5">
              <Link href={project.github_link}>
                <Github className="hover:text-secondary transition-colors duration-150" />
              </Link>
              <Link href={project.github_link}>
                <ExternalLink className="hover:text-secondary transition-colors duration-150" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
