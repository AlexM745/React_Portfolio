// this file will have all the information so that it is passed to files
// if i need to edit I can do that in one file
import { backend, react, web, frontend, financeTracker, retrobox, roadster, codingQuiz, fullstack, greathearts, swisd } from '../assets';





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
        live_demo_link: "https://roadster-music.netlify.app/",
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
        source_code_link: "https://github.com/AlexM745/Retro_Box.git",
        live_demo_link: "https://retrobox.onrender.com",
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
        live_demo_link: "https://finance-tracker-r26w.onrender.com",
    },
    {
        name: "Coding Quiz",
        description:
            "Web application that prepares java script knowledge for job interviews.",
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
        live_demo_link: "https://coding-quiz-javascript.netlify.app/",

    },
];


const experiences = [
    {
        title: "Developer",
        company_name: "Full Stack Flex Program",
        icon: fullstack,
        iconBg: "#383E56",
        date: "January 2024 - July 2024",
        points: [
            "Mastered frontend and backend technologies (HTML, CSS, JavaScript, React, Node.js, Express, MongoDB).",
            "Completed real-world projects to enhance problem-solving and development skills.",
            "Improved teamwork and communication skills in coding projects",
        ],
    },
    {
        title: "Fine Arts Teacher",
        company_name: "Southwest ISD",
        icon: swisd,
        iconBg: "#228B22",
        date: "July 2023 - Present",
        points: [
            "Successfully organized and conducted two impactful student concerts, showcasing musical talents and fostering community engagement.",
            "Assisted in coordinating school events and contributed to the success of large assemblies, ensuring smooth execution and positive student experiences.",
            "Innovatively designed and implemented engaging curriculum modules that enhanced student participation and achievement in fine arts programs..",
        ],
    },
    {
        title: "Music Teacher K-2nd",
        company_name: "Great Hearts Texas",
        icon: greathearts,
        iconBg: "#89CFF0",
        date: "July 2022 - July 2023",
        points: [
            " Successfully directed a concert within three weeks of assuming the position, demonstrating strong organizational and leadership skills to showcase students' talents effectively.",
            " Actively assisted in various tasks and responsibilities, ensuring the smooth operation of music classes and events. Consistently available to support colleagues and students, contributing to a collaborative and productive environment",
            " Recognized as a go-to person for tasks and responsibilities, indicating reliability and a proactive approach.Demonstrated commitment to the success of the music program by always being ready to help when needed.",
        ],
    },
];

// exporting the array of objects so that I can use them on the different sections on jsx files

export { skills, experiences, projects, navLinks };