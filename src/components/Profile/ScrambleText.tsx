import React, { ReactNode } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$!|\\#&@{}<>*";

type ScrambleTextProps = {
    text: string; // string to scramble
    children: ReactNode;
    className?: string;
};

const ScrambleText: React.FC<ScrambleTextProps> = ({
    text,
    children,
    className,
}) => {
    const handleScramble = (
        event:
            | React.MouseEvent<HTMLDivElement>
            | React.FocusEvent<HTMLDivElement>
    ) => {
        const element = event.currentTarget;
        let iterations = 0;

        const interval = setInterval(() => {
            const scrambled = text
                .split("")
                .map((char, index) => {
                    if (index < iterations) return text[index];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            const target = element.querySelector(
                "[data-value]"
            ) as HTMLElement | null;
            if (target) target.innerText = scrambled;

            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    };
    return (
        <div onClick={handleScramble} className={className}>
            {children}
        </div>
    );
};

export default ScrambleText;
