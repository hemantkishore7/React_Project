import React from "react";
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Node from "../assets/node.png"
import react from "../assets/react.png"
import Mongo from "../assets/mongo.png"
import Git from "../assets/github.png"
import Javascript from "../assets/javascript.png"


function Skills() {
  return (
    <div name="Skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-flow-cols-4 gap-4 text-center py-8">

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="Html-icon"></img>
            <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="Html-icon"></img>
            <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="Html-icon"></img>
            <p className="my-4">JAVASCRIPT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="Html-icon"></img>
            <p className="my-4">REACT</p>
        </div>  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Html-icon"></img>
            <p className="my-4">NODEJS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Html-icon"></img>
            <p className="my-4">MONGO DB</p>
        </div>
     

        </div>
      </div>
    </div>
  );
}

export default Skills;
