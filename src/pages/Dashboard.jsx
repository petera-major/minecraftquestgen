import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { quests } from "../data/quests";
import { questLayout } from "../data/layout";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ReactFlow, { MiniMap, Controls, Background, Handle } from "reactflow";
import "reactflow/dist/style.css";


// --------------------
// QUEST NODE COMPONENT
// --------------------
function QuestNode({ data }) {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={data.unlocked ? "visible" : "hidden"}
      transition={{ duration: 0.4 }}
      className={`px-4 py-2 rounded-lg border-4 max-w-[220px] text-center text-xs md:text-sm font-minecraft cursor-pointer
      ${
        data.completed
          ? "bg-green-700 border-green-500 shadow-[0_0_14px_#22c55e]"
          : data.unlocked
          ? "bg-yellow-600 border-yellow-400 shadow-[0_0_14px_#facc15]"
          : "bg-gray-700 border-gray-500 opacity-50"
      }`}
    >
      <Handle type="target" position="top" />
      <p className="font-bold">{data.title}</p>
      <p className="mt-1 text-gray-200 text-[10px]">{data.description}</p>

      {data.unlocked && !data.completed && (
        <button
          onClick={data.onComplete}
          className="mt-2 bg-emerald-600 hover:bg-emerald-700 px-2 py-1 rounded text-white text-xs"
        >
          Complete
        </button>
      )}
      <Handle type="source" position="bottom" />
    </motion.div>
  );
}


// --------------------
// DASHBOARD
// --------------------
export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [difficulty, setDifficulty] = useState("moderate");
  const [completed, setCompleted] = useState([]);
  const [unlocked, setUnlocked] = useState(["1"]);
  const [loading, setLoading] = useState(true);

  // --------------------
  // AUTH & USER DATA
  // --------------------
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
        setCompleted(Array.isArray(data.completed) ? data.completed : []);
        setUnlocked(Array.isArray(data.unlocked) ? data.unlocked : ["1"]);
        setDifficulty(data.difficulty || "moderate");
      } else {
        await setDoc(ref, {
          completed: [],
          unlocked: ["1"],
          difficulty: "moderate",
        });
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  // --------------------
  // QUEST DATA
  // --------------------
  const questSet = quests?.[difficulty?.toLowerCase()] || [];

  // --------------------
  // COMPLETE QUEST
  // --------------------
  const handleComplete = async (id) => {
    const quest = questSet.find((q) => q.id === id);
    if (!quest) return;

    const newCompleted = [...new Set([...completed, id])];
    let newUnlocked = [...unlocked];

    quest.next.forEach((nextId) => {
      if (!newUnlocked.includes(nextId)) newUnlocked.push(nextId);
    });

    setCompleted(newCompleted);
    setUnlocked(newUnlocked);

    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, { completed: newCompleted, unlocked: newUnlocked });
  };

  // --------------------
  // UI ACTIONS
  // --------------------
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const handleReturnAdventure = () => {
    window.location.href = "/choose";
  };

  // --------------------
  // NODES
  // --------------------
  const nodes = useMemo(() => {
    return questSet.map((q, i) => ({
      id: q.id,
      type: "questNode",
      data: {
        title: q.title,
        description: q.description,
        completed: completed.includes(q.id),
        unlocked: unlocked.includes(q.id),
        onComplete: () => handleComplete(q.id),
      },
      position: questLayout?.[difficulty]?.[q.id] || {
        x: 240 * (i % 5),
        y: 160 * Math.floor(i / 5),
      },
    }));
  }, [questSet, completed, unlocked, difficulty]);

  // --------------------
  // EDGES
  // --------------------
  const edges = useMemo(() => {
    let edgesArray = [];
    questSet.forEach((q) => {
      q.next.forEach((nextId) => {
        edgesArray.push({
          id: `${q.id}-${nextId}`,
          source: q.id,
          target: nextId,
          animated: unlocked.includes(nextId),
          style: {
            stroke: unlocked.includes(nextId)
              ? "#22c55e"
              : "rgba(255,255,255,0.2)",
            strokeWidth: 2,
          },
        });
      });
    });
    return edgesArray;
  }, [questSet, unlocked]);

  // --------------------
  // LOADING
  // --------------------
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading quests...
      </div>
    );
  }

  if (!Array.isArray(questSet) || questSet.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        No quests available. Check quest file.
      </div>
    );
  }

  // --------------------
  // RENDER
  // --------------------
  return (
    <div className="h-screen bg-black relative text-white">
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
          panOnScroll
          zoomOnScroll
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
          <Background color="#3f3f3f" gap={18} />
        </ReactFlow>
      </div>
    </div>
  );
}
