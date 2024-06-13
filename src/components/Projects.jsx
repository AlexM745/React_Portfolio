import React from "react"


const Projects = () => {
    return (
        <>
             <p className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider">
                My projects</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Portfolio.</h2>


        <div className="w-full flex">
            <p className=" mt-4 text-secondary text-[20] max-w-3xl leading-[30px] ">
            Following projects are the reflection of my skills and experience through my Full Stack Bootcamp course. Each project has a brief description with links to their repositories and live demos in it. They show my ability to work with different technologies and manage projects effectively.

            </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-10">project cards go here</div>

        </>
    )
}

export default Projects