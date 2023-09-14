import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className='border border-2 border-sky-500 rounded-lg w-96 h-80 shadow-2xl shadow-sky-400 text-center p-6'>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
        <a href="./" className="text-blue-500 hover:underline"><FontAwesomeIcon icon={faArrowLeft} /> Back to our site</a>
        <p className="mt-2">If this is your site, and you weren't expecting a 404 for this path, please visit this "page not found" support guide for troubleshooting tips.</p>
      </div>
    </div>
  
  )
}

export default NotFound
