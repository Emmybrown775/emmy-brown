import { useState } from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { RiCheckboxFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import Footer from "../components/Footer";

function Projects() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [projectsHidden, setProjectsHidden] = useState(true);

  const [projectCategories, setProjectCategories] = useState([
    {
      id: "react",
      label: "React",
      checked: false,
      icon: <FaReact className="size-5 text-text-colour" />,
    },
    {
      id: "python",
      label: "Python",
      checked: false,
      icon: <FaPython className="size-5 text-text-colour" />,
    },
  ]);

  const toggleCheckbox = (id) => {
    setProjectCategories((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const togglePersonal = () => {
    if (projectsOpen) {
      setProjectsOpen(!projectsOpen);
    } else {
      setProjectsHidden(false);
      setProjectsOpen(true);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col  lg:overflow-hidden">
        <NavBar />
        <div className=" flex flex-grow  lg:overflow-hidden ">
          <div className="lg:flex hidden flex-col  w-2/12 flex-shrink-0 border-e-2 h-full border-line-colour">
            <div>
              <div className="flex items-center py-3 px-4 border-b-2 border-line-colour ">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: projectsOpen ? -90 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <IoMdArrowDropdown className="text-text-white w-4" />
                </motion.div>

                <button
                  onClick={togglePersonal}
                  className="text-text-white text-base pl-3"
                >
                  projects
                </button>
              </div>
              {!projectsHidden && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: projectsOpen ? 1 : 0,
                    y: projectsOpen ? 1 : -10,
                  }}
                  transition={{ duration: 0.1 }}
                  onAnimationComplete={() => {
                    if (!projectsOpen) setProjectsHidden(true);
                  }}
                  className="pb-7"
                >
                  <div className=" py-3 px-5">
                    {projectCategories.map((category, index) => (
                      <div
                        key={index}
                        onClick={() => toggleCheckbox(category.id)}
                        className="flex items-center pb-4"
                      >
                        {category.checked ? (
                          <RiCheckboxFill className="text-text-colour  size-5" />
                        ) : (
                          <RiCheckboxBlankFill className="text-text-colour  size-5" />
                        )}

                        <div className="flex items-center pl-6">
                          {category.icon}
                          <span className="text-text-white pl-3">
                            {category.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex-grow lg:overflow-hidden">
            <div className=" h-full flex flex-col">
              <h3 className="lg:hidden text-text-white py-5 px-7 col-span-12">
                _about-me
              </h3>

              <div className="flex flex-col lg:hidden flex-grow border-e-2  border-main">
                <div>
                  <div onClick={togglePersonal} className="flex items-center py-3 px-4 border-b-2 bg-line-colour border-line-colour ">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: projectsOpen ? -90 : 0,
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      <IoMdArrowDropdown className="text-text-white w-4" />
                    </motion.div>

                    <button
                      onClick={togglePersonal}
                      className="text-text-white text-base pl-3"
                    >
                      projects
                    </button>
                  </div>
                  {!projectsHidden && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: projectsOpen ? 1 : 0,
                        y: projectsOpen ? 1 : -10,
                      }}
                      transition={{ duration: 0.1 }}
                      onAnimationComplete={() => {
                        if (!projectsOpen) setProjectsHidden(true);
                      }}
                      className=""
                    >
                      <div className=" pt-3 px-5">
                        {projectCategories.map((category, index) => (
                          <div
                            key={index}
                            onClick={() => toggleCheckbox(category.id)}
                            className="flex items-center pb-4"
                          >
                            {category.checked ? (
                              <RiCheckboxFill className="text-text-colour  size-5" />
                            ) : (
                              <RiCheckboxBlankFill className="text-text-colour  size-5" />
                            )}

                            <div className="flex items-center pl-6">
                              {category.icon}
                              <span className="text-text-white pl-3">
                                {category.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className=" lg:block hidden border-b-2 border-line-colour">
                <div className=" py-3 w-max border-r-2 border-line-colour">
                  <h3 className="text-text-colour text-base px-3">projects</h3>
                </div>
              </div>


              <div className="flex-grow overflow-y-auto">
              <div className="grid lg:pt-28 pt-14 md:px-32 px-7 pb-9 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 overflow-auto">
                <div className="">
                  <h3 className="text-even-lighter-blue pb-4">
                    Project 1{" "}
                    <span className="text-text-colour">// _ui-animations</span>
                  </h3>
                  <div className="relative rounded-3xl border-line-colour border-2 overflow-hidden">
                    <div className="absolute bg-icon-blue right-4 top-5 p-1 rounded-sm">
                      <FaReact className="size-6 text-dark-blue" />
                    </div>
                    <img
                      className="w-full object-contain"
                      src="https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="px-8 py-6">
                      <h3 className="text-text-colour text-lg pb-5">
                        Duis aute irure dolor in velit esse cillum dolore.
                      </h3>
                      <button className="py-2 rounded-lg bg-ash-blue px-3 text-sm text-text-white">
                        view-project
                      </button>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-even-lighter-blue pb-4">
                    Project 1{" "}
                    <span className="text-text-colour">// _ui-animations</span>
                  </h3>
                  <div className="relative rounded-3xl border-line-colour border-2 overflow-hidden">
                    <div className="absolute bg-icon-blue right-4 top-5 p-1 rounded-sm">
                      <FaReact className="size-6 text-dark-blue" />
                    </div>
                    <img
                      className="w-full object-contain"
                      src="https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="px-8 py-6">
                      <h3 className="text-text-colour text-lg pb-5">
                        Duis aute irure dolor in velit esse cillum dolore.
                      </h3>
                      <button className="py-2 rounded-lg bg-ash-blue px-3 text-sm text-text-white">
                        view-project
                      </button>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-even-lighter-blue pb-4">
                    Project 1{" "}
                    <span className="text-text-colour">// _ui-animations</span>
                  </h3>
                  <div className="relative rounded-3xl border-line-colour border-2 overflow-hidden">
                    <div className="absolute bg-icon-blue right-4 top-5 p-1 rounded-sm">
                      <FaReact className="size-6 text-dark-blue" />
                    </div>
                    <img
                      className="w-full object-contain"
                      src="https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="px-8 py-6">
                      <h3 className="text-text-colour text-lg pb-5">
                        Duis aute irure dolor in velit esse cillum dolore.
                      </h3>
                      <button className="py-2 rounded-lg bg-ash-blue px-3 text-sm text-text-white">
                        view-project
                      </button>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-even-lighter-blue pb-4">
                    Project 1{" "}
                    <span className="text-text-colour">// _ui-animations</span>
                  </h3>
                  <div className="relative rounded-3xl border-line-colour border-2 overflow-hidden">
                    <div className="absolute bg-icon-blue right-4 top-5 p-1 rounded-sm">
                      <FaReact className="size-6 text-dark-blue" />
                    </div>
                    <img
                      className="w-full object-contain"
                      src="https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="px-8 py-6">
                      <h3 className="text-text-colour text-lg pb-5">
                        Duis aute irure dolor in velit esse cillum dolore.
                      </h3>
                      <button className="py-2 rounded-lg bg-ash-blue px-3 text-sm text-text-white">
                        view-project
                      </button>
                    </div>
                  </div>
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

export default Projects;
