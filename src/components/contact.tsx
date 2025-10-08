"use client";
import CustomButton from "./button";
import { motion } from "framer-motion";

export default function Contact() {
  const handleEmail = () => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(
      "Hi, I’d like to discuss a new project with you.",
    );
    window.location.href = `mailto:emmycodes775@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <div id="contact" className="flex justify-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="mx-8 text-center my-40 lg:w-[600px]"
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
          className="space-y-5"
        >
          <h3 className="text-secondary text-sm font-mono">
            04. What&apos;s Next?
          </h3>
          <h2 className="text-2xl md:text-6xl font-bold font-sans text-header">
            Get In Touch
          </h2>
          <p className="font-sans text-text">
            As you can see, country hard and as you can see again, I am well
            eqipped to take whatevere you throw at me, so let&apos;s work
            together. Have a question? Want to chat?
          </p>
        </motion.div>
        <div className="pt-12">
          <CustomButton
            className="flex justify-center"
            size={2}
            text="Say Hello"
            onClick={handleEmail}
          />
        </div>
      </motion.div>
    </div>
  );
}
