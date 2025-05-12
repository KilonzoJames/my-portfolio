import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./components/notfound";
import Header from "./components/Heading/Header";
import Footer from "./components/footer";
import Profile from "./components/Profile/Profile";
import Socials from "./components/Socials/Socials";
import Techstack from "./components/Tech/Techstack";
import Contacts from "./components/contacts";
import ProjectsList from "./components/ProjectsList";
import Courses from "./components/Courses";
import SplashScreen from "./components/SplashScreen";
import "./styles/App.css";
import "./styles/project.css";
import "./styles/header.css";
import "./styles/social.css";
import "./styles/techskill.css";

function App() {
    const location = useLocation();
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // initial loading delay
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1000); // Show splash for 5 seconds (adjust as needed)
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return <SplashScreen />;
    }

    // Only show Header and Footer on valid paths
    const pathsWithHeader = [
        "/socials",
        "/techstack",
        "/projects",
        "/contacts",
        "/course",
    ];
    const showHeader = pathsWithHeader.includes(location.pathname);
    const showFooter = ["/", ...pathsWithHeader].includes(location.pathname);

    return (
        <div className="app">
            <Routes>
                {/* Routes that include Header and Footer */}
                <Route
                    path="/*"
                    element={
                        <div className="app">
                            {showHeader && <Header />}
                            <Routes>
                                <Route path="/" element={<Profile />} />
                                <Route path="/socials" element={<Socials />} />
                                <Route
                                    path="/techstack"
                                    element={<Techstack />}
                                />
                                <Route
                                    path="/projects"
                                    element={<ProjectsList />}
                                />
                                <Route
                                    path="/contacts"
                                    element={<Contacts />}
                                />
                                <Route path="/course" element={<Courses />} />
                            </Routes>
                            {showFooter && <Footer />}{" "}
                        </div>
                    }
                />
                {/* NotFound Route outside Header/Footer */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
