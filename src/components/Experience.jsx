import React from "react"
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
    return (
        <>
            <p className="sm:text-[20px] text-[16px]  text-secondary uppercase tracking-wider">
                What I have done so far</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>

            <div className="w-full flex">
                <p className=" mt-3 text-secondary text-[18px] max-w-3l leading-[30px]">
                    See my resume <a className="underline hover:text-white"
                        href="https://docs.google.com/document/d/1DjOFCIChRQh6MRYiocedcQ6FoBfQqhp6_9CC6jMYHBA/edit?usp=sharing">
                        here</a>.
                </p>
            </div>
            <div className="mt-20 flex flex-wrap gap-10"></div>


        </>
    )
}

export default SectionWrapper(Experience,"")