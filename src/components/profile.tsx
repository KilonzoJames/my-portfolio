import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div className='mt-36 md:mt-24'>
        <div>
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=35&duration=2500&pause=700&color=0ACF11&vCenter=true&center=true&width=600&height=75&lines=Hey...;I'm+James;Kilonzo+James." alt="Typing SVG" /></a>
        </div>
        <div className='flex flex-wrap justify-center  p-10'>
            <h3 className='text-green-500 font-bold text-4xl my-6'>Fullstack Web Developer</h3>
            <br/>
            {/* <FontAwesomeIcon icon={faArrowDown}/> */}
            <p className='text-lg sm:text-xl mx-2 sm:mx-12 rounded-md'
            >I'm absolutely thrilled about my journey in Software Engineering (SWE) and the collaborative projects ahead! 🚀 The prospect of working with talented individuals and contributing to exciting projects fills me with pure enthusiasm and a sense of purpose. 😃 SWE is like a vast playground of innovation and problem-solving, where every line of code represents a new adventure waiting to unfold. The thought of brainstorming, coding, and collaborating with fellow developers gives me that spark of excitement and the feeling of being part of a dynamic team. 🤝 These projects are not just about code; they're about creating something meaningful, pushing boundaries, and leaving a mark in the digital world. It's a journey filled with challenges, but each obstacle is an opportunity for growth and learning. 🌟 So, here's to the exciting road ahead, where every project is a new story waiting to be written! 📚💻</p>
        </div>
        <div className='flex justify-center my-12'>
            <img
                src="https://static.onecms.io/wp-content/uploads/sites/6/2015/12/the-emperors-new-groove.jpg"
                alt="logo"
                style={{
                    width: '150px',
                    height: '150px',
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
