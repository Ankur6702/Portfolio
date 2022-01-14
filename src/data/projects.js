import insta from '../images/Project Images/insta.png';
import codePlayer from '../images/Project Images/codeplayer.png';
import redis from '../images/Project Images/redis.png';
import orance from '../images/Project Images/orance.png';
import collegeWebsite from '../images/Project Images/CollegeWebsite.png';
import rps from '../images/Project Images/rps.png';

const projects = [
    {
        id: 1,
        category: 'Javascript',
        image: insta,
        link1: 'https://github.com/Ankur6702/Instagram-Clone',
        title: 'Instagram Clone',
        text: 'Tech Stacks: React, Firebase'
    },
    {
        id: 2,
        category: 'Javascript',
        image: codePlayer,
        link1: 'https://github.com/Ankur6702/Codeplayer-IT-Workshop',
        title: 'Code Player',
        text: 'Realtime HTML, CSS, JS Editor'
    },
    {
        id: 3,
        category: 'Redis',
        image: redis,
        link1: 'https://github.com/Ankur6702/Redis-practice',
        title: 'Task Manager',
        text: 'A simple task manager to manage your daily tasks.'
    },
    {
        id: 4,
        category: 'CSS',
        image: orance,
        link1: 'https://github.com/Ankur6702/Orance',
        title: 'Social Media UI',
        text: 'Created using HTML, CSS and JS.'
    },
    {
        id: 5,
        category: 'CSS',
        image: collegeWebsite,
        link1: 'https://github.com/Ankur6702/college-website',
        title: 'College Website UI',
        text: 'Designed using HTML and CSS.'
    },
    {
        id: 6,
        category: 'Javascript',
        image: rps,
        link1: 'https://github.com/Ankur6702/Rock-paper-scissors',
        title: 'Rock Papers Scissors',
        text: "Let's play Rock Paper Scissors"
    }
]

export default projects;