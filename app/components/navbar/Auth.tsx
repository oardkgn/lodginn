"use client";
import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

function Auth() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <div className=" flex gap-2 relative ">
      <button className="hidden md:block text-sm hover:text-brand transition-all py-2 font-light px-4 rounded-full  text-dark-browntransition-all hover:bg-bright-green">
        List your property
      </button>
      <button
        onClick={toggleMenu}
        className=" md:py-1 md:px-2 py-3 px-3  border border-bright-green transition-all hover:bg-brand hover:text-bright-green text-brand flex gap-2 items-center rounded-full"
      >
        <FiMenu size={20} />
        <BiSolidUserCircle className=" hidden md:block" size={40} />
      </button>
      {menu && (
        <div className=" absolute right-0 top-16 z-10 w-48 py-2 items-start bg-white rounded-md shadow-md flex flex-col">
          <button className=" p-4 hover:bg-gray-100 text-left w-full">Sign Up</button>
          <button className=" p-4 font-light hover:bg-gray-100 text-left w-full">Log in</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
