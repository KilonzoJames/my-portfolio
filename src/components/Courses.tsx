// Recently, I've gathered a collection of exceptional websites in UI/UX design that left me in awe upon my initial exploration. I believe these websites can greatly enrich your UI skills. Here's a list of my top 8 favorite websites (in no particular order).
// Raycast is a productivity tool that enables fast task completion. Its homepage captivated me with its UI design, featuring my favorite gradient colors and various shades of red (the theme color).
import React from "react";

const Certs = [
    {
        title: "Automate Cybersecurity Tasks with Python",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/SV17LO8H8C4X",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Troubleshooting and Debugging Techniques",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/IQH29HDMZJ4E",
        coursename: "Google IT Automation with Python",
    },
    {
        title: "Introduction to Git and GitHub",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/HTI6ZW1KTVXF",
        coursename: "Google IT Automation with Python",
    },
    {
        title: "Using Python to Interact with the Operating System",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/OIDZQR040TWT",
        coursename: "Google IT Automation with Python",
    },
    {
        title: "Assets, Threats, and Vulnerabilities",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/R3WW04N9U71T",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Configuration Management and the Cloud",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/L6CTI25RHP92",
        coursename: "Google IT Automation with Python",
    },
    {
        title: "Play It Safe: Manage Security Risks",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/8I80272RJC5U",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Crash Course on Python",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/RMNL2OESGIY1",
        coursename: "Google IT Automation with Python",
    },
    {
        title: "Put It to Work: Prepare for Cybersecurity Jobs",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/FW9U975YIQNI",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Automating Real-World Tasks with Python",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/KND66I55SIQS",
        coursename: "Google IT Automation with Python",
    },
    {
        title: "IT Security: Defense against the digital dark arts",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/7RAF07VN1S3S",
        coursename: "Google IT Support",
    },
    {
        title: "Tools of the Trade: Linux and SQL",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/3IH2BMN6LIEP",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Operating Systems and You: Becoming a Power User",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/GXMZQECXGO6W",
        coursename: "Google IT Support",
    },
    {
        title: "System Administration and IT Infrastructure Services",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/87S4RIUK7MNZ",
        coursename: "Google IT Support",
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/Q7EDEA0SO5MW",
        coursename: "Google IT Support",
    },
    {
        title: "Foundations of Cybersecurity",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/1DDYGU3RSFNN",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Sound the Alarm: Detection and Response",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/WC4FY4QNTFK7",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Google AI Essentials",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/HRQYOL1FGA7K",
        coursename: "Google AI Essentials",
    },
    {
        title: "Connect and Protect: Networks and Network Security",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/YPZ1A5CYXFVE",
        coursename: "Google Cybersecurity",
    },
    {
        title: "Technical Support Fundamentals",
        description: "Google Coursera",
        img_link:
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        coursera_link:
            "https://www.coursera.org/account/accomplishments/verify/Z7S7L7TTGCGB",
        coursename: "Google IT Support",
    },
    {
        title: "Jr Penetration Tester",
        description: "TryHackMe",
        img_link:
            "https://tryhackme-images.s3.amazonaws.com/user-avatars/83d369e0ec4156eef0b33faeed69346d.png",
        coursera_link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OPP6EMW92U.pdf",
        coursename: "TryHackMe",
    },
    {
        title: "Pre Security",
        description: "TryHackMe",
        img_link:
            "https://tryhackme-images.s3.amazonaws.com/user-avatars/83d369e0ec4156eef0b33faeed69346d.png",
        coursera_link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-RBFYADSJ6Z.pdf",
        coursename: "TryHackMe",
    },
    {
        title: "Web Fundamentals",
        description: "TryHackMe",
        img_link:
            "https://tryhackme-images.s3.amazonaws.com/user-avatars/83d369e0ec4156eef0b33faeed69346d.png",
        coursera_link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NTLU9LCYS1.pdf",
        coursename: "TryHackMe",
    },
    {
        title: "CompTIA Pentest+",
        description: "TryHackMe",
        img_link:
            "https://tryhackme-images.s3.amazonaws.com/user-avatars/83d369e0ec4156eef0b33faeed69346d.png",
        coursera_link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8PZLGBPRJO.pdf",
        coursename: "TryHackMe",
    },
];

const CourseNames = [
    {
        name: "Google Cybersecurity",
        color: "bg-green-200", // Coral
    },
    {
        name: "Google IT Support",
        color: "bg-slate-100", // Slate Blue
    },
    {
        name: "Google IT Automation with Python",
        color: "bg-blue-200", // Medium Sea Green
    },
    {
        name: "Google AI Essentials",
        color: "bg-yellow-200", // Gold
    },
    {
        name: "TryHackMe",
        color: "bg-red-200", // Gold
    },
];

function Courses() {
    return (
        <div className="courses-container">
            {CourseNames.map((course) => {
                const matchingCerts = Certs.filter(
                    (cert) => cert.coursename === course.name
                );

                return (
                    <div>
                        <div className="flex justify-center items-center mx-4">
                            <h2 className="text-slate-400">{course.name}</h2>
                        </div>
                        <div
                            key={course.name}
                            className="course-card p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-12">
                            {matchingCerts.map((matchingCert) => (
                                <div
                                    className={`card ${course.color} border-b-8 border-b-green-600 shadow-green-500 shadow-md rounded-[2.3rem] max-w-md mx-auto w-[16rem] sm:w-[20rem] hover:scale-90 duration-1000`}>
                                    <a
                                        href={matchingCert.coursera_link}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <div>
                                            <div className="image relative group w-full h-1/3">
                                                <img
                                                    className="aspect-[3/2] object-contain"
                                                    src={matchingCert.img_link}
                                                    alt="Google"
                                                />
                                                <div className="alt absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                                                    <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                                        Coursera Certificate
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center justify-between p-4">
                                                <h2 className="title-gradient font-bold text-xl animate-text-gradient border-blue-600">
                                                    {matchingCert.title}
                                                </h2>
                                                <h3 className="text-gray-500 font-bold text-xl">
                                                    {matchingCert.description}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Courses;
