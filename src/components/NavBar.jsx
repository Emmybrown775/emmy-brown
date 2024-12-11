import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="w-lvw flex flex-col  ">
        <div className="flex items-center justify-between md:justify-normal text-text-colour text-base border-b-2  border-line-colour">
          <div className="box-border lg:px-8 md:px-3 px-3 py-4 border-r-2 border-line-colour md:w-2/12">
            <h4 className="">emmy-brown</h4>
          </div>

          <div className="hidden md:flex flex-grow md:justify-between">
            <div className="flex">
              <Link
                to={"/"}
                className="box-border px-8 py-4 hover:text-text-white "
              >
                _hello
              </Link>
              <Link
                to={"/about"}
                className="box-border px-8 py-4 border-l-2 border-line-colour  hover:text-text-white "
              >
                _about-me
              </Link>
              <Link
                to={"/projects"}
                className="box-border px-8 py-4 border-x-2 border-line-colour hover:text-text-white"
              >
                _projects
              </Link>
            </div>

            <div className="flex">
              <Link
                to={"/contact"}
                className="box-border px-8 py-4 border-l-2 border-line-colour hover:text-text-white "
              >
                _contact_me
              </Link>
            </div>
          </div>

          <div className="md:hidden px-4">
            <button
              className={`w-5  flex flex-col gap-y-1 cursor-pointer `}
              onClick={() => {
                setDropdownOpen(!isDropdownOpen);
              }}
            >
              <motion.div
                animate={{
                  rotate: isDropdownOpen ? 45 : 0,
                  translateY: isDropdownOpen ? 0 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-[2px] bg-text-colour origin-left"
              />

              <motion.div
                animate={{
                  opacity: isDropdownOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-[2px] bg-text-colour"
              />

              <motion.div
                animate={{
                  rotate: isDropdownOpen ? -45 : 0,
                  translateY: isDropdownOpen ? 0 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-[2px] bg-text-colour origin-left"
              />
            </button>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="flex-1 bg-black">
            <div className="md:hidden  text-text-white absolute z-10  w-full bg-main">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                className="bg-main"
                animate={{
                  opacity: isDropdownOpen ? 1 : 0,
                  y: isDropdownOpen ? 0 : -10,
                }}
              >
                <div className="">
                  <Link to={"/"}>
                    <h4 className="box-border px-8 py-4 border-b-2 border-line-colour">
                      _hello
                    </h4>
                  </Link>

                  <Link to={"/about"}>
                    <h4 className="box-border px-8 py-4 border-b-2 border-line-colour">
                      _about-me
                    </h4>
                  </Link>

                  <Link to={"/projects"}>
                    <h4 className="box-border px-8 py-4 border-b-2 border-line-colour">
                      _projects
                    </h4>
                  </Link>
                </div>

                <div className="">
                  <Link to={"/contact"}>
                  <h4 className="box-border px-8 py-4 border-b-2 border-line-colour">
                    _contact_me
                  </h4>
                  </Link>
                  
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
