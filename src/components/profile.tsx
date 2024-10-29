import React from "react";
// import image from "../assets/IMG_20230919_073049.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";

function Profile() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center text-2xl lg:text-4xl gap-16 p-4">
        <div className="hover:scale-105 transition-all duration-500">
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 2, delay: 1.5 }}
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

      <div className="flex flex-col flex-wrap w-5/6 justify-center items-center rounded-2xl mx-auto gap-20 py-10">
        <h2 className="text-center mx-auto m-2">Profile</h2>
        <h2 className="font-extrabold text-center  m-2 ">
          Fullstack Web Developer
        </h2>
        <motion.div
          className="text-gradient text-mediumfont"
          initial={{ opacity: 0, scale: 0.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 2, delay: 4 }}
        >
          I am a cybersecurity analyst, an advocate for Linux, and full-stack
          software developer with proficiency in Python, API development, and
          automation. I build scalable, secure solutions by combining my passion
          for open-source software with cybersecurity.
          <br />
          <br />
          Any cooperative initiatives are welcome! 🚀 I enjoy working on
          exciting projects and interacting with other brilliant individuals
          gives me a sense of purpose and pure joy. SWE is comparable to an
          enormous creative and problem-solving playground where each new line
          of code is an exciting new journey just waiting to be discovered. My
          desire to learn more and keep up with the latest developments in
          technology is what motivates me.
          <br />
          <br />
          These projects are not just about code; they're about creating
          something meaningful, pushing boundaries, and leaving a mark in the
          digital world. It's a journey full of difficulties, but every
          difficulty presents a chance for development and education. 🌟 So,
          here's to the exciting road ahead, where every project is a new story
          waiting to be written! 💻
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
