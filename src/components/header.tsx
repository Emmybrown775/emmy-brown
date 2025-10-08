"use client";

import { useState, useEffect } from "react";
import CustomButton from "./button";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`md:px-14 px-5 py-5 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-background transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <motion.a
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-mono text-text font-bold text-xl hover:text-secondary transition-colors duration-150"
        href="#intro"
      >
        emmyCodes775
      </motion.a>
      <motion.div
        className="hidden md:flex items-center gap-5"
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
          href="#about"
        >
          <span className="text-secondary">01. </span>About
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-sm hover:text-secondary transition-colors duration-200"
          href="#projects"
        >
          <span className="text-secondary">02. </span>Work
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          href="#contact"
          className="font-mono text-sm hover:text-secondary transition-colors duration-200"
        >
          <span className="text-secondary">03. </span>Contact
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
          className={`h-1 w-8 bg-secondary transform transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-[405deg] translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-8 bg-secondary transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-8 bg-secondary transform transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-[405deg] -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <div
        className={`lg:hidden absolute right-0 top-0 text-center pt-11 h-screen w-2/3 bg-primary-light transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="items-center space-y-5 text-text">
          <a
            href="#about"
            className="font-mono block text-sm hover:text-secondary transition-colors duration-200"
          >
            <span className="text-secondary">01.</span>
            <br />
            About
          </a>
          <a
            href="#projects"
            className="font-mono block text-sm hover:text-secondary transition-colors duration-200"
          >
            <span className="text-secondary">02.</span>
            <br />
            Work
          </a>
          <a
            href="#contact"
            className="font-mono block text-sm hover:text-secondary transition-colors duration-200"
          >
            <span className="text-secondary">03.</span>
            <br />
            Contact
          </a>
          <CustomButton
            size={1}
            className="flex justify-center"
            text="Github"
            onClick={() => {
              window.open("https://github.com/Emmybrown775");
            }}
          />
        </div>
      </div>
    </div>
  );
}
