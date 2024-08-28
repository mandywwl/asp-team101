import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu from '../components/NavMenu.jsx';

import '../index.css';

function Homepage() {
    const [dateTime, setDateTime] = useState(new Date());
    //const [affirmation, setAffirmation] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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

    return (
        <div>
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="text-left p-4">
                <h2 className="text-xl">
                {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' })}
                </h2>
            </div>
            <div className="calendar-view p-4">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            {getWeekDays().map((day, index) => (
                                <th key={index} className={`py-2 px-4 border-b border-gray-200 ${index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''} ${index === 6 ? 'rounded-tr-lg rounded-br-lg' : ''}`}>{day.day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {getWeekDays().map((day, index) => (
                                <td key={index} className={`py-2 px-4 ${isToday(day.fullDate) ? 'bg-teal-200 rounded-full w-10 h-10 flex items-center justify-center mx-auto my-3' : ''}`}>
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

        </div>
        
    );
}

export default Homepage;
