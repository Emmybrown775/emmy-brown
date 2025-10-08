"use client";
import { ExternalLink, Folder } from "@deemlol/next-icons";
import CustomButton from "./button";
import { motion } from "framer-motion";
import Link from "next/link";

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
      title: "Trust Button",
      description:
        "A MicroSui-based IoT button that signs and sends transactions directly to the Sui blockchain without a backend. Demonstrates simple on-chain interactions via ESP32.",
      technologies: "ESP32, MicroSui, Sui Blockchain, Arduino",
    },
    {
      title: "NFC Medical Records",
      description:
        "A hospital record management system where patients use NFC cards to securely store and retrieve medical data. Uses Arduino and blockchain integration for privacy.",
      technologies: "Arduino, Flask, NFC, Blockchain",
      link: "https://github.com/Emmybrown775/mediVault_v2",
    },

    {
      title: "Offline Learning Platform",
      description:
        "An online/offline learning platform for areas without smartphones or reliable internet. Accessible via two-way SMS or USSD codes.",
      technologies: "Flask, AfricasTalking, SQLite, USSD, SMS",
      link: "https://github.com/Emmybrown775/ourForum",
    },
    {
      title: "Voice Feedback Coach",
      description:
        "A voice analysis app that helps users practice public speaking. Records voice notes and gives feedback on clarity, pronunciation, and pacing.",
      technologies: "Flask, Google Speech API, React, Web Audio API",
    },
    {
      title: "Power Detector (ESP32-S2 Mini)",
      description:
        "A cost-effective IoT device that helped me check if i had power at home incase i was not around.",
      technologies: "ESP32-S2 Mini, Relay, AC Sensor, Arduino",
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
                  className=" px-6 bg-primary-light group  transition-all duration-300 hover:-translate-y-2 col-span-12 md:col-span-6 lg:col-span-4 py-7 rounded"
                >
                  <div className="flex justify-between items-center pb-8">
                    <Folder className="text-secondary" size={35} />
                    {project.link ? (
                      <Link href={project.link}>
                        <ExternalLink
                          className="hover:text-secondary"
                          size={20}
                        />
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg set group-hover:text-secondary transition-all duration-150 font-sans font-bold text-header">
                      {project.title}
                    </h3>
                    <p className="font-sans">{project.description}</p>
                    <p className="font-mono  font-thin text-sm">
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
            onClick={() => {
              window.open("https://github.com/Emmybrown775");
            }}
          ></CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
