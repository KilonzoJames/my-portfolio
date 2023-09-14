import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="relative bg-zinc-950 text-fuchsia-50 flex justify-center p-10">
        &copy; James Kilonzo {new Date().getFullYear()}  
      </footer>
    </div>
  )
}

export default Footer
