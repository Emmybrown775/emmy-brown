"use client";

import ProjectsCard from "./projects_card";
import { motion } from "framer-motion";

type FeaturedProject = {
  title: string;
  description: string;
  image: string;
  url: string;
  github_link: string;
  tools: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "/project1.png",
    url: "https://project1.com",
    github_link: "https://github.com/project1",
    tools: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "/project2.png",
    url: "https://project2.com",
    github_link: "https://github.com/project2",
    tools: ["Next.js", "JavaScript", "Bootstrap"],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="flex justify-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="mt-24 mx-6 md:w-[800px] lg:w-[1000px]  "
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1 },
            },
          }}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="flex items-center gap-3 mt-24"
        >
          <div>
            <h2 className="font-sans text-xl font-bold">
              <span className="font-mono font-medium text-secondary">
                02.&nbsp;
              </span>
              Some Things I&apos;ve Built
            </h2>
          </div>
          <hr className="grow border-secondary "></hr>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 1 },
            },
          }}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="my-10 "
        >
          <ProjectsCard className=""></ProjectsCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
