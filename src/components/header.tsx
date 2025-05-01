"use client";

import { useState } from "react";
import CustomButton from "./button";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:px-14 px-5 py-5 flex items-center justify-between">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-mono text-text font-bold text-xl"
      >
        emmyCodes775
      </motion.h1>
      <motion.div
        className="hidden md:flex items-center gap-5 "
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-sm hover:text-secondary transition-colors duration-200"
        >
          <span className="text-secondary">01.&nbsp;</span>About
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-sm hover:text-secondary transition-colors duration-200"
        >
          <span className="text-secondary">02.&nbsp;</span>Experience
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-sm hover:text-secondary transition-colors duration-200"
        >
          <span className="text-secondary">03.&nbsp;</span>Work
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-sm hover:text-secondary transition-colors duration-200"
        >
          <span className="text-secondary">04.&nbsp;</span>Contact
        </motion.a>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <CustomButton size={1} text="Resume" />
        </motion.div>
      </motion.div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden space-y-1 z-10"
      >
        <div
          className={`h-1 w-8 bg-secondary transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-[405deg] translate-y-2" : "-translate-y"} `}
        ></div>
        <div
          className={`h-1 w-8 bg-secondary transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`h-1 w-8 bg-secondary transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-[405deg] -translate-y-2" : "translate-y"}`}
        ></div>
      </div>

      <div
        className={`lg:hidden absolute right-0 top-0 text-center pt-11  h-lvh w-2/3 bg-primary-light transorm  transition-all duration-300 ease-in-out ${!isOpen ? "right-full" : "block right-0"}`}
      >
        <div className="items-center space-y-5 text-text ">
          <a className="font-mono block text-sm hover:text-secondary transition-colors duration-200">
            <span className="text-secondary">01.</span>
            <br></br>About
          </a>
          <a className="font-mono block text-sm hover:text-secondary transition-colors duration-200">
            <span className="text-secondary">02.</span>
            <br></br>Experience
          </a>
          <a className="font-mono block text-sm hover:text-secondary transition-colors duration-200">
            <span className="text-secondary">03.</span>
            <br></br>Work
          </a>
          <a className="font-mono block text-sm hover:text-secondary transition-colors duration-200">
            <span className="text-secondary">04.</span>
            <br></br>Contact
          </a>
          <CustomButton size={1} text="Resume" />
        </div>
      </div>
    </div>
  );
}
