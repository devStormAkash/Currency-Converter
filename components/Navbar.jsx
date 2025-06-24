import React from 'react'
import { IoMdContact } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="bg-stone-700 flex shadow-2xl shadow-red-400 justify-around  items-center py-6"
      >
        {/* Left part of the navbar  */}

        <div className="w-1/3 text-white">
          <div className="flex pr-14 justify-center items-center">
            <div className="text-rose-700 text-3xl font-semibold">X</div>
            <div className="text-lg font-semibold">
              Currency<span className="text-rose-700">lab</span>
            </div>
          </div>
        </div>

        {/* Right part of the navbar  */}

        <div className="">
          <div className="hidden lg:flex justify-center items-center gap-6">
            <div className="text-white text-normal font-[500]">Home</div>
            <div className="text-white text-normal font-[500]">About Us</div>
            <div className="text-white text-normal font-[500]">
              Exchange Pair
            </div>
            <div className="text-white text-normal font-[500]">Blog</div>
            <div className="text-white text-normal font-[500]">Support</div>
            <div className="flex items-center gap-2">
              <div className="text-rose-700 text-3xl">
                <IoMdContact />
              </div>
              <span className="text-white text-normal font-[500]">
                Login | Register
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-rose-700 text-3xl">
                <MdOutlineLanguage />
              </div>
              <select
                name="languages"
                className="text-white text-normal font-semibold bg-zinc-700"
              >
                <option value="English">English</option>
                <option value="English">Hindi</option>
                <option value="English">Bengali</option>
                <option value="English">Sanskrit</option>
              </select>
            </div>
          </div>
          <div className="lg:hidden text-white md:text-3xl text-2xl font-bold">
            <RiMenuFill />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
