// this file will have all the information so that it is passed to files
// if i need to edit I can do that in one file
import { backend, react, web, frontend } from '../assets';





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

]


const experiences = [

]

// exporting the array of objects so that I can use them on the different sections on jsx files

export { skills, experiences, projects, navLinks };