import React from 'react'
import image from "../assets/IMG_20230919_073049.jpg"
import TypeWriterEffect from 'react-typewriter-effect';
 

function Profile() {
  return (
    <div className='flex flex-col'>
        <div className='animate-svg flex flex-col text-4xl gap-16 p-4 mx-auto'>
            <div className=' flex justify-center hover:scale-105 transition-all duration-500'>
                <img
                    src={image}
                    alt="logo"
                    className='rounded-full md:mx-auto shadow-md shadow-gray-800 h-72 w-72 object-cover'
                />
            </div>
            <div className='mb-4'>
                <TypeWriterEffect
                        textStyle={{ 
                            fontFamily: 'Merienda', 
                            fontWeight: 800, 
                            fontSize: '1.5em', 
                            textDecoration: 'none',
                            color: '#0ACF11', 
                        }}
                        multiText={[
                            'Hi! Welcome to my website!\n'                          
                        ]}
                        cursorColor="#0ACF11"
                        startDelay={2000}
                        // multiTextDelay={1500}
                        typeSpeed={35}
                />
            </div>
            <div className='mb-4'>
                <TypeWriterEffect
                    textStyle={{ 
                        fontFamily: 'Merienda', 
                        fontWeight: 800, 
                        fontSize: '1.5em', 
                        textDecoration: 'none',
                        color: '#0ACF11', 
                    }}
                    multiText={[
                        "I'm James Kilonzo ...\n",
                        'A full-stack software developer.\n',
                        'I bring passion and expertise to every project.\n',
                        "Let's create something extraordinary together!\n",
                        ]}
                    cursorColor="black"
                    startDelay={3000}
                    typeSpeed={35}
                />
            </div>
        </div>
          
      
        <div className='animate-text flex flex-col flex-wrap w-5/6 justify-center rounded-2xl mx-auto gap-4 mt-10 py-10'>
            <h2 className='text-center mx-auto m-2'>Profile</h2>
            <h2 className='font-extrabold text-center  m-2 '>Fullstack Web Developer</h2>
            <div className='text-gradient text-xl'
            >I'm absolutely thrilled about my journey in Software Engineering (SWE) and the collaborative projects ahead! 🚀 The prospect of working with talented individuals and contributing to exciting projects fills me with pure enthusiasm and a sense of purpose. 😃 SWE is like a vast playground of innovation and problem-solving, where every line of code represents a new adventure waiting to unfold. The thought of brainstorming, coding, and collaborating with fellow developers gives me that spark of excitement and the feeling of being part of a dynamic team. 🤝

            These projects are not just about code; they're about creating something meaningful, pushing boundaries, and leaving a mark in the digital world. It's a journey filled with challenges, but each obstacle is an opportunity for growth and learning. 🌟 So, here's to the exciting road ahead, where every project is a new story waiting to be written! 📚💻</div>
        </div>
      
    </div>
  )
}

export default Profile
