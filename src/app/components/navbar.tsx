import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Foodtuck.png'
import searchIcon from '../../../public/assets/searchIcon.png'

const Navbar = () => {
  const navItems = ['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'];

  return (
    <div>
      <header className="text-gray-300 body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a href="/" className="mx-auto pt-5 flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image src={logo} alt='Foodtuck' width={90} />
          </a>
          <nav className="flex lg:w-2/5 flex-wrap p-1 items-center text-sm md-20 ml-40">
            {navItems.map((item, index) => (
              <a key={index} className="mr-5 hover:text-white">{item}</a>
            ))}
          </nav>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-5">
            <div className='text-xs border rounded-full pl-3 pr-36 py-1 flex items-center'>
              <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
              <span className="inline-block ml-3">
                <Image src={searchIcon} alt='search' width={13} />
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
