import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Foodtuck.png'
import searchIcon from '../../../public/assets/searchIcon.png'
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-300 body-font">
      <a className="mx-auto pt-5 flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <Image src={logo} alt='Foodtuck' width={90}/>
    </a>
    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-start">
      <nav className="flex lg:w-2/5 flex-wrap p-1 items-start text-sm md-20 ml-40">
      <a className="mr-5 hover:text-white">Home</a>
      <a className="mr-5 hover:text-white">Menu</a>
      <a className="mr-5 hover:text-white">Blog</a>
      <a className="mr-5 hover:text-white">Pages</a>
      <a className="mr-5 hover:text-white">About</a>
      <a className="mr-5 hover:text-white">Shop</a>
      <a className="mr-5 hover:text-white">Contact</a>
    </nav>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-5">
      <search className='text-xs border rounded-full pl-3 pr-36 py-1'>Search...
        <span className="inline-block mr-3 ml-200">
        <Image src={searchIcon} alt='search'width={13} className=''/>
        </span></search>
      {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar
