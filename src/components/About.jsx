import React from "react";
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";
import { skills } from "../constants";
import SectionWrapper from "./SectionWrapper";

// this is the skill cards that will be rendered in the div seciton in about me component.
const SkillsCard = ({ index, title, icon }) => {
    return (
        //using tilt from react-parallax tilt to give cards a tilt effect
        <Tilt className="xs:w-[250px] w-full"
            tiltMaxAngleX={45} tiltMaxAngleY={45} transitionSpeed={450} scale={1}>
            {/* using framer motion to give the cards an animation */}
            <motion.div variants={("right", "spring", 0.5 * index, 0.75)}
                className="w-full blue-gradient p-[1px] rounded-[20px] shadow-card">
                {/* This is the cards for each skill */}
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h=[280px] flex justify-evenly items-center flex-col" >
                    {/* Thjs is the icon of each skill */}
                    <img src={icon} alt="skill icons" className="w-16 h-16 object-contain align" />
                    {/* This is the title of each skill */}
                    <h3 className="text-white text-[20] font-bold text-center">{title}</h3>
                </div>

            </motion.div>

        </Tilt>
    )
}

const About = () => {
    return (
        <>
            {/* using framer motion to add animation to the text */}
            <motion.div
                animate={{ x: 100 }}
                transition={{ type:"spring", ease: "easeOut", duration: 1.25, delay:1}}
            >
                {/* the header section of the about me  */}
                <p className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider">
                    Introduction</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Overview.</h2>
            </motion.div >
            {/* description of myself */}
            <motion.p  
            animate={{ x: 100, opacity:1,}}
                transition={{ type: "spring", ease: "easeOut", duration: 1.25, delay: 1.25}}
                className=" mt-4 text-secondary text-[20] max-w-3xl leading-[30px] ">

                I am skilled software developer with experience in React, Javascript, HTML, CSS Frameworks, Databases and API.
                I am a quick learner and collaborate well in teams and with clients to create efficient and user-friendly ways to solve real-world problems.Let's work together to make your ideas come to life!

            </motion.p>

            <div className="mt-10 mb-10 flex flex-wrap gap-10">
                {/* looping over the skills and indexes */}
                {skills.map((skill, index) => (
                    <SkillsCard key={skill.title} index={index} {...skill} />
                ))}
            </div>


        </>
    )
}
// using a high order component to wrap around the component then the id of the component
export default SectionWrapper(About, "about")