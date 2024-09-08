import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavMenu from '../components/NavMenu.jsx';
import axios from 'axios';
import '../index.css';

function Homepage() {
    const [dateTime, setDateTime] = useState(new Date());
    const [journalEntry, setJournalEntry] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [user, setUser] = useState(null);
    const [recommendedArticles, setRecommendedArticles] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }

        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        const savedEntry = localStorage.getItem(selectedDate);
        if (savedEntry) {
            setJournalEntry(savedEntry);
        }

        fetchRecommendedArticles();

        return () => clearInterval(timer);
    }, [selectedDate]);

    const fetchRecommendedArticles = async () => {
        try {
            console.log('Fetching articles');
            const url = '/api/articles/recommendations';
            console.log('Fetching articles from:', url);
            const response = await axios.get(url);
            console.log('Response status:', response.status);
            console.log('Response data:', response.data);
            if (Array.isArray(response.data) && response.data.length > 0) {
                setRecommendedArticles(response.data);
                console.log('Articles set:', response.data);
            } else {
                console.error('Unexpected response format or empty array:', response.data);
                setRecommendedArticles([]);
            }
        } catch (error) {
            console.error('Error fetching article recommendations:', error);
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
            }
            setRecommendedArticles([]);
        }
    };

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
        localStorage.setItem(selectedDate, journalEntry);
        alert('Journal saved successfully!');
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const savedEntry = localStorage.getItem(date);
        setJournalEntry(savedEntry || '');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='mainViewBody relative pb-20'>
            <NavMenu />
            <div className="text-left p-4">
                <h2 className="text-xl">
                    {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' })}
                </h2>
                {user && <p className="text-lg">Welcome back, {user.username}!</p>}
            </div>
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
                    {recommendedArticles && recommendedArticles.length > 0 ? (
                        <Slider {...settings} className='my-3'>
                            {recommendedArticles.map((article, index) => (
                                <div key={index} className="p-4 flex flex-col items-center">
                                    <img src="/600x600_placeholder.png" alt={article.title} className="w-full h-48 object-cover mx-auto" />
                                    <h3 className="text-lg text-center font-semibold mt-2">{article.title}</h3>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500">Read Article</a>
                                </div>
                            ))}
                        </Slider>
                 ) : (
            <p>Articles loading, please wait...</p>
        )}
    </div>
</div>
        </div>
    );
}

export default Homepage;