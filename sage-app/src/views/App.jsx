// Landing page for the SAGE app. Provides an overview of the app and its features.
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to SAGE</h1>
        <p className="text-xl mt-2">Your Mental Health Companion</p>
      </header>
      <main className="flex-grow p-6">
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
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2022 SAGE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
