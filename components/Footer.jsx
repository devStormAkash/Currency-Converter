import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="w-full py-5 bg-[#091F34] text-white flex flex-col justify-center items-center">
        <div className="px-4 py-0.5 flex flex-col items-center gap-2.5">
          <h2 className="text-xl font-semibold mb-1">Get in touch</h2>
          <div className="flex items-center gap-3">
            <FaFacebook />
            <FaGithub />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
          <div className="flex items-center gap-3 mt-2.5">
            <input
              type="email"
              placeholder="Enter email...."
              className="rounded-full px-3 py-1 md:px-6 md:py-3 border"
            />
            <button
              type="submit"
              className="rounded-full px-3 py-1 md:px-6 md:py-3 border bg-red-700 hover:bg-red-800 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>

        <hr className="w-full my-4 border-t border-t-sky-800" />
        <p className="flex flex-col md:flex-row items-center gap-2 text-xs">
          <div className="flex items-center gap-2.5">
            <FaCopyright />
            <span className=" text-gray-200">2025 Made with</span>
            <span className="text-red-600">
              <FaHeart />
            </span>
            <span>by Akash Giri</span>
          </div>
          <span> | All rights are preserved |</span>
        </p>
      </div>
    </>
  );
}

export default Footer
