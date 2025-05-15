import React from "react";
import { useTranslation } from "react-i18next";

const divs = [
    {
        icon: (
            <img
                src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-11/128/031_call_support_hand_phone-512.png"
                alt="Whatsapp Icon"
                className="w-[8rem] h-[8rem]"
            />
        ),
        name: "Contact",
        a_tag: <a href="tel:+254728177470"> +254728 177 470</a>,
    },
    {
        icon: (
            <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2304/64/09-WhatsApp-512.png"
                alt="Whatsapp Icon"
                className="w-[8rem] h-[8rem]"
            />
        ),
        name: "Whatsapp",
        a_tag: (
            <a
                href="https://wa.me/254733577480"
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                Let's Connect
            </a>
        ),
    },
    {
        icon: (
            <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                alt="Email Icon"
                className="w-[8rem] h-[8rem]"
            />
        ),
        name: "Gmail",
        a_tag: (
            <a
                href="mailto:jay.kilonzo@gmail.com?subject=Hello%20There&body=I%20hope%20you%20are%20doing%20well!"
                target="_blank"
                rel="noreferrer">
                {" "}
                Send Email
            </a>
        ),
    },
];
function Contacts() {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center mb-8">
            <div className="w-4/5 md:w-1/2 flex flex-col justify-center items-center gap-12">
                <div className="w-full flex flex-col md:flex-row justify-between items-center my-8">
                    <div>
                        <h1 className="divtitle">LET'S GET IN TOUCH</h1>
                    </div>
                    <div>
                        <img
                            src="https://i.pinimg.com/736x/ce/e7/c7/cee7c733367aa5561344ce35d44c840f.jpg"
                            alt="Holding hands"
                            className="w-[10.06rem] h-[6.81rem] rounded-full"
                        />
                        <div className="merienda-class flex flex-col justify-end text-gray-500">
                            <span>It’s not just a touch,</span>
                            <span>it’s a connection...</span>
                        </div>
                    </div>
                </div>
                <div className="text-gradient text-mediumfont mb-12 text-sm md:text-lg sm:text-md tracking-wider Montserrat">
                    {t("contacts")}
                </div>
                <div className="grid lg:grid-cols-3 place-items-center gap-24">
                    {divs.map((div, index) => (
                        <div
                            key={index}
                            className="contact grid grid-row-3 w-44 h-60 md:w-52 lg:w-60 lg:h-72 shadow-md shadow-green-600">
                            {[
                                div.icon,
                                <span className="font-extrabold uppercase">
                                    {div.name}
                                </span>,
                                <button className="bg-green-500 rounded-md p-2">
                                    {div.a_tag}
                                </button>,
                            ].map((content, i) => (
                                <div
                                    key={i}
                                    className="flex justify-center items-center">
                                    {content}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center cursor-pointer hover:scale-110 duration-500">
                    <strong className="flex items-center p-3 border rounded-[20px] shadow-fuchsia-50 shadow-md">
                        <span className="inline-block w-[8px] h-[8px] rounded-full bg-red-600 animate-blink mr-2"></span>
                        Open to work
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
