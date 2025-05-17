import React, { useState, useEffect, useRef } from "react";
import BoxBg from "./BoxBg";

const FakeTerminal = () => {
    const [typedText, setTypedText] = useState("");
    const typedTextRef = useRef(""); // 👈 track the latest value
    const [isTyping, setIsTyping] = useState(true);
    const [command, setCommand] = useState("");
    const [commandsHistory, setCommandsHistory] = useState<string[]>([]);

    // Typewriter function for typing effect
    useEffect(() => {
        typedTextRef.current = typedText;
    }, [typedText]);

    // ✅ Safe typewriter using latest typedText
    const typeWriterRecursive = (
        text: string,
        speed: number,
        index: number,
        setTypedText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void // <-- Don't forget this
    ) => {
        if (index < text.length) {
            setTimeout(() => {
                const charToAdd = text[index];
                setTypedText((prevText) => prevText + charToAdd);
                typeWriterRecursive(
                    text,
                    speed,
                    index + 1,
                    setTypedText,
                    callback
                );
            }, speed);
        } else {
            callback(); // once finished typing
        }
    };

    // 🖥 Welcome boot sequence
    useEffect(() => {
        let hasRun = false;
        if (!hasRun) {
            const welcomeMessage = [
                "[booting system...]\n",
                "[authenticating terminal access...]\n",
                "$ Injecting custom shell configuration...\n",
                "$ Initializing environment variables...\n",
                "$ Loading portfolio v1.0...\n",
                "$ Access granted. Systems online. Welcome back, Operator.\n",
                ">>> Awaiting your command...\n",
            ];
            let index = 0;
            const displayWelcomeMessage = () => {
                if (index < welcomeMessage.length) {
                    typeWriterRecursive(
                        welcomeMessage[index],
                        40,
                        0,
                        setTypedText,
                        () => {
                            index++;
                            displayWelcomeMessage();
                        }
                    );
                } else {
                    setTypedText((prev) => prev + "\n\n└─$ ");
                    setIsTyping(false);
                }
            };

            displayWelcomeMessage();
            hasRun = true;
        }
    }, []);

    // ⌨ Handle command input
    const handleCommandInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && command.trim()) {
            const userInput = `└─$ ${command}`;
            setCommandsHistory((prev) => [...prev, userInput]);
            processCommand(command);
            setCommand("");
        }
    };

    // 💡 Command processing
    const processCommand = (input: string) => {
        const trimmedInput = input.trim().toLowerCase();

        if (trimmedInput === "clear") {
            setTypedText(""); // Clear the terminal output
            return;
        }
        let response = "";

        switch (trimmedInput) {
            case "whoami":
                response =
                    "> James Kilonzo | Developer. CyberSentinel. Technophile.";
                break;
            case "help":
                response =
                    "> Available commands: whoami, goals, socials, projects, pwd, help, clear, su root";
                break;
            case "goals":
                response = "> Discover, Create & Secure";
                break;
            case "socials":
                response = "> Twitter: @se_venly\n> GitHub: @kilonzojames";
                break;
            case "projects":
                response =
                    "> Displaying projects...\n> (Project info /#/projects)";
                break;
            case "pwd":
                response = "> /home/kilonzo";
                break;
            case "su root":
                response =
                    "You do not have enough privileges to access /root 🤖\n🤫 Nah, just messing with you. Carry on, Operator.";
                break;
            default:
                response = `> command not found: ${input}`;
        }

        setTypedText((prev) => `${prev}\n\n> ${input}\n${response}\n`);
        typedTextRef.current += `\n${response}\n\n└─$ `;
    };

    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <div className="h-full w-full sm:w-3/4 lg:w-1/2 z-10">
                    <div className="bg-black text-grayish rounded-lg shadow-md w-full mt-16">
                        {/* Terminal Title */}
                        <div className="bg-gray-800 flex items-center justify-between px-4 py-2 rounded-t-lg">
                            <div className="flex space-x-2">
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            </div>
                            <div className="text-lime-400 font-bold text-center tracking-wider merriweather">
                                user@domain.com:{"/>"} Terminal
                            </div>
                            <div className="w-6" />{" "}
                            {/* spacer to center the title */}
                        </div>

                        {/* Terminal */}
                        <div className="p-4 min-h-[300px] whitespace-pre-wrap break-words text-sm sm:text-base">
                            <pre className="whitespace-pre-wrap break-words">
                                {typedText}
                            </pre>
                            {!isTyping && (
                                <input
                                    type="text"
                                    className="merriweather w-full bg-transparent focus:outline-none caret-lime-400"
                                    value={command}
                                    onChange={(e) => setCommand(e.target.value)}
                                    onKeyDown={handleCommandInput}
                                    autoFocus
                                    placeholder="Type 'help' for available commands"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <BoxBg />
        </div>
    );
};

export default FakeTerminal;
