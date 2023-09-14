import React from 'react'

function Contacts() {
  return (
    <div className='relative'>
        <p className='text-center'>
        Feel free to get in touch with us anytime! Whether you have questions, suggestions, or just want to say hello, we'd love to hear from you. Our team is here to assist you and provide the information you need. You can reach us via email, phone, or social media. We're committed to providing excellent service and prompt responses, so don't hesitate to contact us. Your feedback and inquiries are important to us, and we look forward to connecting with you!"
        </p>
        <br/>
        <div className="flex justify-center p-5 gap-10">
            <a href="https://api.whatsapp.com/send?phone=0733577480"  target="_blank" rel="noreferrer" >
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2304/64/09-WhatsApp-512.png" alt="Whatsapp Icon" width="60" height="60" />
            </a>
            <a href="mailto:jay.kilonzo@gmail.com?subject=Hello%20There&body=I%20hope%20you%20are%20doing%20well!" target="_blank" rel="noreferrer" >
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Email Icon" width="60" height="60" />
            </a>
        </div>
    </div>
  )
}

export default Contacts
