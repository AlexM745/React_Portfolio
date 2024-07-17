// this file will have all the information so that it is passed to files
// if i need to edit I can do that in one file
import { backend, react, web, frontend, financeTracker, retrobox, roadster, codingQuiz } from '../assets';





const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const skills = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "FrontEnd Developer",
        icon: frontend,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Developer",
        icon: react,
    },
];


const projects = [
    {
        name: "Roadster",
        description:
            "Web-based platform that allows users to add road trip details and get a generated playlist based of the time of the trip.",
        tags: [
            {
                name: "Tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "API",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: roadster,
        source_code_link: "https://github.com/AlexM745/Roadtrip-Playlist-Maker",
    },
    {
        name: "RetroBox",
        description:
            "Web application that enables users to search for retro games to add to their wish, played and completed list.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: retrobox,
        source_code_link: "https://github.com/AlexM745/RetroBox",
    },
    {
        name: "Finance Tracker",
        description:
            "Web application that lets users add their expenses and see what their budget is.",
        tags: [
            {
                name: "MongoDB",
                color: "blue-text-gradient",
            },
            {
                name: "Express.js",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: financeTracker,
        source_code_link: "https://github.com/Finance-Tracker",
    },
    {
        name: "Coding Quiz",
        description:
            "Web application that lets users answer questions about Javascript to help get prepared for job interviews.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: codingQuiz,
        source_code_link: "https://github.com/coding-quiz",
    },
];


const experiences = [

]

// exporting the array of objects so that I can use them on the different sections on jsx files

export { skills, experiences, projects, navLinks };