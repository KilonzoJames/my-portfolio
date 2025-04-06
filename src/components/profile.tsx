import React from "react";
// import image from "../assets/IMG_20230919_073049.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Profile() {
    const { t } = useTranslation();    
    const line1 = t("profile.line1");
    const line2 = t("profile.line2");
    const line3 = t("profile.line3");
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center text-2xl lg:text-4xl gap-16 p-4">
                <div className="hover:scale-105 transition-all duration-500">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 2, delay: 1 }}
                        src="https://res.cloudinary.com/dzif8ltvg/image/upload/v1727444795/rmu6lxt2wvdca6gz14ms.jpg"
                        alt="logo"
                        className="image-animation object-cover h-72 w-72 "
                    />
                </div>
                <div className="mb-4">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "",
                            fontWeight: 800,
                            // fontSize: '1em',
                            textDecoration: "none",
                            color: "#0ACF11",
                        }}
                        multiText={["Hi! Welcome to my website!\n"]}
                        cursorColor="#0ACF11"
                        startDelay={3000}
                        // multiTextDelay={1500}
                        typeSpeed={35}
                    />
                </div>
                <div className="mb-4">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "",
                            fontWeight: 800,
                            // fontSize: '1em',
                            textDecoration: "none",
                            color: "#0ACF11",
                        }}
                        multiText={[
                            "I'm James Kilonzo ...\n",
                            "A full-stack software developer.\n",
                            "I bring passion and expertise to every project.\n",
                            "Let's create something extraordinary together!\n",
                        ]}
                        cursorColor="black"
                        startDelay={4000}
                        typeSpeed={35}
                    />
                </div>
            </div>

            <div className="w-4/5 md:w-1/2 flex flex-col mx-auto gap-20 py-10">
                <h2 className="text-center mx-auto m-2">Profile</h2>
                <h2 className="font-extrabold text-center  m-2 ">
                    Fullstack Web Developer
                </h2>
                <motion.div
                    className="text-gradient text-mediumfont"
                    initial={{ opacity: 0, scale: 0.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 2, delay: 2 }}>
                    {line1}
                    <br />
                    <br />
                    {line2}
                    <br />
                    <br />
                    {line3}
                </motion.div>
                <div className="flex items-center justify-end">
                    <span>Visitor Count:</span>
                    <img
                        src="https://visit-counter.vercel.app/counter.png?page=https://ki-lonzo.onrender.com/"
                        alt="Visitors"
                        className="inline-block ml-2"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
