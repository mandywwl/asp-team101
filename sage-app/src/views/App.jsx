// Landing page for the SAGE app. Provides an overview of the app and its features.
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

function App() {
    return (
        <div>
            <header>
                <h1>Welcome to SAGE</h1>
                <p>Your Mental Health Companion</p>
            </header>
            <main>
                <section>
                    <h2>About SAGE</h2>
                    <p>SAGE is a companion app designed to support your mental well-being. It provides tools and resources to help you manage stress, track your mood, and improve your overall mental health.</p>
                </section>
                <section>
                    <h2>Features</h2>
                    <ul>
                        <li>AI Chatbot</li>
                        <li>Mood tracking and analysis</li>
                        <li>Guided meditation and relaxation exercises</li>
                        <li>Journaling and goal setting</li>
                        <li>Community support and resources</li>
                    </ul>
                </section>
                <section>
                    <h2>Get Started</h2>
                    <p>Register with SAGE now and start your journey towards better mental health.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2022 SAGE. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;