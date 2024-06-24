import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/ProfileInfo'
import { ResumeButton } from './Components/ResumeButton'
import { RecentPosts } from './Components/RecentPosts'
import { FeaturedWorks } from './Components/FeaturedWorks'
import { Footer } from './Components/Footer'


function App() {
    return (
        <>
        <Header />
        <ResumeButton/>
        <RecentPosts />
        <FeaturedWorks />
        <Footer />
        </>
    )
}

export default App;
