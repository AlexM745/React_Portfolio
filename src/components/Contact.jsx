import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../../motion";

const Contact = () => {

    //hook that allows you to persist values between renders
    const formRef = useRef();
    // at the start the field will be an object with client infomation set to empty
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    // this is a useState for when the submit button is clicked
    const [loading, setLoading] = useState(false);
    // this is a function that calls when there is any user input 
    const handleChange = ({ target: { name, value } }) => {
        setForm((form) => ({
            ...form,
            [name]: value,
        }));
    };
    // this is wrapper for react-hook-form to manage the user entered data to the onSubmit function 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            setLoading(false);
            alert("EmailJS configuration is missing. Please check your environment variables.");
            return;
        }

        try {
            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: form.name,
                    to_name: "Alexis Merino",
                    from_email: form.email,
                    to_email: "alexismerino49@gmail.com",
                    message: form.message,
                },
                publicKey
            );

            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setLoading(false);
            console.error(error);

            alert("Oh, something went wrong. Please try again.");
        }
    };


    return (
        <div className="xl:mt-12 xl:pl-36 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-grey-90 p-8 rounded-2xl">
                <p className="sm:text-[20px] text-[16px] text-secondary uppercase tracking-wider">
                    Get in touch</p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Contact.</h3>
                {/* Form starts here */}
                <form ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8">
                    {/* Name section */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    {/*Email section */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    {/* Message section */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What is your message . . . "
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    {/* The submit button */}
                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-indigo-500/60'
                    >
                        {/*  loading state when the button is activated sending and if not send */}
                        {loading ? "Sending..." : "Send"}

                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")