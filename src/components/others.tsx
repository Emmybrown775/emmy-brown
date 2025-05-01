"use client";
import { ExternalLink, Folder } from "@deemlol/next-icons";
import CustomButton from "./button";
import { motion } from "framer-motion";

// Define the Project type
type Project = {
  title: string;
  description: string;
  technologies: string;
  link?: string; // Optional external link
};

export default function OtherProjects() {
  // Sample project data
  const projects: Project[] = [
    {
      title: "Integrating Algolia Search with Wordpress Multisite",
      description:
        "Building a custom multisite compatible Wordpress plugin to build global search with Algolia",
      technologies: "Algolia Wordpress PHP",
    },
    {
      title: "Machine Learning Image Recognition",
      description:
        "Built a neural network to classify images of animals with 98% accuracy",
      technologies: "Python TensorFlow PyTorch",
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Developed a cross-platform shopping app with real-time inventory updates",
      technologies: "React Native Firebase Stripe",
    },
    {
      title: "Smart Home IoT Dashboard",
      description:
        "Created a central control system for managing all smart home devices",
      technologies: "React Node.js MQTT",
    },
    {
      title: "Blockchain Voting System",
      description:
        "Designed a secure, transparent voting platform using blockchain technology",
      technologies: "Solidity Ethereum Web3.js",
    },
    {
      title: "Augmented Reality Museum Guide",
      description:
        "Developed an AR app that provides information about exhibits when scanning them",
      technologies: "Unity ARKit ARCore",
    },
    {
      title: "Financial Data Visualization",
      description:
        "Created interactive charts for complex financial data analysis",
      technologies: "D3.js TypeScript GraphQL",
    },
    {
      title: "Real-time Collaboration Tool",
      description:
        "Built a platform for teams to work simultaneously on documents and designs",
      technologies: "WebSockets Node.js MongoDB",
    },
  ];

  // Define how many projects per row based on screen size
  const getProjectsPerRow = (): number => {
    // For mobile (default)
    let projectsPerRow = 1;

    // Check if window exists (client-side only)
    if (typeof window !== "undefined") {
      // For medium screens (tablets)
      if (window.innerWidth >= 768) {
        projectsPerRow = 2;
      }
      // For large screens (desktops)
      if (window.innerWidth >= 1024) {
        projectsPerRow = 3;
      }
    }

    return projectsPerRow;
  };

  // Group projects into rows
  const groupProjectsIntoRows = (projects: Project[]): Project[][] => {
    const projectsPerRow = getProjectsPerRow();
    const rows = [];

    for (let i = 0; i < projects.length; i += projectsPerRow) {
      rows.push(projects.slice(i, i + projectsPerRow));
    }

    return rows;
  };

  const projectRows = groupProjectsIntoRows(projects);

  return (
    <div className="flex justify-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-8 pt-24 md:w-[800px] lg:w-[1000px]"
      >
        <div className="text-center">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 1 },
              },
            }}
            className="text-header font-sans font-bold text-lg"
          >
            Other Noteworthy Projects
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 1 },
              },
            }}
            className="text-sm font-mono text-secondary"
          >
            Looking for more?
          </motion.p>
        </div>

        <div className="pt-12">
          {projectRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1, // Small stagger within row
                    delayChildren: rowIndex * 0.3, // Delay between rows
                  },
                },
              }}
              className="grid grid-cols-12 gap-6 mb-6"
            >
              {row.map((project, columnIndex) => (
                <motion.div
                  key={`project-${rowIndex}-${columnIndex}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="px-6 bg-primary-light col-span-12 md:col-span-6 lg:col-span-4 py-7 rounded"
                >
                  <div className="flex justify-between items-center pb-8">
                    <Folder className="text-secondary" size={35} />
                    <ExternalLink size={20} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-sans font-bold text-header">
                      {project.title}
                    </h3>
                    <p className="font-sans">{project.description}</p>
                    <p className="font-mono font-thin text-sm">
                      {project.technologies}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="pt-16">
          <CustomButton
            className="flex justify-center"
            size={2}
            text="Show More"
          ></CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
