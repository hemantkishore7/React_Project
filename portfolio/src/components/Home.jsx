import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hemant Kishore
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p></p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex item-center hover:bg-pink-600 hover:border-pink-600">
            About
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" /></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
