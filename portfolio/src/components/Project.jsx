import React from "react";
import bms from "../assets/BMS-clone.png";

function Project() {
  return (
    <div
      name="Project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Project
          </p>
          <p className="py-4">Check out my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${bms})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               Full Stack Appllication
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center my-3">BookMyShow - clone</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
