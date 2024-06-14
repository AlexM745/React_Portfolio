// this file will have all the information so that it is passed to files
// if i need to edit I can do that in one file
 import{ backend, creator, web

 } from '../assets';

const skills = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Developer",
        icon: creator,
    },
];


const projects = [

]


const experiences = [

]

// exporting the array of objects so that I can use them on the different sections on jsx files

export { skills, experiences, projects };