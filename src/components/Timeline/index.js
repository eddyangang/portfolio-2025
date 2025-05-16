import TimelineItems from '../timelineItems/index';
export default function Timeline() {
    const projects = [
        {
            title: 'AI Web Scraper Application',
            summary:
                'Created a fullstack web application designed to mimic user actions and find text on the webpage to scrape. Actions are followed using a flow model. Built an option to allow users with an OpenAI api key to extract data using their AI model. Buits using Typescript, React, NextJS, Postgres, Clerk, and Tailwind',
            image_path: './img/aiscraper.png',
            image_icon: './img/cd-icon-picture.svg',
            github_url: 'https://github.com/eddyangang/ai-scraper',
            deployed_url: 'https://ai-scraper-murex.vercel.app/',
            date: '2025-05-01 07:00:00',
        },
        {
            title: 'Twitter Clone',
            summary:
                'Created a Twitter Clone (X) using NextJS, React, Typescript, Postgres. Users can create post that can be viewd by all followers. Post can be liked or comment. User can have followers or follow others. ',
            image_path: './img/twitter-clone.png',
            image_icon: './img/cd-icon-picture.svg',
            github_url: 'https://github.com/eddyangang/twitter-clone',
            deployed_url: 'https://twitter-clone-kappa-six-30.vercel.app/',
            date: '2025-04-01 07:00:00',
        },
        {
            title: 'Dignifi Landing Page',
            summary:
                'Created the mobile and web landing page for a start-up company using HTML, CSS, JS, and React.',
            image_path: './img/dignifi.png',
            image_icon: './img/cd-icon-picture.svg',
            github_url: 'https://github.com/eddyangang/dignifi-landing',
            deployed_url: 'https://dignifi-landing.netlify.app/',
            date: '2024-12-01 07:00:00',
        },
        {
            title: 'Diabetes Tester',
            summary:
                'A web application using Python Flask backend and Streamlit frontend. This application uses machine learning and to predict the likelyhood of someone having diabetes. Additional information is also presented, like the data used to train the model, and using the charts provided correlations can be made between diabetes and biological characteristics (such as more pregnancies correlate with a higher chance of developing/having diabetes).',
            image_path: './img/diabetester.gif',
            image_icon: './img/cd-icon-movie.svg',
            github_url: 'https://github.com/eddyangang/ML_Diabetes',
            deployed_url: 'https://diabetester.herokuapp.com/',
            date: '2019-09-01 07:00:00',
        },
        {
            title: 'Quizzly',
            summary:
                'A full-stack web application intended to gamify studying where friends can play a real-time studying game and communicate through a chat. This application utilizes socket.io to create a game server such that every client in the same room can share the same view and the host as the ability to add/delete/edit flashcards to play the game.',
            image_path: './img/quizzly.gif',
            image_icon: './img/cd-icon-movie.svg',
            github_url: 'https://github.com/eddyangang/Quizzly',
            deployed_url: 'https://enigmatic-springs-12174.herokuapp.com/',
            date: '2019-09-01 07:00:00',
        },
        {
            title: 'Weather App',
            summary:
                'A mobile responsive weather application allowing users to search for cities and obtain weather forecast using three different HTTP request from OpenWeatherMap API.',
            image_path: './img/weatherApp.gif',
            image_icon: './img/cd-icon-movie.svg',
            github_url: 'https://github.com/eddyangang/weather-station',
            deployed_url: 'https://eddyangang.github.io/weather-station/',
            date: '2019-08-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },

        {
            title: 'Crazyflie 2.0 Drone',
            summary:
                'Incorporated a cascaded feedback controller to allow a crazyflie quadcopter to hover at steady-state. Developed vertical, horizontal, and altitude estimators using prediction and correction model to reduce noise from measurements. Developed a mathematical model of the mixer matrix to determine PWM outputs of each motor for given commands.',
            image_path: './img/drone.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2019-10-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
        {
            title: 'Micromouse',
            summary:
                'Designed and built a micromouse vehicle. Programmed  PID controllers on an arduino nano to allow the vehicle to adjust for deviations when cruising straight or turning. Used a PID controller to allow the vehicle to follow a wall. Used Flood-fill algorithm to find best path within a maze.',
            image_path: './img/mouse2.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2019-09-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
        {
            title: 'X-Ray Rotation Bed',
            summary:
                'Designed the state machine architecture of a motion controller for a seven axis tomography system on LabView, integrated an intuitive UI for controlling each axis, and established serial communication via ethernet to the motion controller. Kept daily progress with a research journal.',
            image_path: './img/rotationbed.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2019-06-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
        {
            title: 'iDentical Intern',
            summary:
                'Manufactured teeth implants by 3D scanning teeth, developing CAD models of teeth implants, and using subtractive manufacturing techniques to produce titanium teeth replica with millimeter tolerance. Performed mechanical bench testing of retention features on teeth implants.',
            image_path: './img/pullout.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2019-11-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
        {
            title: 'Kiwibot Intern',
            summary:
                'Kiwibot is a startup food delivery service that focuses on delivering food (or any physical items) in a cost effective way, while leaving no carbon footprint. As a inter, I assisted in designing the chassis system of the next generation of Kiwibots by using four motors to allow stationary rotation. I also helped debug, troubleshoot, repair and maintain KiwiBots and Kiwi campus\u2019s hardware.',
            image_path: './img/kiwi.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2019-07-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
        {
            title: 'HoverBoard',
            summary:
                'Designed a real-time, multitasking model of hovercraft using three directional quadcopter fans, and one lift fan on Solidworks. Established the state machine architecture and an intuitive GUI that allows for mouse actions and directional buttons on the keyboard to control hovercraft.',
            image_path: './img/hover.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2019-05-01 07:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
        {
            title: '2D Printer',
            summary:
                'Built a real-time 2D printer by developing a model on Solidworks and 3D printing components to build a prototype. Established serial communication using PSOC series micro-controller and used LabView to track coordinates of the mouse to then translate controls for each motor.',
            image_path: './img/2dprinter.jpg',
            image_icon: './img/cd-icon-picture.svg',
            github_url: '',
            deployed_url: '',
            date: '2018-12-01 08:00:00',
            createdAt: '2020-08-05 09:34:04',
            updatedAt: '2020-08-05 09:34:04',
        },
    ];
    return (
        <section className='cd-timeline js-cd-timeline'>
            <div className='container max-width-lg cd-timeline__container'>
                {projects.map((project, i) => (
                    <TimelineItems props={{ ...project, i }} key={i} />
                ))}
            </div>
        </section>
    );
}
