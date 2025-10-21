import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        completed: [],
        unlocked: ["1"],
        difficulty: "moderate",
      });

      setTimeout(() => {
        navigate("/choose");
      }, 2500);
    } catch (err) {
      setLoading(false);
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50"></div>

      {loading && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 z-50 text-center animate-fade-in">
          <p className="text-3xl font-minecraft text-green-400 mb-3">
            🌍 Generating World...
          </p>
          <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      )}

      <div className="relative z-10 bg-green-700 bg-contain bg-no-repeat bg-center w-80 p-10 rounded-lg shadow-lg border-4 border-green-900 text-center">
        <h2 className="text-2xl mb-6 drop-shadow-[2px_2px_#3d3d3d]">
          Register
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-green-900/80 border-2 border-green-700 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-green-900/80 border-2 border-green-700 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 rounded bg-green-900/80 border-2 border-green-700 focus:outline-none"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded transition-all font-bold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-300 hover:text-yellow-400 underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
