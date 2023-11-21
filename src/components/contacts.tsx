import React from 'react'

function Contacts() {
  return (
    <div className='relative'>
        <h1 className="text-green-500 font-bold py-4 mb-4 text-3xl">GET IN TOUCH</h1>
        <div className='text-xl mx-[4vw] p-[2vw]'>
        I'm always open to connecting with others. Whether you have questions, suggestions, or just want to say hello, feel free to reach out! I'm also open to collaborating on projects, so if you have an idea in mind, don't hesitate to let me know.
        </div>
        <br/>
        <div className="flex justify-center p-[1vw] gap-16 mb-[2rem]">
            <a 
            href="https://wa.me/254733577480" 
            target="_blank" rel="noopener noreferrer"
            >
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2304/64/09-WhatsApp-512.png" 
                alt="Whatsapp Icon"
                className='w-[4rem] h-[4rem]'  
                />
            </a>
            <a 
            href="mailto:jay.kilonzo@gmail.com?subject=Hello%20There&body=I%20hope%20you%20are%20doing%20well!" 
            target="_blank" 
            rel="noreferrer"
             >
                <img 
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" 
                alt="Email Icon" 
                className='w-[4rem] h-[4rem]'
                />
            </a>
        </div>
    </div>
  )
}

export default Contacts
