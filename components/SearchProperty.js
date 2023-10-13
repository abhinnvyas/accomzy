import React from "react";
import Location from "../public/Assets/Location.png";
import HomeIcon from "../public/Assets/home.png";
import CurrencyUSD from "../public/Assets/currency-usd.png";
import Magnify from "../public/Assets/magnify.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function SearchProperty() {
  return (
    <div className="">
      <div className="ml-5 flex flex-wrap max-w-xs space-x-4 items-center">
        <div className="flex-grow text-center bg-[#AC6FFA] text-black p-2 rounded-t-md hover:cursor-pointer">
          Hostel
        </div>
        <div className="flex-grow text-center bg-white text-black p-2 rounded-t-md hover:cursor-pointer">
          PG
        </div>
        <div className="flex-grow text-center bg-white text-black p-2 rounded-t-md hover:cursor-pointer">
          Rent out
        </div>
      </div>
      <div className="flex flex-col space-y-2 md:flex-row space-x-4 bg-white bg-opacity-30 p-2 px-4 rounded-md border border-white max-w-3xl">
        <div className="flex-grow flex flex-row items-center justify-between space-x-2 bg-white p-2 px-4 text-black rounded-md hover:cursor-pointer">
          <div className="flex space-x-2">
            <Image
              className="w-[22px] h-[20px]"
              src={Location}
              width={20}
              height={20}
            />
            <h1>Location</h1>
          </div>
          <ChevronDownIcon className="w-[22px] h-[20px]" />
        </div>

        <div className="flex-grow flex flex-row items-center justify-between space-x-2 bg-white p-2 px-4 text-black rounded-md hover:cursor-pointer">
          <div className="flex space-x-2">
            <Image
              className="w-[22px] h-[20px]"
              src={HomeIcon}
              width={20}
              height={20}
            />
            <h1>Hostel</h1>
          </div>
          <ChevronDownIcon className="w-[22px] h-[20px]" />
        </div>
        <div className="flex-grow flex flex-row items-center justify-between space-x-2 bg-white p-2 px-4 text-black rounded-md hover:cursor-pointer">
          <div className="flex space-x-2">
            <Image
              className="w-[22px] h-[20px]"
              src={CurrencyUSD}
              width={20}
              height={20}
            />
            <h1>Price</h1>
          </div>
          <ChevronDownIcon className="w-[22px] h-[20px]" />
        </div>
        <div className="flex-grow flex flex-row items-center justify-between space-x-2 bg-[#AC6FFA] p-2 px-4 text-black rounded-md hover:cursor-pointer">
          <div className="flex space-x-2">
            <Image
              className="w-[22px] h-[20px]"
              src={Magnify}
              width={20}
              height={20}
            />
            <h1>Search</h1>
          </div>
          <ChevronDownIcon className="w-[22px] h-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default SearchProperty;
