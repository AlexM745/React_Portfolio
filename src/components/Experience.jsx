import React from "react"
import SectionWrapper from "./SectionWrapper";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "../../motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};


const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[20px] text-[16px]  text-secondary uppercase tracking-wider">
                    What I have done so far</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>
            </motion.div>
            <div className="w-full flex">
                <p className=" mt-3 text-secondary text-[18px] max-w-3l leading-[30px]">
                    See my resume <a className="underline hover:text-white"
                        href="https://docs.google.com/document/d/1DjOFCIChRQh6MRYiocedcQ6FoBfQqhp6_9CC6jMYHBA/edit?usp=sharing">
                        here</a>.
                </p>
            </div>
            <div className="mt-20 flex flex-wrap gap-10">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline></div>


        </>
    )
}

export default SectionWrapper(Experience, "experience")