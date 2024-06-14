// importing the spline logo and motion from framer motion for animations
import InteractiveLogo from "./InteractiveLogo";
import { motion } from "framer-motion"

const Hero = () => {
    return (
        // hero section 
        <section className="relative w-full h-screen mx-auto">

            {/* This div contains my name and ocupation. */}
            <div
                className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex sm:px-16 px-6 flex-row items-start gap-5 pointer-events-none"
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
            {/* Spline logo */}
            <InteractiveLogo />

            {/* Animation to scroll down to about section */}
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero