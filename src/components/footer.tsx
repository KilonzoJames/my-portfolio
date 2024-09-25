import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

const NAMES = [
  {
    text: "James",
    className:
      "h-9 hover-text flex justify-center items-center bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
  },
  {
    text: "Kilonzo",
    className:
      "h-9 text-shadow-glow hover-text flex justify-center items-center bg-clip-text text-center text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]",
  },
  {
    text: "Mutio.",
    className:
      "h-9 hover-text flex justify-center items-center bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]",
  },
];
function Footer() {
  const [scope, animate] = useAnimate();
  const numberOfNames = NAMES.length;
  const transitionDuration = 4; // Total time for one cycle
  const stepDuration = transitionDuration / numberOfNames; // Equal spacing for each name

  useEffect(() => {
    void animate(
      [
        [scope.current, { y: "-0%" }, { duration: 0 }],
        [
          scope.current,
          { y: `-${100 / numberOfNames}%` },
          { duration: stepDuration, at: "+1.0" },
        ],
        [
          scope.current,
          { y: `-${200 / numberOfNames}%` },
          { duration: stepDuration, at: "+1.0" },
        ],
        [
          scope.current,
          { y: `-${300 / numberOfNames}%` },
          { duration: stepDuration, at: "+1.0" },
        ],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate, scope, numberOfNames]);

  return (
    <div>
      <footer className="relative lg:text-2xl bg-zinc-950 text-luminous flex justify-center items-center p-12 lg:p-16 mt-8">
        &copy;{new Date().getFullYear()} - Template designed & built by
        <div className="h-9 w-24 overflow-hidden ml-2">
          <div ref={scope}>
            {NAMES.map(({ text, className }, i) => (
              <div className={className} key={i}>
                {text}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
