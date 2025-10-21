import React from "react";
import bgImage from "../assets/min.png";
import dirtBlock from "../assets/dirt.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white font-minecraft"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl mb-6">QuestCrafter</h1>
      <p className="mb-8 text-lg">Forge your Minecraft adventures!</p>

      <Link to="/login" className="group relative inline-block">
        <div className="relative">
          <img
            src={dirtBlock}
            alt="Dirt Block"
            className="w-32 h-32 mx-auto transition-transform duration-200 group-hover:scale-110"
          />
            <span className="absolute inset-0 flex items-center justify-center font-minecraft text-lg text-black drop-shadow-[1px_1px_#fff]">
              Get Started
            </span>
          </div>
        </Link>
        <p className="relative z-10 mt-16 text-sm text-gray-400 font-mono">
        Built by Petera Major • Inspired by Minecraft </p>
      </div>
  );
}
    
