import React, { useState } from 'react';
import NavMenu from '../components/NavMenu.jsx';
import '../index.css';

function Tracker() {
    const [mood, setMood] = useState('');
    const [moodHistory, setMoodHistory] = useState([]);

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    const handleMoodSubmit = () => {
        if (mood) {
            const newEntry = { date: new Date().toLocaleDateString(), mood };
            setMoodHistory([...moodHistory, newEntry]);
            setMood(''); // Clear the input field
        }
    };

    return (
        <div className="mainViewBody relative">
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="tracker-container p-6 mx-auto max-w-xl">
                <h2 className="text-2xl font-bold text-center mb-4">Mood Tracker</h2>
                
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
                                <li key={index} className="mb-2">
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