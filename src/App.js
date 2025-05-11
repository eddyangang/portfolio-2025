import React from 'react';
import Jumbotron from './components/Jumbotron';
import Timeline from './components/Timeline';
import AboutMe from './components/AboutMe';
import Navbar from './components/myNavbar';
function App() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <AboutMe />
            <Timeline />
        </>
    );
}

export default App;
