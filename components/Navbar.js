import Image from "next/image";
import React from "react";
import LogoDescpt from "../public/logo_descpt.png";

function Navbar() {
  return (
    <div className="bg-transparent flex justify-between items-center hover:cursor-pointer">
      <Image
        className=""
        src={LogoDescpt}
        width={150}
        height={20}
        objectFit="fit"
      />

      <div className="flex justify-between items-center space-x-2 md:space-x-[24px]">
        <div className="flex flex-col items-center justify-center font-bold hover:cursor-pointer">
          <div className="">Explore</div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#AC6FFA]"></div>
        </div>
        <div className="hover:cursor-pointer">About Us</div>
        <div className="hover:cursor-pointer">Services</div>
        <div className="hover:cursor-pointer">Contact</div>
      </div>

      <div className="flex justify-between items-center space-x-2 md:space-x-[10px]">
        <div className="md:mr-5 hover:cursor-pointer">Sign Up</div>
        <div className="border p-2 px-4 hover:cursor-pointer">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
