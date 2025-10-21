import React from "react";
import QuestCard from "./QuestCard";

export default function QuestList({ quests, unlocked, completed, onComplete }) {
  const visibleQuests = quests.filter((q) => unlocked.includes(q.id));

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {visibleQuests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
          completed={completed.includes(quest.id)}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}
