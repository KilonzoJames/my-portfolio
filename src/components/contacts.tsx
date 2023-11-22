import React from 'react'

const divs = [
  { 
    icon: 
      <img src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-11/128/031_call_support_hand_phone-512.png" 
      alt="Whatsapp Icon"
      className='w-[8rem] h-[8rem]'  
      /> ,
    name: "Contact", 
    a_tag: 
    <a 
    href="https://wa.me/254733577480" 
    target="_blank" rel="noopener noreferrer"
    >     +254728 177 480
    </a>, 
  },
  { 
    icon:
      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2304/64/09-WhatsApp-512.png" 
      alt="Whatsapp Icon"
      className='w-[8rem] h-[8rem]'  
      /> ,
    name: "Whatsapp", 
    a_tag: 
      <a 
      href="https://wa.me/254733577480" 
      target="_blank" rel="noopener noreferrer"
      > Let's Connect   
      </a>, 
  },
  { 
    icon: 
      <img 
      src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" 
      alt="Email Icon" 
      className='w-[8rem] h-[8rem]'
      /> ,
    name: 
    "Gmail", 
    a_tag:   
        <a 
          href="mailto:jay.kilonzo@gmail.com?subject=Hello%20There&body=I%20hope%20you%20are%20doing%20well!" 
          target="_blank" 
          rel="noreferrer"
          > Send Email           
        </a>, 
  },
]
function Contacts() {
  return (
    <div className='relative'>
        <h1 className="py-4 mb-4">GET IN TOUCH</h1>
        <div className='text-xl mx-[4vw] p-[2vw]'>
        I'm always open to connecting with others. Whether you have questions, suggestions, or just want to say hello, feel free to reach out! I'm also open to collaborating on projects, so if you have an idea in mind, don't hesitate to let me know.
        </div >

        <div className="grid lg:grid-cols-3 place-items-center">
            {
              divs.map((div, index) =>
              (
                <div className='grid grid-row-3 w-60 h-72 shadow-md shadow-orange-500 ' >
                  <div className='flex justify-center items-center'>{div.icon}</div>
                  <div className='flex justify-center items-center font-extrabold uppercase'>{div.name}</div>
                  <div><button className='bg-green-500 rounded-md p-2'>{div.a_tag}</button></div>
                </div>
              )
              )
            }
        </div>
    </div>
  )
}

export default Contacts
