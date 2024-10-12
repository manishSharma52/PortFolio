import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>
            <div className="mb-8 flex flex-wrap lg: justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/4"
                >
                    <img
                        width={150}
                        height={150}
                        // src="src/food-photos_662583-2804.webp"
                        src="https://imgs.search.brave.com/Wn-qtXQrQwflbBKIMWD7zmtLnCPjwwjjZ7gd0uio_N8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mb29kLXBob3Rv/c182NjI1ODMtMjgw/NC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
                        alt="MyFood"
                        className="mb-6 rounded-xl"
                    />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4"
                >
                    <h6 className="mb-2 font-semibold "> MyFood</h6>
                    <p className="mb-4 text-neutral-300">
                        {" "}
                        "A fully functional restaurant website with features like login,
                        sign up, food add to Cart , Checkout, and user authentication.",
                    </p>
                    <span className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium ">
                        HTML CSS Bootstrap React.js Node.js express.js MongoDB
                    </span>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg: justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/4"
                >
                    <img
                        width={150}
                        height={150}
                        // src="src/Gemini_August_Release_1.width-1200.format-webp.webp"
                        src="https://imgs.search.brave.com/L913cfEAweaq3pi0_MVLJTKEBWQTeVi1wBqmFQvJot8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0cvZ29vZ2xl/LWdlbWluaS1sb2dv/LUE1Nzg3QjI2Njkt/c2Vla2xvZ28uY29t/LnBuZw"
                        alt="Gemini"
                        className="mb-6 rounded-xl"
                    />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4"
                >
                    <h6 className="mb-2 font-semibold "> Gemini</h6>
                    <p className="mb-4 text-neutral-300">
                        {" "}
                        "A fully functional Gemini-Clone with features like take prompt in
                        text formate and give desire result in text formate and api
                        Integrated",
                    </p>
                    <span className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium ">
                        HTML CSS React.js Tailwind-Css Api
                    </span>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg: justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/4"
                >
                    <img
                        width={150}
                        height={150}
                        // src="src/pass.webp"
                        src="https://imgs.search.brave.com/K6nJd8rg9aM6xPQ5VEZRw-vGvKiAMqay7DhzcPWdLLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/ZW1iZXItbG9nLW1l/bWJlcnNoaXAtdXNl/cm5hbWUtcGFzc3dv/cmQtY29uY2VwdF81/Mzg3Ni0xMjQ0MjAu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
                        alt="Password-Generator"
                        className="mb-6 rounded-xl"
                    />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4"
                >
                    <h6 className="mb-2 font-semibold "> Password-Generator</h6>
                    <p className="mb-4 text-neutral-300">
                        {" "}
                        "A fully functional Password-Generator with features like Give new
                        Password, generate dynamic pass , user can be control, copy to
                        clipboard.",
                    </p>
                    <span className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium ">
                        HTML CSS React.js Tailwind-Css
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
