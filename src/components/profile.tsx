import React from 'react'
import image from "../assets/IMG_20230919_073049.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div className='flex flex-col'>
        <div className="">
            <a href="https://git.io/typing-svg">
                <img 
                src="https://readme-typing-svg.demolab.com?font=Exo+2&weight=800&size=40&duration=2500&pause=700&color=0ACF11&center=true&vCenter=true&width=1000&height=150&lines=Hello%2C+I'm+James+Kilonzo%2C+a+dedicated+professional.;I+bring+passion+and+expertise+to+every+project.;Let's+create+something+extraordinary+together." 
                alt="Typing SVG" 
                />
            </a>
        </div>
        <div className='animate-text flex flex-col flex-wrap w-5/6 justify-center rounded-2xl mx-auto gap-4 mt-10 py-10'>
            <h3 className='text-green-500 font-extrabold text-center text-3xl m-2'>Fullstack Web Developer</h3>
            <div className='text-xl'
            >I'm absolutely thrilled about my journey in Software Engineering (SWE) and the collaborative projects ahead! 🚀 The prospect of working with talented individuals and contributing to exciting projects fills me with pure enthusiasm and a sense of purpose. 😃 SWE is like a vast playground of innovation and problem-solving, where every line of code represents a new adventure waiting to unfold. The thought of brainstorming, coding, and collaborating with fellow developers gives me that spark of excitement and the feeling of being part of a dynamic team. 🤝 These projects are not just about code; they're about creating something meaningful, pushing boundaries, and leaving a mark in the digital world. It's a journey filled with challenges, but each obstacle is an opportunity for growth and learning. 🌟 So, here's to the exciting road ahead, where every project is a new story waiting to be written! 📚💻</div>
        </div>
        <div className='animate-image rounded-lg flex justify-center my-8'>
            <img
                src={image}
                alt="logo"
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: '#ddd',
                }}
            />
        </div>
    </div>
  )
}

export default Profile
