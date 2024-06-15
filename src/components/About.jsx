import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { skills } from "../constants";

// this is the skill cards that will be rendered in the div seciton in about me component.
const SkillsCard = (index, title, icon) => {
    return (
        // using react parallax tilt to give the cards a tilt effect
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={("right", "spring", 0.5 * index, 0.75)}
                className="-full blue-gradient p-[1px] rounded-[20px] shadow-card">
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-row'
                >
                    {/* the icons of the skills are being passed through */}
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-16 h-16 object-contain'
                    />

                </div>
            </motion.div>
        </Tilt>
    );
};



const About = () => {
    return (
        <>
        {/* useing framer motion to add animation to the text */}
            <motion.div variants={{}}
            >
                {/* the header section of the about me  */}
                <p className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider">
                    Introduction</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Overview.</h2>
            </motion.div >
            {/* description of myself */}
            <motion.p variants={("", "", 0.1, 1)}>
                <p className=" mt-4 text-secondary text-[20] max-w-3xl leading-[30px] ">
                    I am skilled software developer with experience in React, Javascript, HTML, CSS Frameworks, Databases and API.
                    I am a quick learner and collaborate well in teams and with clients to create efficient and user-friendly ways to solve real-world problems.Let's work together to make your ideas come to life!
                </p>
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {/* looping over the skills and indexes */}
                {skills.map((skill, index) => (
                    <SkillsCard key={skill.title} index={index} />
                ))}

            </div>


        </>
    )
}

export default About