import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    const line1 = t("profile.line1");
    const line2 = t("profile.line2");
    const line3 = t("profile.line3");

    return (
        <div className="relative w-4/5 md:w-1/2 flex flex-col mx-auto gap-10">
            <div className="div1 flex flex-col w-full">
                <h2 className="text-center mx-auto mt-4">Profile</h2>
                <h2 className="font-extrabold text-center mx-auto mb-4">
                    Fullstack Web Developer
                </h2>
            </div>

            <div className="div2 relative w-full mx-auto flex flex-col items-center">
                {/* Image floats left on lg and up */}
                <div className="flex justify-center mb-6">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 2,
                            delay: 1,
                        }}
                        src="https://res.cloudinary.com/dzif8ltvg/image/upload/v1727444795/rmu6lxt2wvdca6gz14ms.jpg"
                        alt="logo"
                        className="image-animation object-cover h-72 w-72 "
                    />
                </div>
                {/* Text wraps around and fills remaining space */}
                <div className="w-full flex flex-col justify-center gap-6">
                    <motion.div
                        className="text-gradient text-mediumfont"
                        initial={{ opacity: 0, scale: 0.06 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 2,
                            delay: 2,
                        }}>
                        {line1}
                        <br />
                        <br />
                        {line2}
                        <br />
                        <br />
                        {line3}
                    </motion.div>

                    <div
                        className="hidden"
                        // className="flex items-center justify-end"
                    >
                        <span>Visitor Count:</span>
                        <img
                            src="https://visit-counter.vercel.app/counter.png?page=https://ki-lonzo.onrender.com/"
                            alt="Visitors"
                            className="inline-block ml-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
