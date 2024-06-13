import React from "react"


const Hero = () => {
    return (
        // hero section 
        <section className="relative w-full h-screen mx-auto">
{/* This div contains my name and ocupation. */}
            <div
                className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex sm:px-16 px-6 flex-row items-start gap-5"
            >
                {/* Small circle and fading line */}
                <div className='flex flex-col justify-center items-center mt-5'>
                    {/* small blue circle  */}
                    <div className='w-5 h-5 rounded-full bg-[#6DDBF4]' />
                    {/* fading line */}
                    <div className='w-1 sm:h-80 h-40 blue-gradient' />
                </div>
                {/* My name and occupation */}
                <div>
                    <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                        Hello, I'm <span className='text-[#A969DF]'>Alexis</span>
                    </h1>
                    <p className="text-[#b6dffe] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                        I am a full-stack web developer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero