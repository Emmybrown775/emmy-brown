"use client";

import ProjectsCard from "./projects_card";
import { motion } from "framer-motion";
import github from "../../public/github.png";
import portfolio from "../../public/images/portfolio.png";
import robotControl from "../../public/images/robot-control.png";
import step from "../../public/images/step.jpeg";
import { StaticImageData } from "next/image";

export type FeaturedProject = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  github_link: string;
  tools: string[];
};
export const featuredProjects: FeaturedProject[] = [
  {
    title: "My Portfolio",
    description:
      "A modern, responsive developer portfolio built with Next.js and TypeScript to showcase my projects, skills, and achievements.",
    image: portfolio,
    url: "https://emmy-brown.pxxl.pro",
    github_link: "https://github.com/Emmybrown775/emmy-brown",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "LED Control App",
    description:
      "A TypeScript web app that connects to my custom-built LED hardware, allowing real-time on/off control and brightness adjustment.",
    image: github,
    url: "",
    github_link: "https://github.com/Emmybrown775/my-led-control-app",
    tools: ["TypeScript", "Expo/React-Native", "C++", "ESP", "Arduino"],
  },
  {
    title: "SUI Robot Control",
    description:
      "A SUI smart contract with a web app allowing you control the robot i made anywhere in the world, via the SUI blockchain.",
    image: robotControl,
    url: "https://sui-robot-control.vercel.app",
    github_link: "https://github.com/Emmybrown775/sui_robot_control",
    tools: ["Move", "TypeScript", "SUI", "ZK-LOGIN"],
  },
  {
    title: "Step-to-Sign — Smart In-Shoe Wallet & 2FA Signer",
    description:
      "A compact in-shoe hardware wallet that performs offline Sui transaction signing using foot-gesture recognition as a low-friction 2FA mechanism. The system pairs an ESP32 signer with a mobile app to securely sign and broadcast transactions without exposing private keys.",
    image: step,
    url: "https://x.com/EmmyCodes775/status/1962200410493534653?t=QW9XnzbrqXr9clF9loK0RA&s=19", // e.g. demo video or hosted docs
    github_link: "https://github.com/Emmybrown775/step-to-sign-app",
    tools: ["ESP32", "React Native (Expo)", "Sui", "Arduino", "BLE", "C/C++"],
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
          {featuredProjects.map((project, index) => {
            if (index % 2 === 0) {
              return (
                <ProjectsCard
                  key={index}
                  fliped={true}
                  project={project}
                  className=""
                ></ProjectsCard>
              );
            } else {
              return (
                <ProjectsCard
                  key={index}
                  fliped={false}
                  project={project}
                  className=""
                ></ProjectsCard>
              );
            }
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
