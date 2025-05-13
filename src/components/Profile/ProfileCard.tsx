import React from "react";
const ProfileCard = () => {
    return (
        <div className="rounded-2xl p-6 md:p-10 w-full max-w-3xl mx-auto shadow-lg border border-gray-800 text-white space-y-6 Montserrat">
            <div>
                <h2 className="text-2xl font-bold text-luminous mb-2">
                    🌀 About Me
                </h2>
                <p>
                    I am a cybersecurity analyst and full-stack developer. I
                    build secure, scalable software with a Linux-powered mindset
                    and a love for open-source.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-luminous mb-2">
                    ✨ What I Love
                </h2>
                <p>
                    CTFs. Clean code. Clean terminals. Learning in public. I
                    believe security isn’t an afterthought—it’s part of the
                    blueprint.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-luminous mb-2">
                    🛠 Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Python",
                        "React",
                        "Flask",
                        "Tailwind",
                        "Linux",
                        "Wireshark",
                        "Docker",
                    ].map((tech, index) => (
                        <span
                            key={index}
                            className="bg-green-600 text-xs px-3 py-1 rounded-full font-medium aboreto-regular">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-luminous mb-2">
                    🔥 Currently
                </h2>
                <p>
                    Diving into exploit development, automation scripting, and
                    building sleek UIs with Tailwind.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-luminous mb-2">
                    🤝 Let’s Collaborate
                </h2>
                <p>
                    Got a crazy project? Want to pair on a CTF? I’m all ears.
                    Let’s build.
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
