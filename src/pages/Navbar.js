import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-gradient-to-r from-cyan-500 to-blue-500">
            <Link to={"/"} className="text-3xl text-teal-200 font-semibold font-Montesarrat">CRUD</Link>
            <Link to={"/add-user"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Users</Link>
        </div>
        

<nav className="bg-gradient-to-r from-cyan-500 to-blue-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="../../public/1.png" alt="" />
    <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">Hanouty</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Home</button>
   
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
 
</div>
</div>
</nav>

    </>
  )
}

export default Navbar