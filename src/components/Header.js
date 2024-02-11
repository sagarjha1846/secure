"use client"

import React, {useState} from 'react';
import UserMenu from './UserMenu';
import AppMenu from './AppMenu';

const NavBar=() => {
  const [darkMode, setDarkMode]=useState(false);
  const [activeMenu, setActiveMenu]=useState("")

  const toggleDarkMode=() => {
    setDarkMode(!darkMode);
  };

  const handleActiveMenu=(menu) => {
    setActiveMenu(menu)
  }

  return (
    <header className={`${darkMode? "bg-[#1E1E1E]  text-white":"bg-white text-black"}  px-10 p-3 font-semibold flex justify-between align-middle content-center self-center items-center border-b-2 shadow-md font-Nun w-full h-auto`}>
      <AppMenu handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
      <UserMenu handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </header>
  );
};

export default NavBar;