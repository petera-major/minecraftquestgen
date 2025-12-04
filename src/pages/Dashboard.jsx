import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { quests } from "../data/quests";
import { questLayout } from "../data/layout";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ReactFlow, { MiniMap, Controls, Background, Handle } from "reactflow";

function QuestNode({ data }) {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  function flattenQuests(data) {
    let result = [];
  
    if (data.intro) result.push(...data.intro);
  
    if (data.paths) {
      Object.values(data.paths).forEach(path => {
        result.push(...path);
      });
    }
  
    if (data.secrets) {
      Object.values(data.secrets).forEach(section => {
        if (Array.isArray(section)) result.push(...section);
      });
    }
  
    return result;
  }  

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={data.unlocked ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
      className={`px-4 py-2 rounded-lg border-4 text-center text-xs md:text-sm font-minecraft
      ${
        data.completed
          ? "bg-green-700 border-green-500 shadow-[0_0_12px_#22c55e]"
          : data.unlocked
          ? "bg-yellow-700 border-yellow-500 shadow-[0_0_12px_#facc15]"
          : "bg-gray-800 border-gray-600 opacity-60"
      }`}
    >
      <Handle type="target" position="top" />
      <p>{data.title}</p>
      {data.unlocked && !data.completed && (
        <button
          onClick={data.onComplete}
          className="mt-2 bg-emerald-600 hover:bg-emerald-700 px-2 py-1 rounded text-white"
        >
          Complete
        </button>
      )}
      <Handle type="source" position="bottom" />
    </motion.div>
  );
}

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [difficulty, setDifficulty] = useState("moderate");
  const [completed, setCompleted] = useState([]);
  const [unlocked, setUnlocked] = useState(["1"]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
        return;
      }
      setUser(currentUser);
      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setCompleted(data.completed || []);
        setUnlocked(data.unlocked || ["1"]);
        setDifficulty(data.difficulty || "moderate");
      } else {
        await setDoc(ref, { completed: [], unlocked: ["1"], difficulty: "moderate" });
      }
    });
    return () => unsub();
  }, []);

  const handleComplete = async (id) => {
    const questSet = flattenQuests(quests[difficulty]);
    const quest = questSet.find((q) => q.id === id);
    const newCompleted = [...completed, id];
    const newUnlocked = [...unlocked];

    quest.next.forEach((nextId) => {
      if (!newUnlocked.includes(nextId)) newUnlocked.push(nextId);
    });

    setCompleted(newCompleted);
    setUnlocked(newUnlocked);
    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, { completed: newCompleted, unlocked: newUnlocked });
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const handleReturnAdventure = () => {
    window.location.href = "/choose";
  };

  const questSet = quests[difficulty];
  const nodes = useMemo(() => {
    return questSet.map((q, i) => ({
      id: q.id,
      type: "questNode",
      data: {
        title: q.title,
        completed: completed.includes(q.id),
        unlocked: unlocked.includes(q.id),
        onComplete: () => handleComplete(q.id),
      },
      position: questLayout[difficulty][q.id] || { x: i * 200, y: i * 100 },
    }));
  }, [questSet, completed, unlocked]);

  const edges = useMemo(() => {
    const edgesArray = [];
    questSet.forEach((q) =>
      q.next.forEach((nextId) =>
        edgesArray.push({
          id: `${q.id}-${nextId}`,
          source: q.id,
          target: nextId,
          animated: unlocked.includes(nextId),
          style: {
            stroke: unlocked.includes(nextId)
              ? "#22c55e"
              : "rgba(255,255,255,0.3)",
            strokeWidth: 2,
          },
        })
      )
    );
    return edgesArray;
  }, [questSet, unlocked]);

  return (
    <div className="h-screen bg-black bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full">
        <div className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-sm border-b border-green-900">
          <h1 className="text-2xl font-minecraft tracking-wide">
            Quest Tree – {difficulty.toUpperCase()}
          </h1>
          <div className="flex gap-3">
            <button
              onClick={handleReturnAdventure}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded font-bold text-sm"
            >
              Return to Adventure
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Log Out
            </button>
          </div>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ questNode: QuestNode }}
          fitView
          zoomOnScroll
          panOnScroll
          className="bg-transparent"
        >
          <MiniMap
            nodeColor={(n) =>
              n.data.completed
                ? "#16a34a"
                : n.data.unlocked
                ? "#facc15"
                : "#4b5563"
            }
          />
          <Controls />
          <Background color="#555" gap={18} />
        </ReactFlow>
      </div>
    </div>
  );
}
