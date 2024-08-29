import React, { useState, useEffect }from 'react';
import NavMenu from '../components/NavMenu.jsx';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";    // Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css";    // Slick Carousel CSS
import Slider from "react-slick";    // Slick Carousel

import '../index.css';

function Homepage() {
    const [dateTime, setDateTime] = useState(new Date());
    //const [affirmation, setAffirmation] = useState('');
    const [journalEntry, setJournalEntry] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [showLog, setShowLog] = useState(false);


    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

         // Load the journal entry for today on initial load
         const savedEntry = localStorage.getItem(selectedDate);
         if (savedEntry) {
             setJournalEntry(savedEntry);
         }

        return () => clearInterval(timer);
    }, [selectedDate]);

    // useEffect(() => {
    //     fetch('/api/affirmation')
    //         .then(response => response.json())
    //         .then(data => setAffirmation(data.affirmation))
    //         .catch(error => console.error('Error fetching affirmation:', error));
    // }, []);

    const getWeekDays = () => {
        const weekDays = [];
        const currentDate = new Date();
        const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();
        for (let i = 0; i < 7; i++) {
            const day = new Date(currentDate.setDate(firstDayOfWeek + i));
            weekDays.push({
                day: day.toLocaleDateString('en-US', { weekday: 'short' }),
                date: day.getDate(),
                fullDate: day.toDateString()
            });
        }
        return weekDays;
    };

    const isToday = (date) => {
        const today = new Date().toDateString();
        return date === today;
    };

    const handleJournalChange = (event) => {
        setJournalEntry(event.target.value);
    };

    const handleJournalSave = () => {
        // Save to local storage using selected date as the key
        localStorage.setItem(selectedDate, journalEntry); //@suizzzzz Change to save to the server
        alert('Journal saved successfully!');
    };
    const handleDateClick = (date) => {
        setSelectedDate(date);
        const savedEntry = localStorage.getItem(date);
        setJournalEntry(savedEntry || '');
    };
    // journal log
    const toggleLog = () => {
        setShowLog(!showLog);
    };

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

    //////////////////////////////////////////
    //@suizzzzz This should be replaced with actual data from the server
    const dummyInsights = [
        { id: 1, title: "Article 1", imageUrl: "path/to/article1.jpg", link: "/article/1" },
        { id: 2, title: "Meditation 1", imageUrl: "path/to/meditation1.jpg", link: "/meditation/1" },
        { id: 3, title: "Article 2", imageUrl: "path/to/article2.jpg", link: "/article/2" },
        { id: 4, title: "Meditation 2", imageUrl: "path/to/meditation2.jpg", link: "/meditation/2" },
        { id: 5, title: "Article 3", imageUrl: "path/to/article3.jpg", link: "/article/3" },
        { id: 6, title: "Meditation 3", imageUrl: "path/to/meditation3.jpg", link: "/meditation/3" },
    ];

    // Insights & Articles Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,  // Arrows enabled by default
        responsive: [
            {
                breakpoint: 1024, // Below 1024px screen width
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false  // Disable arrows on smaller screens
                }
            },
            {
                breakpoint: 600, // Below 600px screen width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,  // Disable dots on smaller screens
                    arrows: false
                }
            }
        ]

    };


    return (
        <div className='mainViewBody relative'>
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="text-left p-4">
                <h2 className="text-xl">
                {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' })}
                </h2>
            </div>
            {/* Tab in the top right corner. Replace with icon */}
            <Link 
                to="/journal-log"
                className="bg-teal-500 text-white py-2 px-4 rounded float-right m-4"
            >
                Journal Log
            </Link>
            

            <div className="calendar-view p-4 max-w-md mx-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            {getWeekDays().map((day, index) => (
                                <th key={index} className={`py-2 px-4 border-b border-gray-200 ${index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''} ${index === 6 ? 'rounded-tr-lg rounded-br-lg' : ''}`}>{day.day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            {getWeekDays().map((day, index) => (
                                <td key={index} 
                                    className={`py-2 px-4 cursor-pointer 
                                                ${isToday(day.fullDate) ? 'bg-teal-200 rounded-full' : ''}
                                                hover:bg-blue-200 hover:rounded-full 
                                                w-10 h-10 items-center justify-center`}
                                    onClick={() => handleDateClick(day.fullDate)}
                                >
                                    <div className="">
                                        {day.date}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="affirmation-view p-4">
                <p className="text-3xl text-center italic">
                    {/* {affirmation} */}
                    debug: affirmation
                </p>
            </div>
            <div className="journal-view p-4 my-3">
                <h1 className="text-center text-2xl"> Daily Journal </h1>
                <textarea
                    className="w-full h-32 p-2 my-2 border border-gray-300 rounded"
                    placeholder="Write your journal entry here..."
                    value={journalEntry}
                    onChange={handleJournalChange}
                ></textarea>
                <button
                    className="mt-2 bg-teal-500 text-white py-2 px-4 rounded"
                    onClick={handleJournalSave}
                >
                    Save Entry
                </button>
            </div>
            <div className="articles-view p-4">
                <p className="text-xl">Daily Recommended Insights & Articles</p>
                <div className='carousel-container max-w-full mx-auto px-4' >
                    <Slider {...settings} className='my-3'>
                    {dummyInsights.map(insight => (
                        <div key={insight.id} className="p-4 flex flex-col items-center">
                            <img src={insight.imageUrl} alt={insight.title} className="w-full h-48 object-cover mx-auto" />
                            <h3 className="text-lg text-center font-semibold mt-2">{insight.title}</h3>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>

        </div>
        
    );
}

export default Homepage;
