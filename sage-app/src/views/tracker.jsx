import React, { useState } from 'react';
import NavMenu from '../components/NavMenu.jsx';
import '../index.css';

function Tracker() {
    const [mood, setMood] = useState('');
    const [moodHistory, setMoodHistory] = useState([]);
    const [moodLevel, setMoodLevel] = useState(50); // Default mood level (middle of the bar)

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    const handleMoodLevelChange = (event) => {
        setMoodLevel(event.target.value);
    };

    const handleMoodSubmit = () => {
        if (mood) {
            const newEntry = { 
                date: new Date().toLocaleDateString(), 
                mood, 
                moodLevel 
            };
            setMoodHistory([...moodHistory, newEntry]);
            setMood(''); // Clear the input field
        }
    };

    const getMoodColor = (level) => {
        if (level < 33) return 'bg-red-500';
        if (level < 66) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className="mainViewBody relative">
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="tracker-container p-6 mx-auto max-w-xl">
                <h2 className="text-2xl font-bold text-center mb-4">Mood Tracker</h2>

                {/* Mood Bar */}
                <div className="mood-bar-container mb-4">
                    <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-red-500">0%</span>
                        <span className="text-yellow-500">50%</span>
                        <span className="text-green-500">100%</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={moodLevel} 
                        onChange={handleMoodLevelChange} 
                        className="w-full h-4 rounded-lg cursor-pointer" 
                        style={{ 
                            background: `linear-gradient(to right, red, yellow, green)` 
                        }} 
                    />
                    <div className="flex justify-between text-sm font-medium mt-1">
                        <span className="text-red-500">Unhappy</span>
                        <span className="text-yellow-500">Neutral</span>
                        <span className="text-green-500">Happy</span>
                    </div>
                </div>
                
                <div className="mood-input-container mb-4">
                    <label className="block text-lg mb-2">How are you feeling today?</label>
                    <textarea 
                        value={mood} 
                        onChange={handleMoodChange} 
                        placeholder="Enter your mood" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        rows="6"  // Adjust the height by increasing the number of rows
                    />
                    <button 
                        onClick={handleMoodSubmit} 
                        className="mt-2 bg-teal-500 text-white py-2 px-4 rounded w-full"
                    >
                        Submit Mood
                    </button>
                </div>

                <div className="mood-history-container mt-6">
                    <h3 className="text-xl font-semibold mb-3">Mood History</h3>
                    {moodHistory.length === 0 ? (
                        <p className="text-gray-500">No moods recorded yet.</p>
                    ) : (
                        <ul className="list-disc pl-5">
                            {moodHistory.map((entry, index) => (
                                <li key={index} className="mb-2 flex items-center">
                                    <div 
                                        className={`w-4 h-4 mr-2 rounded ${getMoodColor(entry.moodLevel)}`}
                                    ></div>
                                    <span className="font-medium">{entry.date}: </span>
                                    {entry.mood}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tracker;