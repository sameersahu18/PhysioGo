
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'


export default function Navbar() {
const [open, setOpen] = useState(false)
return (
<header className="bg-white shadow">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<img src='./logo.png ' className='h-10' />

<nav className="hidden md:flex gap-6 items-center">
<NavLink to="/" className={({isActive}) => isActive ? 'text-blue-600' : ''}>Home</NavLink>
<NavLink to="/book" className={({isActive}) => isActive ? 'text-blue-600' : ''}>Book Your Physio</NavLink>
<NavLink to="/AiMatcher" className={({isActive}) => isActive ? 'text-blue-600' : ''}>Ai Matcher</NavLink>
<NavLink to="/FindAPhysio" className={({isActive}) => isActive ? 'text-blue-600' : ''}>Find A Physio</NavLink>
<NavLink to="/ContactUs" className={({isActive}) => isActive ? 'text-blue-600' : ''}>Contact</NavLink>

<SignedOut>
  <SignInButton mode="modal">
    <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
      Log in
    </button>
  </SignInButton>
</SignedOut>

<SignedIn>
  <UserButton afterSignOutUrl="/" />
</SignedIn>

</nav>


<button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="menu">
{open ? <FiX size={22}/> : <FiMenu size={22}/>}
</button>
</div>


{open && (
<div className="md:hidden bg-white border-t">
<div className="flex flex-col p-4 gap-3">
<NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
<NavLink to="/book" onClick={() => setOpen(false)}>Book Your Physio</NavLink>
<NavLink to="/AiMatcher" onClick={() => setOpen(false)}>Ai Matcher</NavLink>
<NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
<NavLink to="/FindAPhysio" onClick={() => setOpen(false)}>FindAPhysio</NavLink>
<Link to="/book" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">Book Now</Link>
</div>
</div>
)}
</header>
)
}