import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import stand from "../assets/standard.png"; 
import hard from "../assets/hard.png";   

export default function ChooseAdventure() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = async (difficulty) => {
    setSelected(difficulty);

    const user = auth.currentUser;
    if (!user) return alert("Please log in again!");

    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      await updateDoc(ref, { difficulty, completed: [], unlocked: ["1"] });
    } else {
      await setDoc(ref, { difficulty, completed: [], unlocked: ["1"] });
    }

    setTimeout(() => {
      navigate("/dashboard");
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-minecraft mb-6 drop-shadow-[2px_2px_#3d3d3d]">
          Choose Your Adventure
        </h1>
        <p className="text-gray-300 mb-10 font-mono">
          Select your path, adventurer. Will you take the calm road or face chaos?
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          <div
            onClick={() => handleSelect("moderate")}
            className={`cursor-pointer w-64 h-64 flex flex-col justify-center items-center border-4 rounded-lg transition-all ${
              selected === "moderate"
                ? "border-green-500 scale-105"
                : "border-gray-700 hover:scale-105"
            }`}
            style={{
              backgroundImage: `url(${stand})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-xl mb-2">🌿 Moderate Mode</h2>
            <p className="text-sm text-gray-200">
              Balanced quests for relaxed play.
            </p>
          </div>

          <div
            onClick={() => handleSelect("hardcore")}
            className={`cursor-pointer w-64 h-64 flex flex-col justify-center items-center border-4 rounded-lg transition-all ${
              selected === "hardcore"
                ? "border-red-500 scale-105"
                : "border-gray-700 hover:scale-105"
            }`}
            style={{
              backgroundImage: `url(${hard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-xl mb-2">🔥 Hardcore Mode</h2>
            <p className="text-sm text-gray-200">
              Tough quests for true survivors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

