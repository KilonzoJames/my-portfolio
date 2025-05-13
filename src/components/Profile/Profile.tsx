import React from "react";
// import image from "../assets/IMG_20230919_073049.jpg";
import ParticleBackground from "./ParticleBackground";
import Home from "./Home";
import WelcomeBanner from "./WelcomeBanner";
import About from "./About";

function Profile() {
    return (
        <div className="relative overflow-hidden flex flex-col">
            <ParticleBackground />
            <Home />
            <WelcomeBanner />
            <About />
        </div>
    );
}

export default Profile;
