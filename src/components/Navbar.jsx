import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleNavToggle=()=>{
    setShowMobileMenu=(!showMobileMenu);
  }
  return (
    <nav class="container h-14 flex justify-between bg-white flex-wrap py-2 px-5 border max-w-screen-2xl items-center
    ">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <svg class="fill-current h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="48px" height="48px" viewBox="-0.5 -0.5 800 800"><defs/><g><ellipse cx="400" cy="400" rx="400" ry="400" fill="#000000" stroke="rgb(0, 0, 0)" stroke-width="0.1" pointer-events="all"/><rect x="265" y="265" width="270" height="270" fill="#ffffff" stroke="none" pointer-events="all"/></g></svg>
    <span class="font-medium font-heading text-xl tracking-tight">arth
    <span className="ml-0.5 font-semibold">.</span>
    </span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 mb-3  rounded text-gray-600  hover:text-black hover:text-white dark:hover:border-white" onClick={()=>setShowMobileMenu(!showMobileMenu)}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <nav class={`w-full font-medium block flex-grow lg:flex lg:items-center lg:w-auto ${showMobileMenu ? 'block':'hidden'}`}>
    <div class="text-sm lg:flex-grow">
      <a href="/home" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500  hover:text-black mr-4">
        Docs
      </a>
      <Link to="/">
      <p  class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
        Examples
      </p>
        </Link>

        <Link to="/about">
      <p class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
        Blog
      </p>
      </Link>
        <Link to="/about">
      <p class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
        Documentation
      </p>
      </Link>
    </div>
    <div>
      <a class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-200 text-black hover:bg-gray-200/80 h-9 rounded-md px-4  max-lg:mt-3" href="/login">Login</a>
    </div>
  </nav>
</nav>
  )
}

export default Navbar
