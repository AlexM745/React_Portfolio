import React from "react";
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../motion";
import { skills } from "../constants";
import SectionWrapper from "./SectionWrapper";
import alexis from "../assets/alexis.jpg"
// this is the skill cards that will be rendered in the div seciton in about me component.
const SkillsCard = ({ index, title, icon }) => {
    return (
        //using tilt from react-parallax tilt to give cards a tilt effect
        <Tilt className="xs:w-[250px] w-full"
            tiltMaxAngleX={45} tiltMaxAngleY={45} transitionSpeed={450} scale={1}>
            {/* using framer motion to give the cards an animation */}
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
            <div className="flex flex-row xl:pl-36" >
                {/* using framer motion to add animation to the text */}
                <motion.div variants={textVariant()} className="pr-10">
                    {/* the header section of the about me  */}
                    <p className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider">Introduction</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
                </motion.div >

                {/* Image  */}
                <motion.img
                    variants={fadeIn("", "", 0.1, 1)}
                    src={alexis} alt="profile-pic" className=" h-[125px] rounded-full top-">
                </motion.img>

            </div>

            {/* description of myself */}
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className=" mt-4 text-secondary text-[20] max-w-3xl leading-[30px] xl:pl-36">

                I am a dedicated and detail-oriented Full Stack Web Developer with a comprehensive coding bootcamp experience that has equipped me with robust technical skills in both frontend and backend technologies. 
                My expertise includes HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Throughout my training, I have developed a strong foundation in web development principles, project management, and agile methodologies.
                I am passionate about creating seamless user experiences and efficient, scalable web applications. 
                My hands-on experience in building dynamic, responsive websites and applications has honed my problem-solving abilities and attention to detail.
                I thrive in collaborative environments and am committed to continuous learning and staying updated with the latest industry trends and technologies.
                With a proactive approach to challenges and a strong commitment to delivering high-quality solutions, I am eager to contribute to a dynamic team and take on new challenges in the field of web development.
            </motion.p>


            <div className="pl-20 mt-20 flex flex-wrap gap-10 xl:pl-36">
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