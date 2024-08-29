import React from 'react';
import { Link } from 'react-router-dom';

function JournalLog() {
    const getAllJournalEntries = () => {
        const entries = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                entries.push({ date: key, entry: localStorage.getItem(key) });
            }
        }
        return entries;
    };

    return (
        <div className="p-4">
            <Link to="/homepage" className="text-blue-500 underline">Back to Homepage</Link>
            <h2 className="text-xl font-bold mb-4">Past Journal Entries</h2>
            <ul>
                {getAllJournalEntries().map((entry, index) => (
                    <li key={index} className="mb-4">
                        <strong>{entry.date}</strong>
                        <p>{entry.entry}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JournalLog;
