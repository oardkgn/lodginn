import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className=" text-sm transition-all w-full md:w-fit ml-0 md:ml-8 cursor-pointer hover:shadow-lg  font-bold shadow-md rounded-full justify-between md:justify-normal flex items-center border border-bright-green">
      <button className=" border-brigth-green px-3 pl-5 py-3 text-dark-brown ">Anywhere</button>
      <div className=" w-[1px] h-6 bg-bright-green rounded-full hidden md:block"></div>
      <button className=" border-bright-green-green px-3 py-3 text-dark-brown hidden md:block">Any week</button>
      <div className=" w-[1px] h-6 bg-bright-green rounded-full hidden md:block"></div>
      <button className=" text-dark-brown py-3 px-3 hidden md:block">Add guests</button>
      <button className=" p-2 rounded-full m-2 bg-brand text-bright-green"><FiSearch /></button>
    </div>
  );
}

export default Search;
