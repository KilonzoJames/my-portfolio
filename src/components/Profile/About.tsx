import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProfileCard from "./ProfileCard";

function About() {
    const { t } = useTranslation();
    const line1 = t("profile.line1");
    const line2 = t("profile.line2");
    const line3 = t("profile.line3");

    return (
        <div className="relative w-4/5 md:w-1/2 flex flex-col mx-auto bg-gradient-radial from-slate-900/0 to-slate-900 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl transition hover:shadow-neon-glow gap-10">
            <div className="div1">
                <h1 className="sectiontitle">Profile</h1>
            </div>

            <div className="div2 flex flex-col lg:flex-row items-center gap-10">
                {/* Image floats left on lg and up */}
                <motion.img
                    src="https://res.cloudinary.com/dzif8ltvg/image/upload/v1727444795/rmu6lxt2wvdca6gz14ms.jpg"
                    alt="logo"
                    className="object-cover h-72 w-72 rounded-full shadow-lg"
                    // image-animation
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 2,
                        delay: 1,
                    }}
                />

                <ProfileCard />

                <div
                    className="hidden 
                ">
                    {/* w-full flex flex-col justify-center gap-6 */}
                    <motion.div
                        className="text-gradient text-sm sm:text-md md:text-lg Montserrat"
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
