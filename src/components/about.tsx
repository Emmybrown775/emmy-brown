"use client";

import Image from "next/image";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="flex justify-center"
    >
      <div className="mx-6 md:w-[800px] lg:w-[1000px] md:flex">
        <div>
          <div className="flex items-center gap-3">
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
            >
              <h2 className="font-sans text-xl font-bold">
                <span className="font-mono font-medium text-secondary">
                  01.&nbsp;
                </span>
                About Me
              </h2>
            </motion.div>
            <hr className="grow border-secondary "></hr>
          </div>

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
          >
            <p className="pt-3 font-sans text-text lg:text-lg lg:me-16">
              Hey! I’m Emmy, a{" "}
              <span className="text-secondary">full-stack</span> developer and{" "}
              <span className="text-secondary">embedded systems engineer </span>
              who loves turning ideas into real, working tech—whether it’s a{" "}
              <span className="text-secondary">
                web app, a mobile-app, or a hardware project{" "}
              </span>{" "}
              with sensors and microcontrollers. I’m all about building
              practical solutions that make life easier, especially in areas
              like healthcare, education, and digital payments.
              <br></br>
              <br></br> Over the years, I’ve worked on everything from{" "}
              <span className="text-secondary">
                IoT-powered recycling devices to NFC-based healthcare
              </span>{" "}
              systems, and I’ve also built{" "}
              <span className="text-secondary">apps, bots, and APIs </span>for
              all kinds of use cases. I’ve been part of hackathons (and even won
              most!), taken on freelance projects, and I’m always exploring new
              tools and technologies to level up my skills.
              <br></br>
              <br></br> If it’s{" "}
              <span className="text-secondary">creative, impactful</span>, and
              techy—I’m in!
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
          }}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <div className="group">
            <div className="absolute z-10 w-[250px] border-2 border-secondary  h-[250px] transition-all duration-100  group-hover:translate-2 ">
              <Image className="invisible" src={profilePic} alt="me.png" />
            </div>
            <div className="relative z-10 transform -translate-2 transition-all duration-100 w-[250px]  h-[250px] group-hover:-translate-4">
              <Image src={profilePic} alt="me.png" />
              <div className="absolute inset-0 md:bg-secondary transition-all duration-100 opacity-65 mix-blend-normal group-hover:opacity-0"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
