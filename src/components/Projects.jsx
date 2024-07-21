import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";

import SectionWrapper from "./SectionWrapper";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../../motion";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_demo_link,  // Added this line
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className=' w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-red-500 hover:bg-blue-700 '
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain '
                            />
                        </div>
                        
                        
                        {/* delpyed site button */}
                        {live_demo_link && (
                            <button
                                onClick={() => window.open(live_demo_link, "_blank")}
                                className='bg-green-500 hover:bg-green-700 text-white font-bold w-14 h-14 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                Live Site
                            </button>
                        )}
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};




const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[20px] text-[16px]  text-secondary uppercase tracking-wider">My Projects</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Portfolio.</h2>
            </motion.div>



            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects are the reflection of my skills and experience through my Full Stack Bootcamp course. Each project has a brief description with links to their repositories and live demos in it. They show my ability to work with different technologies and manage projects effectively.

                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>

        </>
    )
}

export default SectionWrapper(Projects, "portfolio");
