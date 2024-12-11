import { useState } from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiFolder3Fill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMailSharp, IoClose } from "react-icons/io5";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import Footer from "../components/Footer";

function About() {
  const [personalOpen, setPersonalOpen] = useState(false);
  const [personalHidden, setPersonalHidden] = useState(true);

  const [contactsOpen, setContactsOpen] = useState(false);
  const [contactsHidden, setContactsHidden] = useState(true);

  const items = [
    "About me",
    "I have 5 years of experience in web ",
    "development lorem ipsum dolor sit amet,",
    "consectetur adipiscing elit, sed do eiusmod",
    "tempor incididunt ut labore et dolore",
    "magna aliqua. Ut enim ad minim veniam,",
    "quis nostrud exercitation ullamco laboris",
    "nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in",
    "",
    "Duis aute irure dolor in reprehenderit in",
    "voluptate velit esse cillum dolore eu fugiat",
    "nulla pariatur. Excepteur sint occaecat",
    "officia deserunt mollit anim id est laborum.",
  ];

  const codeSnippets = [
    {
      userName: "emmybrown775",
      created: "5 months ago",
      code: [
        "function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {",
        "  const value: T = parseModel(chunk._response, chunk._value);",
        "  const initializedChunk: InitializedChunk<T> = (chunk: any);",
        "  initializedChunk._status = INITIALIZED;",
        "  initializedChunk._value = value;",
        "  return value;",
        "}",
      ],
      details:
        "My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.",
      stars: "3",
    },

    {
      userName: "emmybrown775",
      created: "5 months ago",
      code: [
        "function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {",
        "  const value: T = parseModel(chunk._response, chunk._value);",
        "  const initializedChunk: InitializedChunk<T> = (chunk: any);",
        "  initializedChunk._status = INITIALIZED;",
        "  initializedChunk._value = value;",
        "  return value;",
        "}",
      ],
      details:
        "My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.",
      stars: "3",
    },
  ];

  const togglePersonal = () => {
    if (personalOpen) {
      setPersonalOpen(!personalOpen);
    } else {
      setPersonalHidden(false);
      setPersonalOpen(true);
    }
  };

  const toggleContacts = () => {
    if (contactsOpen) {
      setContactsOpen(!contactsOpen);
    } else {
      setContactsHidden(false);
      setContactsOpen(true);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className=" flex flex-grow items-start justify-start">
          <div className="lg:flex hidden flex-col  w-2/12 flex-shrink-0 border-e-2 h-full border-line-colour">
            <div onClick={togglePersonal}>
              <div className="flex items-center py-3 px-4 border-b-2 border-line-colour ">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: personalOpen ? -90 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <IoMdArrowDropdown className="text-text-white w-4" />
                </motion.div>

                <button className="text-text-white text-base pl-3">
                  personal-info
                </button>
              </div>
              {!personalHidden && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: personalOpen ? 1 : 0,
                    y: personalOpen ? 1 : -10,
                  }}
                  transition={{ duration: 0.1 }}
                  onAnimationComplete={() => {
                    if (!personalOpen) setPersonalHidden(true);
                  }}
                  className="pb-7"
                >
                  <div className="pt-4 px-4">
                    <div className="flex items-center pb-2">
                      <MdKeyboardArrowRight
                        size={20}
                        className=" text-text-colour mr-3"
                      />
                      <RiFolder3Fill className="text-text-orange w-4" />
                      <h3 className="pl-2 text-text-white">bio</h3>
                    </div>

                    <div className="flex items-center pb-2">
                      <MdKeyboardArrowRight
                        size={20}
                        className=" text-text-colour mr-3"
                      />
                      <RiFolder3Fill className="text-text-green w-4" />
                      <h3 className="pl-2 text-text-colour">interests</h3>
                    </div>

                    <div className="flex items-center pb-2">
                      <MdKeyboardArrowRight
                        size={20}
                        className=" text-text-colour mr-3"
                      />
                      <RiFolder3Fill className="text-light-blue w-4" />
                      <h3 className="pl-2 text-text-colour">education</h3>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div onClick={toggleContacts}>
              <div
                className={`flex items-center py-3 px-4  border-b-2 border-line-colour ${
                  personalOpen ? "border-t-2" : ""
                }`}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: contactsOpen ? -90 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <IoMdArrowDropdown className="text-text-white w-4" />
                </motion.div>
                <button className="text-text-white text-base pl-3">
                  contacts
                </button>
              </div>
              {!contactsHidden && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: contactsOpen ? 1 : 0,
                    y: contactsOpen ? 1 : -10,
                  }}
                  transition={{ duration: 0.1 }}
                  onAnimationComplete={() => {
                    if (!contactsOpen) setContactsHidden(true);
                  }}
                >
                  <div className="pt-4 px-4">
                    <div className="flex items-center pb-2">
                      <IoMailSharp className="text-text-colour w-4" />
                      <h3 className="pl-2 overflow-hidden text-text-colour">
                        emmycodes775@gmail.com
                      </h3>
                    </div>

                    <div className="flex items-center pb-2">
                      <FaPhoneAlt className="text-text-colour w-4" />
                      <h3 className="pl-2 text-text-colour">+2347010891180</h3>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex-grow grid h-full grid-cols-12">
            <h3 className="lg:hidden text-text-white py-5 px-7 col-span-12" >
              _about-me
            </h3>
            <div className="lg:hidden col-span-12">
              <div className="flex lg:hidden flex-col   flex-shrink-0  h-full ">
                <div onClick={togglePersonal} className="">
                  <div className="flex items-center py-3 px-4 border-b-2 bg-line-colour border-main ">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: personalOpen ? -90 : 0,
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      <IoMdArrowDropdown className="text-text-white w-4" />
                    </motion.div>

                    <button className="text-text-white text-base pl-3">
                      personal-info
                    </button>
                  </div>
                  {!personalHidden && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: personalOpen ? 1 : 0,
                        y: personalOpen ? 1 : -10,
                      }}
                      transition={{ duration: 0.1 }}
                      onAnimationComplete={() => {
                        if (!personalOpen) setPersonalHidden(true);
                      }}
                      className="pb-7"
                    >
                      <div className="pt-4 px-4">
                        <div className="flex items-center pb-2">
                          <MdKeyboardArrowRight
                            size={20}
                            className=" text-text-colour mr-3"
                          />
                          <RiFolder3Fill className="text-text-orange w-4" />
                          <h3 className="pl-2 text-text-white">bio</h3>
                        </div>

                        <div className="flex items-center pb-2">
                          <MdKeyboardArrowRight
                            size={20}
                            className=" text-text-colour mr-3"
                          />
                          <RiFolder3Fill className="text-text-green w-4" />
                          <h3 className="pl-2 text-text-colour">interests</h3>
                        </div>

                        <div className="flex items-center pb-2">
                          <MdKeyboardArrowRight
                            size={20}
                            className=" text-text-colour mr-3"
                          />
                          <RiFolder3Fill className="text-light-blue w-4" />
                          <h3 className="pl-2 text-text-colour">education</h3>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div onClick={toggleContacts}>
                  <div
                    className={`flex items-center py-3 px-4 lg:bg-inherit bg-line-colour border-b-2 border-main`}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: contactsOpen ? -90 : 0,
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      <IoMdArrowDropdown className="text-text-white w-4" />
                    </motion.div>
                    <button className="text-text-white text-base pl-3">
                      contacts
                    </button>
                  </div>
                  {!contactsHidden && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: contactsOpen ? 1 : 0,
                        y: contactsOpen ? 1 : -10,
                      }}
                      transition={{ duration: 0.1 }}
                      onAnimationComplete={() => {
                        if (!contactsOpen) setContactsHidden(true);
                      }}
                    >
                      <div className="pt-4 px-4">
                        <div className="flex items-center pb-2">
                          <IoMailSharp className="tex-text-colour w-4" />
                          <h3 className="pl-2  text-text-colour">
                            emmycodes775@gmail.com
                          </h3>
                        </div>

                        <div className="flex items-center pb-2">
                          <FaPhoneAlt className="text-text-colour w-4" />
                          <h3 className="pl-2 text-text-colour">
                            +2347010891180
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className=" lg:block hidden border-b-2 border-line-colour">
                <div className=" py-3 w-max border-r-2 border-line-colour">
                  <h3 className="text-text-colour text-base px-3">
                    personal-info
                  </h3>
                </div>
              </div>

              <div className="px-9 py-4">
                <ol className="list-decimal hidden md:block list-outside space-y-2">
                  <li className="text-text-colour text-lg pl-10 ml-10">/**</li>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="text-text-colour text-lg pl-10 ml-10"
                    >
                      * {item}
                    </li>
                  ))}
                  <li className="text-text-colour text-lg pl-10 ml-10">*/</li>
                </ol>

                <p className="md:hidden text-text-white py-3">// personal-info <span className="text-text-colour">/ bio</span> </p>
                <p className="md:hidden text-text-colour">
                  
                  {items.concat()}
                </p>
              </div>
            </div>

            <div className="border-s-2 flex-grow border-line-colour lg:col-span-6 col-span-12">
              <div className="py-6  border-b-2 border-line-colour"></div>

              <div className="px-10 py-4">
                <h3 className="pb-14 text-lg text-text-colour">
                  // Code snippet showcase
                </h3>

                <div>
                  <div className="">
                    {codeSnippets.map((code, index) => {
                      const [detailsOpen, setDetailsOpen] = useState(false);
                      const [detailsHidden, setDetailsHidden] = useState(true);

                      const toggleDetails = () => {
                        if (detailsOpen) {
                          setDetailsOpen(!detailsOpen);
                        } else {
                          setDetailsHidden(false);
                          setDetailsOpen(true);
                        }
                      };
                      return (
                        <div className="pb-8" key={index}>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <img
                                className="size-9"
                                src="src/assets/user.png"
                                alt="yelp"
                              />
                              <div className="pl-3">
                                <h3 className="text-sm text-even-lighter-blue">
                                  @{code["userName"]}
                                </h3>
                                <h3 className="text-xs text-text-colour">
                                  created {code["created"]}
                                </h3>
                              </div>
                            </div>

                            <div className="flex">
                              <button onClick={toggleDetails}>
                                <div className="flex ">
                                  <TbMessageCircle className="text-text-colour" />
                                  <h3 className="text-sm pl-1 text-text-colour">
                                    details
                                  </h3>
                                </div>
                              </button>

                              <button className="lg-block hidden">
                                <div className="flex  pl-4">
                                  <FaStar className="text-text-colour" />
                                  <h3 className="text-sm pl-1 text-text-colour">
                                    3 stars
                                  </h3>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="mt-3 px-7 py-5 bg-dark-blue border-2 border-line-colour rounded-2xl">
                            {code["code"].map((line, line_index) => {
                              const words = line.split(" ");
                              return (
                                <h3 key={line_index} className="{}">
                                  {"\u00A0".repeat(
                                    line.length - line.trimStart().length
                                  )}
                                  {words.map((word, word_index) => {
                                    if (
                                      word === "function" ||
                                      word === "const" ||
                                      word === "return"
                                    ) {
                                      return (
                                        <span
                                          key={word_index}
                                          className="text-sm text-text-orange"
                                        >
                                          {word}{" "}
                                        </span>
                                      );
                                    } else if (word.includes(".")) {
                                      const index = word.indexOf(".");

                                      return (
                                        <span
                                          key={word_index}
                                          className="text-sm text-text-colour"
                                        >
                                          {word.slice(0, index)}
                                          <span className="text-even-lighter-blue">
                                            {word.slice(index)}{" "}
                                          </span>
                                        </span>
                                      );
                                    } else if (
                                      word.charAt(0) ===
                                        word.charAt(0).toUpperCase() &&
                                      word.charAt(0) != "("
                                    ) {
                                      return (
                                        <span
                                          key={word_index}
                                          className="text-sm text-main-orange"
                                        >
                                          {word}{" "}
                                        </span>
                                      );
                                    } else {
                                      return (
                                        <span
                                          key={word_index}
                                          className="text-sm text-text-colour"
                                        >
                                          {word}{" "}
                                        </span>
                                      );
                                    }
                                  })}
                                </h3>
                              );
                            })}
                          </div>

                          <div>
                            {!detailsHidden && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{
                                  opacity: detailsOpen ? 1 : 0,
                                  y: detailsOpen ? 1 : -10,
                                }}
                                transition={{ duration: 0.1 }}
                                onAnimationComplete={() => {
                                  if (!detailsOpen) setDetailsHidden(true);
                                }}
                              >
                                <hr className="mt-4 border-line-colour" />

                                <div className="flex items-center pt-4 gap-28 text-text-colour text-sm">
                                  <h3>{code["details"]}</h3>
                                  <button onClick={toggleDetails}>
                                    <IoClose className="size-5" />
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default About;
