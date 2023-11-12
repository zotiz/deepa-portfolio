import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assets/logobg.png';
import { AiOutlineAlignCenter, AiOutlineClose } from 'react-icons/ai';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className={`z-50 w-full static top-0 py-2 ${isTopOfPage ? '' : 'bg-fuchsia-700'}`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div className="relative flex justify-center items-center">
          <h4 className="font-playfair text-2xl font-bold absolute text-black">DB</h4>
          <img src={logo} alt="" className="w-14" />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-between gap-16 font-opensans text-sm font-semibold">
          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>

        {/* MOBILE MENU POPUP */}
        <button
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className="md:hidden w-10 h-10 flex justify-center items-center"
        >
          <AiOutlineAlignCenter size={isMenuToggled ? 32 : 24} />
        </button>

        {isMenuToggled && (
          <div className="fixed md:hidden z-50 right-0 bottom-0 h-full bg-[#a78bfa] w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button className="p-2 rounded-full bg-deep-blue" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <AiOutlineClose size={24} />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
