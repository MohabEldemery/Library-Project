import React, { useEffect } from 'react'
import '../src/css/Home.css'
import axios from 'axios'
const Home = ( ) => {
   
    return (
        <div className='hero'> 
            <div className='hero-content'>
                <h1 className='hero-text'>University Library</h1>
                <p className='hero-description'>Browse Library Books</p>
            </div>
            <div className='hero-image'></div>
        </div>
    )
}

export default Home;
