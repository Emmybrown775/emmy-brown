import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMailSharp, IoClose } from "react-icons/io5";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Footer from "../components/Footer";

function Contact() {
  const [findMeOpen, setFindMeOpen] = useState(false);
  const [findMeHidden, setFindMeHidden] = useState(true);

  const [contactsOpen, setContactsOpen] = useState(false);
  const [contactsHidden, setContactsHidden] = useState(true);

  const [formDetails, setFormdetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleFindMe = () => {
    if (findMeOpen) {
      setFindMeOpen(!findMeOpen);
    } else {
      setFindMeHidden(false);
      setFindMeOpen(true);
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
          <div className="lg:flex flex-col hidden   w-2/12 flex-shrink-0 border-e-2 h-full border-line-colour">
            <div className="" onClick={toggleContacts}>
              <div
                className={`flex items-center py-3 px-4  border-b-2 border-line-colour `}
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
                      <h3 className="pl-2 text-text-colour">
                        emmycodes775@gmail.com
                      </h3>
                    </div>

                    <div className="flex items-center pb-4">
                      <FaPhoneAlt className="text-text-colour w-4" />
                      <h3 className="pl-2 text-text-colour">+2347010891180</h3>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div onClick={toggleFindMe}>
              <div
                className={`flex items-center py-3 px-4  border-b-2 border-line-colour ${
                  contactsOpen ? "border-t-2" : ""
                } `}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: findMeOpen ? -90 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <IoMdArrowDropdown className="text-text-white w-4" />
                </motion.div>
                <button className="text-text-white text-base pl-3">
                  find-me-also-in
                </button>
              </div>
              {!findMeHidden && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: findMeOpen ? 1 : 0,
                    y: findMeOpen ? 1 : -10,
                  }}
                  transition={{ duration: 0.1 }}
                  onAnimationComplete={() => {
                    if (!contactsOpen) setContactsHidden(true);
                  }}
                >
                  <div className="pt-4 px-4">
                    <div className="flex items-center pb-2">
                      <FiExternalLink className="text-text-colour size-5" />
                      <h3 className="pl-2 text-text-colour">
                        emmycodes775@gmail.com
                      </h3>
                    </div>

                    <div className="flex items-center pb-2">
                      <FiExternalLink className="text-text-colour size-5" />
                      <h3 className="pl-2 text-text-colour">+2347010891180</h3>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex-grow grid lg:h-full grid-cols-12">
          <h3 className="lg:hidden text-text-white py-5 px-7 col-span-12" >
              _contact_me
            </h3>
            <div className="col-span-12 flex-col lg:hidden   border-e-2  border-main">
              <div className="">
                <div
                  onClick={toggleContacts}
                  className={`flex items-center py-3 px-4 bg-line-colour  border-b-2 border-main`}
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
                        <h3 className="pl-2 text-text-colour">
                          emmycodes775@gmail.com
                        </h3>
                      </div>

                      <div className="flex items-center pb-4">
                        <FaPhoneAlt className="text-text-colour w-4" />
                        <h3 className="pl-2 text-text-colour">
                          +2347010891180
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div >
                <div
                  onClick={toggleFindMe}
                  className={`flex items-center py-3 px-4 bg-line-colour  border-b-2 border-line-colour ${
                    contactsOpen ? "border-t-2" : ""
                  } `}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: findMeOpen ? -90 : 0,
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <IoMdArrowDropdown className="text-text-white w-4" />
                  </motion.div>
                  <button className="text-text-white text-base pl-3">
                    find-me-also-in
                  </button>
                </div>
                {!findMeHidden&& (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: findMeOpen ? 1 : 0,
                      y: findMeOpen ? 1 : -10,
                    }}
                    transition={{ duration: 0.1 }}
                    onAnimationComplete={() => {
                      if (!findMeOpen) setFindMeHidden(true);
                    }}
                  >
                    <div className="pt-4 px-4">
                      <div className="flex items-center pb-2">
                        <FiExternalLink className="text-text-colour size-5" />
                        <h3 className="pl-2 text-text-colour">
                          emmycodes775@gmail.com
                        </h3>
                      </div>

                      <div className="flex items-center pb-2">
                        <FiExternalLink className="text-text-colour size-5" />
                        <h3 className="pl-2 text-text-colour">
                          +2347010891180
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className=" border-b-2 hidden lg:block border-line-colour">
                <div className=" py-3 w-max border-r-2 border-line-colour">
                  <h3 className="text-text-colour text-base px-3">
                    contact_me
                  </h3>
                </div>
              </div>

              <div className="lg:px-28 lg:pt-36 md:px-11 px-7 py-11">
                <form action="">
                  <div className="pb-6">
                    <label
                      className="block text-text-colour pb-2"
                      htmlFor="name"
                    >
                      _name:
                    </label>
                    <input
                      className="bg-dark-blue border-2 w-full border-line-colour text-base px-3 py-2 rounded-md text-text-colour focus:outline-none focus:border-text-colour focus:shadow-sm"
                      id="name"
                      name="name"
                      type="text"
                      value={formDetails.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="pb-6">
                    <label
                      className="block text-text-colour pb-2"
                      htmlFor="email"
                    >
                      _email:
                    </label>
                    <input
                      className="bg-dark-blue border-2 w-full border-line-colour text-base px-3 py-2 rounded-md text-text-colour focus:outline-none focus:border-text-colour focus:shadow-sm"
                      id="email"
                      name="email"
                      type="text"
                      value={formDetails.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="pb-6">
                    <label
                      className="block text-text-colour pb-2"
                      htmlFor="message"
                    >
                      _message:
                    </label>
                    <textarea
                      className="bg-dark-blue border-2 w-full min-h-36 border-line-colour text-base px-3 py-2 rounded-md text-text-colour focus:outline-none focus:border-text-colour focus:shadow-sm"
                      id="message"
                      name="message"
                      type="text"
                      value={formDetails.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="py-2 rounded-lg bg-ash-blue px-3 text-sm text-text-white">
                    submit-message
                  </button>
                </form>
              </div>
            </div>

            <div className="border-s-2 lg:block hidden overflow-clip border-line-colour col-span-6">
              <div className="py-6  border-b-2 border-line-colour"></div>

              <div className="px-10 py-28">
                <div className="px-9 py-4">
                  <ol className="break-all list-decimal list-outside space-y-2">
                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3 className="text-even-lighter-blue">
                        <span className="text-text-pink">const </span>button{" "}
                        <span className="text-text-pink">=</span> document
                        <span className="text-text-colour">.</span>querySelector
                        <span className="text-text-colour">(</span>
                        <span className="text-main-orange">'#sendBtn'</span>
                        <span className="text-text-colour">);</span>
                      </h3>
                    </li>
                    <li className="text-text-colour text-lg pl-10 ml-10"></li>
                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3 className="text-even-lighter-blue">
                        <span className="text-text-pink">const </span>message{" "}
                        <span className="text-text-pink">= </span>
                        <span className="text-text-colour">{`{`}</span>
                      </h3>
                    </li>
                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3 className="">
                        {"\u00A0"}
                        <span className="text-even-lighter-blue">
                          name
                        </span>:{" "}
                        <span className="text-main-orange">
                          "{formDetails.name}"
                        </span>
                        ,{" "}
                      </h3>
                    </li>
                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3>
                        {"\u00A0"}
                        <span className="text-even-lighter-blue">
                          email
                        </span>:{" "}
                        <span className="text-main-orange">
                          "{formDetails.email}"
                        </span>
                        ,{" "}
                      </h3>
                    </li>
                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3>
                        {"\u00A0"}
                        <span className="text-even-lighter-blue">
                          message
                        </span>:{" "}
                        <span className="text-main-orange">
                          "{formDetails.message}"
                        </span>
                        ,{" "}
                      </h3>
                    </li>
                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3>
                        {"\u00A0"}
                        <span className="text-even-lighter-blue">
                          date
                        </span>:{" "}
                        <span className="text-main-orange">
                          "{formattedDate}"
                        </span>
                        ,{" "}
                      </h3>
                    </li>

                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3>{`}`}</h3>
                    </li>

                    <li className="text-text-colour text-lg pl-10 ml-10"></li>

                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3 className="text-even-lighter-blue">
                        button<span className="text-text-colour">.</span>
                        addEventListener
                        <span className="text-text-colour">
                          (<span className="text-main-orange">'click'</span>, (){" "}
                          <span className="text-text-pink">{`=>`}</span>
                          {` {`}
                        </span>
                      </h3>
                    </li>

                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3 className="text-even-lighter-blue">
                        {"\u00A0"}form
                        <span className="text-text-colour">.</span>send
                        <span className="text-text-colour">(</span>message
                        <span className="text-text-colour">);</span>
                      </h3>
                    </li>

                    <li className="text-text-colour text-lg pl-10 ml-10">
                      <h3>{`})`}</h3>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
