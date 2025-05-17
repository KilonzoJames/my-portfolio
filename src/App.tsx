import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./components/notfound";
import Header from "./components/Heading/Header";
import Footer from "./components/footer";
import Profile from "./components/Profile/Profile";
import Socials from "./components/Socials/Socials";
import Techstack from "./components/Tech/Techstack";
import Contacts from "./components/Contacts/contacts";
import ProjectsList from "./components/Projects/ProjectsList";
import Courses from "./components/Courses/Courses";
import SplashScreen from "./components/SplashScreen";
import FakeTerminal from "./components/Misc/FakeTerminal";
import "./styles/App.css";
import "./styles/project.css";
import "./styles/header.css";
import "./styles/social.css";
import "./styles/techskill.css";

function App() {
    const location = useLocation();
    const [showSplash, setShowSplash] = useState(true);

    // Only show Header and Footer on valid paths
    const pathsWithHeader = [
        "/socials",
        "/techstack",
        "/projects",
        "/contacts",
        "/course",
        "/misc",
    ];
    const showHeader = pathsWithHeader.includes(location.pathname);
    const showFooter = ["/", ...pathsWithHeader].includes(location.pathname);

    // This callback is triggered by SplashScreen when its animation sequence is done.
    const handleSplashEnd = () => {
        setShowSplash(false);
    };

    return (
        <div className="app">
            {showSplash ? (
                // Render SplashScreen and pass the callback
                <SplashScreen onAnimationEnd={handleSplashEnd} />
            ) : (
                // Once showSplash is false, render the main application
                <Routes>
                    {/* Routes that include Header and Footer */}
                    <Route
                        path="/*"
                        element={
                            <div className="app">
                                {showHeader && <Header />}
                                <Routes>
                                    <Route path="/" element={<Profile />} />
                                    <Route
                                        path="/projects"
                                        element={<ProjectsList />}
                                    />
                                    <Route
                                        path="/course"
                                        element={<Courses />}
                                    />
                                    <Route
                                        path="/techstack"
                                        element={<Techstack />}
                                    />
                                    <Route
                                        path="/socials"
                                        element={<Socials />}
                                    />
                                    <Route
                                        path="/contacts"
                                        element={<Contacts />}
                                    />
                                    <Route
                                        path="/misc"
                                        element={<FakeTerminal />}
                                    />
                                </Routes>
                                {showFooter && <Footer />}{" "}
                            </div>
                        }
                    />
                    {/* NotFound Route outside Header/Footer */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
