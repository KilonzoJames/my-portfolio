import React from 'react'

function Socials() {
    const socialLinks = [
        {
          href: 'https://www.github.com/kilonzojames',
          imgSrc: 'https://cdn3.iconfinder.com/data/icons/social-network-round-gloss-shine/512/GitHub_Social-Network-Communicate-Page-Curl-Effect-Circle-Glossy-Shadow-Shine.png',
          alt: 'GITHUB',
        },
        {
          href: 'https://x.com/se_venly',
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
    <div className='flex flex-col justify-center items-center md:h-screen'>
        <div className='flex flex-col mx-auto'>
          <h2>FIND ME @ </h2>
        </div>
        <div className="container flex flex-wrap justify-center md:gap-32 mx-auto mt-12 ">
            {socialLinks.map((link, index) => (
            <div 
              key={index}
              >
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="socials w-[14rem] h-[12rem] rounded-full flex place-items-center cursor-pointer"
                >
                    <img
                    src={link.imgSrc}
                    alt={link.alt}
                    className="mx-auto w-32 h-32"
                    />
                </a>
                <p className="m-8 text-green-600 text-2xl font-bold">{link.alt}</p>
            </div>
            ))}
        </div>
    </div>
);
}

export default Socials
