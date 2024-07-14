import React from "react";
import SectionWrapper from "./SectionWrapper";

const Footer = () => {
    return (
        <footer className=" w-full items-center bg-primary">
            <div className="flex items-center justify-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/alexis-merino-00790b2b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tertiary"
                >
                    <svg
                        className="h-8 w-8 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S.02 2.12.02 3.5 1.14 6 2.5 6s2.48-1.12 2.48-2.5zM.02 8.98V23h5V8.98h-5zM8.52 8.98V23h5v-7.26c0-3.46 4.48-3.75 4.48 0V23h5v-7.93C23 9.23 18.37 8.5 15 11.29V8.98h-6.48z"
                        />
                    </svg>
                </a>
                <a
                    href="https://github.com/AlexM745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tertiary"
                >
                    <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.5.46-3.03-1.21-3.03-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.38 2.12.98 2.64.75.08-.58.31-.98.56-1.21-1.96-.22-4.02-.98-4.02-4.37 0-.96.34-1.75.89-2.37-.09-.22-.39-1.12.09-2.33 0 0 .74-.24 2.43.9a8.37 8.37 0 012.23-.3c.76 0 1.52.1 2.23.3 1.69-1.14 2.43-.9 2.43-.9.48 1.21.18 2.11.09 2.33.55.62.89 1.41.89 2.37 0 3.4-2.06 4.15-4.02 4.37.32.27.61.82.61 1.66 0 1.2-.01 2.17-.01 2.47 0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"
                        />
                    </svg>
                </a>
            </div>
            <p className="mt-2 text-center">Alexis Merino 2024</p>
        </footer>

    )
}

export default SectionWrapper(Footer, '')