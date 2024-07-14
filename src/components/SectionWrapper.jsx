import { useAnimate, motion, stagger } from "framer-motion";
import { staggerContainer } from "../../motion"

// a fucntion returning a function 
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="sm:px-20 px-10 sm:py-18 py-12 max-w-5xl mx-auto relative z-0"
            >
                <span className='hash-span' id={idName}>
                    {/* rendering empty space */}
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default SectionWrapper