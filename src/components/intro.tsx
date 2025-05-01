"use client";

import CustomButton from "./button";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="flex justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 1, staggerChildren: 0.4 } },
        }}
        className="space-y-2 mt-24 mb-60 mx-6 md:mb-80 md:mt-36 md:w-[800px] lg:w-[1000px]  "
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-secondary "
        >
          Hi, my name is.
        </motion.p>
        <div className="space-y-1">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="font-sans font-bold text-4xl md:text-6xl text-header"
          >
            Emmy Brown.
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="font-sans font-bold text-text text-3xl md:text-5xl"
          >
            I build things for ... everyone.
          </motion.h1>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <p className="pt-3 font-sans text-text lg:text-lg lg:me-[40%]">
            I am a full-stack developer specializing in building exceptional
            digital experiences, as well as Embedded systems / Robotics
            Engineer, specializing in building exceptional physical experiences
            as well. I am focused on building accessible, human-centered
            software and hardware devices.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="pt-4 "
        >
          <CustomButton
            className="-z-100"
            size={2}
            text="Check out my tiktok"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
