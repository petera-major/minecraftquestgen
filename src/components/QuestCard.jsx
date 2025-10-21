import React from "react";

export default function QuestCard({ quest, completed, onComplete }) {
  return (
    <div
      className={`p-4 rounded-lg border-4 ${
        completed ? "border-green-600 bg-green-800/60" : "border-yellow-600 bg-green-900/60"
      } transition-all hover:scale-105`}
    >
      <h3 className="text-lg font-bold mb-2">{quest.title}</h3>
      <p className="text-sm mb-4 text-gray-200">{quest.description}</p>
      {!completed && (
        <button
          onClick={() => onComplete(quest.id)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded text-white font-minecraft"
        >
          Complete
        </button>
      )}
      {completed && <p className="text-green-400">✅ Completed</p>}
    </div>
  );
}
