"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className=" flex justify-center items-center relative ">
      <div className="bg-[#9a87ad] h-[3.5rem] text-white flex mt-5 gap-12 justify-between items-center px-5 rounded-full w-[65%] m-auto max-[1024px]:gap-8 max-[768px]:w-[90%] ">
        <Image
          src={require("../public/assets/logo.png")}
          height={29}
          width={74}
          className="basis-[10%]"
        />
        <ul className="flex basis-[80%] justify-between max-[426px]:hidden max-[376px]:hidden max-[536px]:hidden  max-[320px]:hidden">
          {navLinks.map((item) => (
            <li key={item.title}>
              <Link
                className="text-[16px] leading-[24] font-[400]"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className=" bg-gradient-to-r from-[#5311A7] to-[#932BFB] px-8 py-2 basis-[10%] rounded-full font-[600] max-[636px]:hidden">
          Login
        </button>
        <GiHamburgerMenu className="min-[635px]:hidden" onClick={handleMenu} />
      </div>
      {open ? (
        <div
          className={`bg-white flex justify-between rounded-md h-fit w-[12rem] p-4 absolute right-0  top-10  ease-in-out duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col text-black gap-1 ">
            {navLinks.map((item) => (
              <li key={item.title}>
                <Link className="text-[16px]  font-[400]" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <RxCross2 onClick={handleMenu} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
