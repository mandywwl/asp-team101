import React from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu from '../components/NavMenu.jsx';

import '../index.css';

function Homepage() {
    return (
        <div className=''>
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            {/* Your content goes here */}
        </div>
    );
}

export default Homepage;