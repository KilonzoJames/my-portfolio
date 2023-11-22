import React from 'react'

function Socials() {
    const socialLinks = [
        {
          href: 'https://www.github.com/kilonzojames',
          imgSrc: 'https://cdn3.iconfinder.com/data/icons/social-network-round-gloss-shine/512/GitHub_Social-Network-Communicate-Page-Curl-Effect-Circle-Glossy-Shadow-Shine.png',
          alt: 'GITHUB',
        },
        {
          href: 'https://www.x.com/ki_lonzo',
          imgSrc: 'https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-outline-512.png',
          alt: 'TWITTER',
        },
        {
          href: 'https://www.linkedin.com/in/james-kilonzo-392249104',
          imgSrc: 'https://cdn2.iconfinder.com/data/icons/social-media-grunge-1/28/social-media-line-drawn-grunge-linkedin-128.png',
          alt: 'LINKEDIN',
        },
      ];
  return (
    <>
        <div className='flex justify-center'>
          <h2 className='my-10'>SOCIALS</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-32">
            {socialLinks.map((link, index) => (
            <div key={index} className="text-center">
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-300 cursor-pointer rounded-full hover:animate-spin w-[10rem] h-[10rem] justify-items-center flex items-center"
                >
                    <img
                    src={link.imgSrc}
                    alt={link.alt}
                    width="72"
                    height="72"
                    className="mx-auto"
                    />
                </a>
                <p className="mt-4 text-green-600 font-bold">{link.alt}</p>
            </div>
            ))}
        </div>
    </>
);
}

export default Socials
