import React from "react"


const About = () => {
    return (
        <>
            <p className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider">
                Introduction</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
            
            <p className=" mt-4 text-secondary text-[20] max-w-3xl leading-[30px] ">
                I am skilled software developer with experience in Javascript, React, frontend and backend.I am a quick learner and collaborate well in teams and with clients to create efficient and user-friendly ways to solve real-world problems.Let's work together to make your ideas come to life!
            </p>

            <div className="mt-20 flex flex-wrap gap-10">
            {[
                            ["Web developer"],
                            ["Backend Developer"],
                            ["React Developer"],
                        ].map(([title]) => (
                            <a>{title}</a>
                        ))}
            </div>


        </>
    )
}

export default About