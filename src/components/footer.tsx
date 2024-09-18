import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="relative bg-zinc-950 text-fuchsia-50 flex justify-center items-center p-12 lg:p-16 mt-8">
        &copy; {new Date().getFullYear()} - Template designed & built by James Kilonzo
      </footer>
    </div>
  )
}

export default Footer
