import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NotFound from "./components/notfound";
import Header from "./components/Heading/Header";
import Footer from "./components/footer";
import Profile from "./components/profile";
import Socials from "./components/socials";
import Techstack from "./components/techstack";
import Contacts from "./components/contacts";
import ProjectsList from "./components/ProjectsList";
import Courses from "./components/Courses";
import Loader from "./components/Loader";
import "./styles/App.css";
import "./styles/project.css";
import "./styles/header.css";
import "./styles/social.css";
import "./styles/techskill.css";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // initial loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 250); // 2-second delay (adjust as needed)
    }, []);

    // Only show Header and Footer on valid paths
    const HomePage = [
        "/",
        "/socials",
        "/techstack",
        "/projects",
        "/contacts",
        "/course",
    ].includes(location.pathname);

    return (
        <div className="app">
            {isLoading ? (
                <Loader />
            ) : (
                <Routes>
                    {/* Routes that include Header and Footer */}
                    <Route
                        path="/*"
                        element={
                            <div className="app">
                                {HomePage && <Header />}
                                <Routes>
                                    <Route path="/" element={<Profile />} />
                                    <Route
                                        path="/socials"
                                        element={<Socials />}
                                    />
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
                                    <Route
                                        path="/course"
                                        element={<Courses />}
                                    />
                                </Routes>
                                {HomePage && <Footer />}{" "}
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
