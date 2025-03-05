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
        <div className="flex flex-col gap-12 justify-center items-center">
            <div className="mb-8">
                <h2 className="py-4">GET IN TOUCH</h2>
            </div>
            <div className="text-gradient text-mediumfont mx-[4vw] p-[2vw]">
                {t("contacts")}
            </div>

            <div className="grid lg:grid-cols-3 place-items-center gap-16">
                {divs.map((div, index) => (
                    <div
                        className="contact grid grid-row-3 w-60 h-72 shadow-md shadow-green-600"
                        key={index}>
                        <div className="flex justify-center items-center">
                            {div.icon}
                        </div>
                        <div className="flex justify-center items-center font-extrabold uppercase">
                            {div.name}
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-green-500 rounded-md p-2">
                                {div.a_tag}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:scale-110 duration-500">
                <strong className="border p-3 rounded-[20px] shadow-md shadow-fuchsia-50  flex items-center">
                    <span className="inline-block w-[8px] h-[8px] rounded-full bg-red-600 animate-blink mr-2"></span>
                    Open to work
                </strong>
            </div>
        </div>
    );
}

export default Contacts;
