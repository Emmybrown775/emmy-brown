import NavBar from "../components/NavBar";
import { BiArrowFromBottom } from "react-icons/bi";
import { React, useEffect, useState } from "react";
import Footer from "../components/Footer";

function Home() {
  const [food, setFood] = useState(10);

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-1 grid lg:grid-cols-2 grid-cols-1 items-center gap-32">
          <div className="lg:justify-self-end lg:pt-0 justify-self-center pt-24 px-6">
            <div>
              <div className="lg:hidden overflow-clip absolute  w-48 h-48 bg-text-green rounded-full blur-3xl opacity-50"></div>
              <div className=" lg:hidden absolute top-80 left-44 w-48 h-48 bg-text-blue rounded-full blur-3xl opacity-50"></div>
              <h3 className="text-lg text-text-white">Hi all. I am</h3>
              <h1 className="text-6xl text-text-white">Emmy Brown</h1>
              <h2 className="md:text-3xl text-xl text-text-blue">
                {">"} Full-Stack developer
              </h2>
            </div>

            <div className="lg:pt-20 pt-48">
              <h3 className="text-text-colour hidden lg:block">
                // complete the game to continue
              </h3>
              <h3 className="text-text-colour hidden lg:block">
                // you can also see it on my Github page
              </h3>
              <h3 className="text-text-colour lg:hidden block">
                // find my profile on Github:
              </h3>
              <h3 className="text-text-blue">
                const
                <span className="text-text-green"> githubLink </span>
                <span className="text-text-white">=</span>
                <span className="text-text-orange">
                  {" "}
                  <a href="https://github.com/Emmybrown775" target="_blank">"https://github.com/Emmybrown775"</a> 
                </span>
              </h3>
            </div>
          </div>

          <div className="relative min-w-3 justify-self-start">
            <div className="lg:block hidden overflow-clip absolute top-0 left-0 w-96 h-96 bg-text-green rounded-full blur-3xl opacity-50"></div>
            <div className="lg:block hidden absolute bottom-0 left-44 w-96 h-96 bg-text-blue rounded-full blur-3xl opacity-50"></div>

            <div className="relative hidden lg:block z-10 bg-main-green">
              <div className="h-[475px] bg w-[510px] text-center  px-8 py-9 border-2  rounded grid grid-cols-2 gap-6">
                <div className="flex h-full w-full justify-center items-end bg-main rounded-md">
                  <button className="px-3 py-2 mb-14 bg-main-orange rounded-md text-sm">
                    start-game
                  </button>
                </div>

                <div className="text-start">
                  <div className="bg-light-green bg-opacity-15 rounded-md p-3">
                    <h3 className="text-text-white text-sm">// use keyboard</h3>
                    <h3 className="text-text-white text-sm pb-4">
                      // arrows to play
                    </h3>

                    <div className="grid grid-cols-3 gap-1">
                      <div className="w-full h-7 bg-transparent rounded-md"></div>
                      <div className="w-full h-7 bg-black rounded-md"></div>
                      <div className="w-full h-7 bg-transparent rounded-md"></div>

                      <div className="w-full h-7 bg-black rounded-md"></div>
                      <div className="w-full h-7 bg-black rounded-md"></div>
                      <div className="w-full h-7 bg-black rounded-md"></div>
                    </div>
                  </div>
                  <div className="px-3 py-4">
                    <h3 className="text-text-white text-sm pb-4">
                      // food left
                    </h3>
                    <div className="grid grid-cols-5 gap-x-6 w-min">
                      {Array.from({ length: 10 }, (_, index) => (
                        <div className="flex w-5 h-5 rounded-full items-center justify-center bg-text-green bg-opacity-10">
                          <div className="flex items-center justify-center w-[14px] h-[14px] rounded-full bg-text-green bg-opacity-20">
                            <div className=" w-[8px] h-[8px] rounded-full bg-text-green "></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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

export default Home;
