// Root page of the SAGE app. Provides an overview of the app and its features.
import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header id="WelcomeBanner" className="p-6">
        <div className="mb-4">
            <img src="/sage-logo.png" alt="SAGE logo" className="w-24 h-24 hidden md:block" />
            <h1 className="text-teal-700 text-4xl font-bold">Welcome to SAGE</h1>
            <p className="text-teal-700 text-xl mt-2">Your Mental Health Companion</p>
        </div>
        <div className="md:flex md:justify-end space-x-4">
          <button
            id="LoginButton"
            className="text-white px-4 py-2 rounded drop-shadow-sm"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            id="RegisterButton"
            className="text-white px-4 py-2 rounded drop-shadow-sm"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </header>
      <main className="flex-grow p-6 text-teal-950">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About SAGE</h2>
          <p className="text-lg">
            SAGE is a companion app designed to support your mental well-being.
            It provides tools and resources to help you manage stress, track
            your mood, and improve your overall mental health.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">AI Chatbot</li>
            <li className="text-lg">Mood tracking and analysis</li>
            <li className="text-lg">
              Guided meditation and relaxation exercises
            </li>
            <li className="text-lg">Journaling and goal setting</li>
            <li className="text-lg">Community support and resources</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg">
            Register with SAGE now and start your journey towards better mental
            health.
          </p>
        </section>
      </main>
      <footer className="bg-teal-700 text-white p-4 text-center">
        <p>&copy; 2024 SAGE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
