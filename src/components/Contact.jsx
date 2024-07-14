import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import SectionWrapper from "./SectionWrapper";


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
    const handleChange = (e) => { };
    // this is wrapper for react-hook-form to manage the user entered data to the onSubmit function 
    const handleSubmit = (e) => { };


    return (
        <div className="xl:mt-12 xl:pl-36 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <div className="flex-[0.75] bg-grey-90 p-8 rounded-2xl">
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
            </div>
        </div>
    )
}

export default SectionWrapper(Contact,"contact")