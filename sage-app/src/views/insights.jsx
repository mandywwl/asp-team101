import React, { useState, useEffect } from 'react';
import NavMenu from '../components/NavMenu.jsx';
import '../index.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'; // Importing recharts for pie chart

function Insights() {
    const [moodHistory, setMoodHistory] = useState([]);
    const [journalHistory, setJournalHistory] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [insight, setInsight] = useState('');
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const loadHistory = () => {
            // Load mood history
            const moodEntries = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('mood_')) {
                    moodEntries.push({ date: key.split('_')[1], ...JSON.parse(localStorage.getItem(key)) });
                }
            }
            setMoodHistory(moodEntries);

            // Load journal history
            const journalEntries = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('journal_')) {
                    journalEntries.push({ date: key.split('_')[1], entry: localStorage.getItem(key) });
                }
            }
            setJournalHistory(journalEntries);

            // Load chat history
            const chatEntries = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('chat_')) {
                    chatEntries.push({ date: key.split('_')[1], message: localStorage.getItem(key) });
                }
            }
            setChatHistory(chatEntries);
        };

        loadHistory();
    }, []);

    useEffect(() => {
        const analyzeData = () => {
            const moodTrends = moodHistory.reduce((acc, entry) => {
                const date = new Date(entry.date);
                const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
                if (!acc[monthYear]) acc[monthYear] = { totalMood: 0, count: 0 };
                acc[monthYear].totalMood += entry.moodLevel;
                acc[monthYear].count += 1;
                return acc;
            }, {});

            let insightMessage = 'Here is what we found about your mental health:';
            setInsight(insightMessage);
        };

        analyzeData();
    }, [moodHistory, journalHistory, chatHistory]);

    useEffect(() => {
        const suggestResources = () => {
            const suggestedResources = [
                { id: 1, title: "Understanding Anxiety", link: "/resources/anxiety" },
                { id: 2, title: "Coping Strategies for Depression", link: "/resources/depression" },
                { id: 3, title: "Mindfulness and Stress Management", link: "/resources/stress" }
            ];
            setResources(suggestedResources);
        };

        suggestResources();
    }, []);

    // Sample data for pie chart
    const moodData = [
        { name: 'Happy', value: moodHistory.filter(entry => entry.moodLevel > 66).length },
        { name: 'Neutral', value: moodHistory.filter(entry => entry.moodLevel >= 33 && entry.moodLevel <= 66).length },
        { name: 'Unhappy', value: moodHistory.filter(entry => entry.moodLevel < 33).length },
    ];

    return (
        <div className="mainViewBody relative">
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="insights-container p-6 mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-center mb-6">Mental Health Insights</h2>

                {/* Insight Summary */}
                <div className="insight-summary bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-semibold mb-4">Summary</h3>
                    <p>{insight}</p>
                </div>

                {/* Mood Distribution Pie Chart */}
                <div className="mood-distribution bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-semibold mb-4">Mood Distribution</h3>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={moodData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={120}
                            fill="#8884d8"
                            label
                        >
                            {moodData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#00C49F' : index === 1 ? '#FFBB28' : '#FF8042'} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                {/* Resource Suggestions */}
                <div className="resource-suggestions bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Recommended Resources</h3>
                    <ul className="list-disc pl-5">
                        {resources.map(resource => (
                            <li key={resource.id} className="mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-500" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M12 8v4.5l3 3M21 12.5a9 9 0 11-9-9 9 9 0 019 9z"></path></svg>
                                <a href={resource.link} className="text-teal-500 hover:underline">{resource.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Insights;